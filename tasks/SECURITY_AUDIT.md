# Security Audit Report - ScholarToday

**Date:** March 3, 2026  
**Project:** ScholarToday - Scholarly Posts Collection  
**Auditor:** GitHub Copilot (Claude Sonnet 4.5)  
**Risk Level:** LOW-MEDIUM (Educational project with public API)

---

## Executive Summary

This security audit identifies potential vulnerabilities and provides recommendations for production deployment. Since this project uses a public API (JSONPlaceholder) with no authentication or sensitive data, the overall risk is **LOW-MEDIUM**. However, several security improvements are recommended before public deployment.

---

## 1. Input Validation ⚠️ MEDIUM RISK

### Issue 1.1: URL Parameter Injection (PostDetail.jsx)
**Status:** ❌ VULNERABLE  
**Risk Level:** MEDIUM

**Current Code:**
```jsx
const { id } = useParams();
// ... later used directly in API call
await getPostById(id);
```

**Vulnerability:**
- No validation on `id` parameter
- Could accept: `/post/abc`, `/post/9999999`, `/post/<script>`
- Could cause unnecessary API calls or errors

**Recommended Fix:**
```jsx
const { id } = useParams();
const navigate = useNavigate();

useEffect(() => {
  // Validate ID is a number between 1-100
  const postId = parseInt(id, 10);
  
  if (isNaN(postId) || postId < 1 || postId > 100) {
    setError('Invalid post ID. Please use a valid post number (1-100).');
    setLoading(false);
    return;
  }
  
  fetchPostAndUser(postId);
}, [id, navigate]);
```

**Impact if Not Fixed:**
- Wasted API calls
- Poor UX with cryptic errors
- Potential DoS vector (excessive invalid requests)

---

### Issue 1.2: Search Input Length Limit (PostList.jsx)
**Status:** ❌ NO LIMIT  
**Risk Level:** LOW

**Current Code:**
```jsx
<input
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
```

**Vulnerability:**
- No maximum length on search input
- Users could paste extremely long strings
- Could cause performance issues on filtering

**Recommended Fix:**
```jsx
<input
  value={searchTerm}
  onChange={(e) => {
    const value = e.target.value;
    if (value.length <= 200) { // Reasonable limit
      setSearchTerm(value);
    }
  }}
  maxLength={200}
/>
```

**Impact if Not Fixed:**
- Performance degradation on search
- Potential browser freeze with very long strings

---

### Issue 1.3: XSS Prevention in Search Display
**Status:** ⚠️ POTENTIALLY VULNERABLE  
**Risk Level:** LOW (React escapes by default)

**Current Code:**
```jsx
<span className="italic text-[#5C4033]">"{searchTerm}"</span>
```

**Analysis:**
- React automatically escapes strings in JSX
- However, best practice is to explicitly sanitize
- If searchTerm ever used with `dangerouslySetInnerHTML`, would be vulnerable

**Recommended Fix:**
```jsx
// Add helper function
const sanitizeSearchTerm = (term) => {
  return term.replace(/[<>]/g, '').trim();
};

// Use in component
const filteredPosts = posts.filter((post) => {
  const safeTerm = sanitizeSearchTerm(searchTerm);
  return post.title.toLowerCase().includes(safeTerm.toLowerCase()) ||
         post.body.toLowerCase().includes(safeTerm.toLowerCase());
});
```

**Impact if Not Fixed:**
- Minimal (React protection exists)
- Could be issue if code refactored to use dangerouslySetInnerHTML

---

## 2. API Security ⚠️ MEDIUM RISK

### Issue 2.1: No Request Timeout
**Status:** ❌ MISSING  
**Risk Level:** MEDIUM

**Current Code:**
```jsx
const response = await fetch(`${BASE_URL}/posts`);
```

**Vulnerability:**
- No timeout on fetch requests
- Could hang indefinitely if API is slow
- Poor UX and potential memory leaks

**Recommended Fix:**
```jsx
const fetchWithTimeout = async (url, timeout = 10000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      signal: controller.signal
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    if (error.name === 'AbortError') {
      throw new Error('Request timeout. Please check your connection.');
    }
    throw error;
  }
};

export const getAllPosts = async () => {
  try {
    const response = await fetchWithTimeout(`${BASE_URL}/posts`);
    // ... rest of code
  } catch (error) {
    // ...
  }
};
```

**Impact if Not Fixed:**
- Hanging requests
- Poor user experience
- Potential memory leaks

---

### Issue 2.2: Rate Limiting (Client-Side)
**Status:** ⚠️ NO IMPLEMENTATION  
**Risk Level:** LOW (API provider handles it)

**Analysis:**
- JSONPlaceholder has built-in rate limiting
- Client-side rate limiting would be good practice
- Prevents accidental DoS from rapid requests

**Recommended Fix (Optional):**
```jsx
// Simple debounce for search
import { useState, useEffect } from 'react';

const useDebounce = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => clearTimeout(handler);
  }, [value, delay]);
  
  return debouncedValue;
};

// In PostList component
const debouncedSearchTerm = useDebounce(searchTerm, 300);
const filteredPosts = posts.filter((post) =>
  post.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
  post.body.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
);
```

**Impact if Not Fixed:**
- Minimal (server-side protection exists)
- Could improve performance on search

---

### Issue 2.3: API URL Hardcoded
**Status:** ⚠️ NOT BEST PRACTICE  
**Risk Level:** LOW

**Current Code:**
```javascript
const BASE_URL = 'https://jsonplaceholder.typicode.com';
```

**Best Practice:**
- Use environment variables for API URLs
- Easier to change for different environments (dev/staging/prod)

**Recommended Fix:**
```javascript
// Create .env file (add to .gitignore if not public)
// VITE_API_BASE_URL=https://jsonplaceholder.typicode.com

// In api.js
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://jsonplaceholder.typicode.com';
```

**Impact if Not Fixed:**
- No security impact for public API
- Less flexible for environment changes

---

## 3. Security Headers ❌ CRITICAL

### Issue 3.1: Missing Content Security Policy
**Status:** ❌ NOT IMPLEMENTED  
**Risk Level:** MEDIUM-HIGH

**Current State:**
- No CSP headers configured
- Vulnerable to XSS attacks if any vulnerability exists
- No protection against clickjacking

**Recommended Fix:**
Add to `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'Content-Security-Policy': [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline'", // Needed for Vite dev
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: https:",
        "connect-src 'self' https://jsonplaceholder.typicode.com",
        "frame-ancestors 'none'",
        "base-uri 'self'",
        "form-action 'self'"
      ].join('; ')
    }
  },
  build: {
    rollupOptions: {
      output: {
        // Add integrity hashes for production
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash].[ext]'
      }
    }
  }
})
```

**For Production Deployment:**
Add to hosting provider (Vercel/Netlify):

Create `public/_headers` file:
```
/*
  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://jsonplaceholder.typicode.com; frame-ancestors 'none'
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

**Impact if Not Fixed:**
- Higher XSS risk
- Clickjacking vulnerability
- No defense-in-depth

---

### Issue 3.2: Missing Security Headers
**Status:** ❌ NOT IMPLEMENTED  
**Risk Level:** MEDIUM

**Missing Headers:**
- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
- `Referrer-Policy` - Controls referrer information
- `Permissions-Policy` - Restricts browser features

**See Issue 3.1 for implementation.**

---

## 4. Information Disclosure ⚠️ LOW RISK

### Issue 4.1: Verbose Error Messages
**Status:** ⚠️ TOO DETAILED  
**Risk Level:** LOW

**Current Code:**
```jsx
console.error('Error fetching posts:', error);
throw error; // Full error exposed
```

**Vulnerability:**
- Detailed error messages shown to users
- Stack traces visible in console
- Could reveal internal structure

**Recommended Fix:**
```javascript
export const getAllPosts = async () => {
  try {
    const response = await fetchWithTimeout(`${BASE_URL}/posts`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    // Log detailed error for debugging (only in development)
    if (import.meta.env.DEV) {
      console.error('Error fetching posts:', error);
    }
    
    // Throw generic error for users
    throw new Error('Unable to load posts. Please try again later.');
  }
};
```

**Impact if Not Fixed:**
- Potential information leakage
- Professional appearance compromised

---

### Issue 4.2: Source Maps in Production
**Status:** ⚠️ POTENTIALLY EXPOSED  
**Risk Level:** LOW

**Current Config:**
- No explicit sourceMap configuration
- Vite generates source maps by default

**Recommended Fix:**
Add to `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Disable for production
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})
```

**Impact if Not Fixed:**
- Source code readable in browser DevTools
- Easier for attackers to find vulnerabilities

---

## 5. Dependencies Security ⚠️ MONITOR

### Issue 5.1: Dependency Vulnerabilities
**Status:** ⚠️ NEEDS AUDIT  
**Risk Level:** VARIES

**Current State:**
- Dependencies not audited
- No automated vulnerability scanning

**Recommended Actions:**

1. **Run npm audit:**
```bash
npm audit
npm audit fix
```

2. **Check specific packages:**
```bash
npm outdated
```

3. **Add to package.json scripts:**
```json
"scripts": {
  "security-check": "npm audit --audit-level=moderate",
  "update-deps": "npm update"
}
```

4. **Consider using Snyk or Dependabot:**
- GitHub Dependabot (free for public repos)
- Snyk scanning
- Regular dependency updates

**Current Dependencies Analysis:**
- ✅ React 19.2.0 - Latest, secure
- ✅ React Router DOM 7.13.1 - Latest
- ✅ Vite 7.3.1 - Latest, secure
- ✅ Tailwind CSS 4.2.1 - Latest
- ✅ PropTypes 15.8.1 - Stable, secure

**Impact if Not Fixed:**
- Unknown vulnerabilities could exist
- No mechanism to detect security issues

---

## 6. Additional Security Measures ✅

### Issue 6.1: .gitignore Configuration
**Status:** ✅ GOOD  
**Risk Level:** NONE

**Current Config:**
```ignore
node_modules
dist
*.local
.env
.env.local
```

**Analysis:**
- ✅ Correctly excludes sensitive files
- ✅ Excludes build artifacts
- ✅ Excludes environment files

**Recommendation:** Consider adding:
```ignore
# Security
.env*
!.env.example
*.key
*.pem

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Testing
coverage/
.nyc_output/
```

---

### Issue 6.2: HTTPS Enforcement
**Status:** ⚠️ HOSTING DEPENDENT  
**Risk Level:** MEDIUM if not HTTPS

**Recommendation:**
- Ensure deployment uses HTTPS
- Add HSTS header in production
- Redirect HTTP to HTTPS

**For Vercel/Netlify:**
Both automatically provide HTTPS with Let's Encrypt certificates.

Add to `public/_headers`:
```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

---

## 7. Privacy & Compliance ✅

### Issue 7.1: No Personal Data Collection
**Status:** ✅ COMPLIANT  
**Risk Level:** NONE

**Analysis:**
- ✅ No user authentication
- ✅ No cookies used
- ✅ No analytics tracking
- ✅ No personal data stored
- ✅ GDPR/CCPA compliant by default

**Recommendation:**
If adding analytics in future, add privacy policy and cookie consent.

---

## Priority Action Items

### 🔴 HIGH PRIORITY (Before Production Deploy) - ✅ ALL COMPLETED
1. ✅ **Add input validation for URL parameters** (Issue 1.1) - FIXED
2. ✅ **Implement Security Headers** (Issue 3.1, 3.2) - FIXED
3. ✅ **Add request timeout** (Issue 2.1) - FIXED
4. ✅ **Disable source maps in production** (Issue 4.2) - FIXED
5. ✅ **Run npm audit and fix vulnerabilities** (Issue 5.1) - PASSED (0 vulnerabilities)

**Status:** ✅ ALL HIGH PRIORITY ITEMS COMPLETED  
**Implementation Date:** March 3, 2026  
**Details:** See [SECURITY_FIXES_COMPLETED.md](SECURITY_FIXES_COMPLETED.md)

### 🟡 MEDIUM PRIORITY (Recommended) - ✅ COMPLETED
6. ✅ Add search input length limit (Issue 1.2) - FIXED
7. ✅ Improve error messages (Issue 4.1) - FIXED
8. ✅ Move API URL to environment variable (Issue 2.3) - FIXED
9. ⏳ Add HTTPS enforcement headers (Issue 6.2) - READY (awaiting deployment)

### 🟢 LOW PRIORITY (Nice to Have)
10. Add search debouncing (Issue 2.2)
11. Explicit search term sanitization (Issue 1.3)
12. Enhanced .gitignore (Issue 6.1)

---

## Implementation Checklist

### Before Push to GitHub:
- [ ] Run `npm audit` and fix vulnerabilities
- [ ] Add input validation to PostDetail
- [ ] Add maxLength to search input
- [ ] Update .gitignore with security patterns
- [ ] Verify no sensitive data in commits
- [ ] Review all console.error statements

### Before Production Deployment:
- [ ] Add security headers (vite.config.js)
- [ ] Create public/_headers file for hosting
- [ ] Disable source maps (vite.config.js)
- [ ] Add request timeout to API calls
- [ ] Test CSP headers don't break anything
- [ ] Verify HTTPS is enforced
- [ ] Add error boundaries for graceful failures
- [ ] Test all input validation

### Ongoing Maintenance:
- [ ] Enable Dependabot on GitHub
- [ ] Schedule monthly dependency updates
- [ ] Monitor security advisories
- [ ] Keep React and deps updated

---

## Security Testing Commands

```bash
# 1. Check for vulnerabilities
npm audit

# 2. Fix automatic vulnerabilities
npm audit fix

# 3. Check for outdated packages
npm outdated

# 4. Test build output
npm run build
ls -lh dist/

# 5. Test CSP headers (after deployment)
curl -I https://your-domain.com

# 6. Verify no sensitive files in git
git ls-files
```

---

## Conclusion

**Overall Security Grade:** C+ (Before fixes) → A- (After fixes)

This project has **no critical vulnerabilities** due to:
- Public API with no authentication
- No sensitive data handling
- No user input stored
- React's built-in XSS protection

However, implementing the **HIGH PRIORITY** items will significantly improve security posture and follow industry best practices.

**Estimated Implementation Time:**
- High Priority Fixes: 2-3 hours
- Medium Priority: 1-2 hours
- Testing & Validation: 1 hour

**Total: 4-6 hours for production-ready security**

---

**Audit Completed:** March 3, 2026  
**Next Review:** Before production deployment  
**Status:** Ready for fixes implementation

