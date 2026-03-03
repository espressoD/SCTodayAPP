# 📚 ScholarToday - Scholarly Posts Collection

A beautiful, accessible web application for browsing and reading scholarly posts with a warm botanical theme. Built with React, Tailwind CSS, and powered by JSONPlaceholder API.

![ScholarToday Preview](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2.1-38B2AC?style=for-the-badge&logo=tailwind-css)
![Accessibility](https://img.shields.io/badge/WCAG-AA-green?style=for-the-badge)

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [API Reference](#-api-reference)
- [Design System](#-design-system)
- [Accessibility](#-accessibility)
- [Security](#-security)
- [Development](#-development)
- [Browser Compatibility](#-browser-compatibility)

---

## 🌟 Overview

**ScholarToday** is a modern, user-friendly platform for exploring scholarly posts. Designed with a warm botanical aesthetic featuring earth tones (browns, beiges, and olive greens), the application provides an engaging reading experience with smooth animations, intuitive navigation, and full accessibility support.

### Key Highlights:
- ✨ **Botanical Theme** - Warm, scholarly aesthetic with earth tones
- ♿ **WCAG AA Compliant** - Full accessibility support
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- 🔍 **Live Search** - Real-time post filtering
- ⚡ **Smooth Animations** - Polished micro-interactions
- 📚 **100 Posts** - Powered by JSONPlaceholder API

---

## ✨ Features

### Core Features
- 📋 **Post List Page** - Browse all 100 scholarly posts in a responsive grid
- 📄 **Post Detail Page** - Read full posts with enhanced typography
- 🔎 **Live Search** - Filter posts by title or content in real-time
- 🧭 **Smart Navigation** - Prev/Next post buttons, Back to list
- 📊 **Reading Metrics** - Word count and estimated reading time
- ⬆️ **Scroll to Top** - Smooth scroll button appears after 300px

### UI/UX Features
- 🎨 **Botanical Design** - Warm color palette with book icons
- 🌈 **Alternating Card Backgrounds** - Cream, beige, and sage variations
- ✨ **Hover Effects** - Lift, scale, and color transitions
- 🎭 **Loading States** - Triple spinner with animated dots
- 🚫 **Error Handling** - Graceful empty and error states
- 📱 **Responsive Grid** - 1/2/3 columns based on screen size

### Accessibility Features
- ♿ **ARIA Labels** - All interactive elements labeled
- 🎯 **Keyboard Navigation** - Full Tab key support
- 🔍 **Screen Reader Friendly** - Semantic HTML & ARIA roles
- 🌈 **Color Contrast** - WCAG AA compliant (4.5:1+ ratio)
- 👁️ **Focus States** - Visible focus rings with earth tones

---

## 🛠️ Tech Stack

### Frontend
- **React** 19.2.0 - UI library with hooks
- **React Router DOM** 7.13.1 - Client-side routing
- **Tailwind CSS** 4.2.1 - Utility-first CSS framework
- **Vite** 7.3.1 - Build tool and dev server

### Typography
- **Crimson Pro** - Serif font for headings (scholarly feel)
- **Inter** - Sans-serif font for body text (clean readability)

### API
- **JSONPlaceholder** - Free fake REST API for testing
  - Endpoints: `/posts`, `/posts/:id`

### Development Tools
- **ESLint** - Code linting
- **PropTypes** - Runtime type checking
- **PostCSS** - CSS processing

---

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn installed
- Git (optional, for cloning)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/scholartoday.git
   cd scholartoday
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:5173
   ```

### Build for Production
```bash
npm run build
npm run preview
```

---

## 🚀 Usage

### Browsing Posts
1. **Home Page** - View all 100 posts in a grid layout
2. **Search** - Use the search bar to filter posts by title or content
3. **Click Card** - Select any post to read the full content

### Reading Posts
1. **Detail Page** - View complete post with enhanced typography
2. **Metadata** - See Post ID, User ID, word count, and reading time
3. **Navigation** - Use "Back to List", "Prev Post", or "Next Post" buttons

### Additional Features
- **Scroll to Top** - Button appears after scrolling 300px down
- **Loading State** - Animated spinner while fetching data
- **Empty State** - Helpful message when search returns no results
- **Error State** - Graceful error handling with retry option

---

## 📁 Project Structure

```
ScToday/
├── public/
│   └── favicon.svg              # ScholarToday logo icon
├── src/
│   ├── components/
│   │   ├── Loading.jsx          # Loading spinner with botanical theme
│   │   ├── Navbar.jsx           # Sticky navigation header
│   │   └── PostCard.jsx         # Reusable post preview card
│   ├── pages/
│   │   ├── PostList.jsx         # Homepage with all posts
│   │   └── PostDetail.jsx       # Individual post detail page
│   ├── services/
│   │   └── api.js               # API service for JSONPlaceholder
│   ├── App.jsx                  # Root component with routing
│   ├── App.css                  # App-level styles
│   ├── index.css                # Global styles & botanical theme
│   └── main.jsx                 # App entry point
├── tasks/
│   ├── todo.md                  # Project todo list & documentation
│   ├── dev.md                   # Development notes
|   ├── security_audit.md            # Initial security audit report
|   ├── security_fixes_completed.md  # Security fixes implementation details
│   └── steps.md                 # Implementation steps
├── index.html                   # HTML template
├── vite.config.js               # Vite configuration
├── postcss.config.js            # PostCSS configuration
├── eslint.config.js             # ESLint configuration
├── package.json                 # Dependencies & scripts
└── README.md                    # This file
```

---

## 🔌 API Reference

### Base URL
```
https://jsonplaceholder.typicode.com
```

### Endpoints Used

#### GET /posts
Fetch all posts (100 items)
```javascript
const response = await fetch('https://jsonplaceholder.typicode.com/posts');
const posts = await response.json();
```

**Response:** Array of post objects
```json
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident...",
    "body": "quia et suscipit suscipit recusandae..."
  }
]
```

#### GET /posts/:id
Fetch single post by ID
```javascript
const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
const post = await response.json();
```

**Response:** Single post object

---

## 🎨 Design System

### Color Palette (Botanical Theme)

#### Primary Colors
- **Primary Brown:** `#5C4033` - Headings, dark text
- **Secondary Brown:** `#8B6F47` - Buttons, accents
- **Light Brown:** `#C4A57B` - Borders, highlights

#### Background Colors
- **Cream:** `#FBF8F3` - Navbar, cards (variant 1)
- **Beige:** `#F5E6D3` - Cards (variant 2)
- **Off-White:** `#FDFCFA` - Page background
- **Sage Light:** `#D8E2DC` - Cards (variant 3)

#### Accent Colors
- **Olive:** `#6B7553` - Accents, icons
- **Sage:** `#B8BDB5` - Subtle elements
- **Terracotta:** `#C97D60` - Error states

#### Text Colors
- **Dark Brown:** `#2C2416` - Primary text
- **Medium Brown:** `#5C5346` - Secondary text (improved contrast)
- **Muted Brown:** `#8B8378` - Subtle text

### Typography

#### Font Families
```css
--font-serif: 'Crimson Pro', Georgia, serif;
--font-sans: 'Inter', system-ui, sans-serif;
```

#### Hierarchy
- **H1:** 2.5rem (serif, bold) - Page titles
- **H2:** 2rem (serif, semibold) - Section headings
- **H3:** 1.5rem (serif, semibold) - Card titles
- **Body:** 1rem (sans-serif) - Content text
- **Line Heights:** 1.3 (headings), 1.6 (body), 2.0 (detail page)

### Spacing
- **Card Padding:** 1.5rem (24px)
- **Section Padding:** 3rem (48px)
- **Grid Gap:** 2rem (32px)

### Shadows
```css
--shadow-sm: 0 1px 2px rgba(92, 64, 51, 0.05);
--shadow-md: 0 4px 6px rgba(92, 64, 51, 0.08);
--shadow-lg: 0 10px 15px rgba(92, 64, 51, 0.1);
--shadow-xl: 0 20px 25px rgba(92, 64, 51, 0.12);
```

---

## ♿ Accessibility

### WCAG Compliance
- **Level:** AA Compliant
- **Color Contrast:** Minimum 4.5:1 ratio for all text
- **Focus States:** Visible ring indicators with earth tones
- **Keyboard Navigation:** All interactive elements accessible via Tab

### Implemented Features
- ✅ **ARIA Labels** - Search input, buttons, navigation links
- ✅ **ARIA Roles** - `role="status"` for loading, `role="alert"` for errors
- ✅ **ARIA Hidden** - Decorative SVG icons marked as `aria-hidden="true"`
- ✅ **Semantic HTML** - Proper use of `<nav>`, `<article>`, `<main>`, headings
- ✅ **Live Regions** - `aria-live="polite"` on loading state
- ✅ **Alt Text** - All meaningful icons have accessible names

### Testing
- ✅ Keyboard navigation tested (Tab, Enter, Esc)
- ✅ Color contrast verified with WCAG tools
- ✅ Screen reader friendly structure

---

## 🔒 Security

### Security Posture
**Grade:** A- (Production Ready) ✅  
**Last Audit:** March 3, 2026  
**Vulnerabilities:** 0 (npm audit passed)

### Implemented Security Measures

#### 1. Input Validation
- ✅ **URL Parameter Validation** - Post IDs validated (must be 1-100)
- ✅ **Search Input Limits** - maxLength 200 characters
- ✅ **Type Checking** - parseInt validation with NaN checks
- ✅ **Range Validation** - Prevents out-of-bounds requests

#### 2. API Security
- ✅ **Request Timeout** - 10-second timeout on all API calls
- ✅ **AbortController** - Proper request cancellation
- ✅ **Error Sanitization** - Generic user messages, detailed logs only in dev
- ✅ **Environment Variables** - API URL configurable via .env

#### 3. Security Headers
**Development & Production Headers Configured:**

**Content Security Policy (CSP):**
```
default-src 'self';
script-src 'self' 'unsafe-inline';
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src 'self' https://fonts.gstatic.com;
img-src 'self' data: https:;
connect-src 'self' https://jsonplaceholder.typicode.com;
frame-ancestors 'none';
```

**Additional Headers:**
- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
- `Referrer-Policy: strict-origin-when-cross-origin` - Controls referrer info
- `Permissions-Policy` - Restricts camera, microphone, geolocation
- `Strict-Transport-Security` - Forces HTTPS (production only)
- `X-XSS-Protection: 1; mode=block` - Legacy XSS protection

**Configuration Files:**
- `vite.config.js` - Dev server headers
- `public/_headers` - Production headers

#### 4. Build Security
- ✅ **Source Maps Disabled** - Code not exposed in production DevTools
- ✅ **Minification** - esbuild minification enabled
- ✅ **Hash-based Filenames** - Cache busting with integrity hashes
- ✅ **No Sensitive Data** - No API keys, tokens, or credentials

#### 5. Dependency Security
- ✅ **npm audit: 0 vulnerabilities** (last checked: March 3, 2026)
- ✅ **All dependencies up-to-date**
- ✅ **No known CVEs** in React, Vite, Tailwind, or React Router

#### 6. Data Privacy
- ✅ **No User Data Collection** - No cookies, localStorage, or tracking
- ✅ **No Authentication** - Public API, no sensitive data
- ✅ **GDPR/CCPA Compliant** - No personal data processing
- ✅ **Read-only Operations** - No POST/PUT/DELETE requests

#### 7. Error Handling
- ✅ **Generic Error Messages** - User-friendly, non-revealing
- ✅ **Dev-only Logging** - Detailed errors only in development mode
- ✅ **Graceful Degradation** - Proper error boundaries
- ✅ **Timeout Handling** - Network timeout messages

### Security Testing

#### Automated Tests
```bash
# Run security audit
npm audit
# Result: found 0 vulnerabilities ✅

# Check for outdated packages
npm outdated
# All packages up-to-date ✅
```

#### Manual Verification
- ✅ Input validation tested with malicious inputs
- ✅ CSP headers verified in browser DevTools
- ✅ Source maps not present in production build
- ✅ Request timeout tested with slow network
- ✅ Error messages don't reveal sensitive info

### Security Best Practices Followed
1. ✅ Input validation on all user inputs
2. ✅ Output encoding (React handles automatically)
3. ✅ Security headers configured
4. ✅ HTTPS enforcement ready
5. ✅ No sensitive data exposure
6. ✅ Dependency vulnerability scanning
7. ✅ Error message sanitization
8. ✅ Request timeout implementation

### Deployment Security Checklist
- [x] Security headers configured
- [x] Source maps disabled in production
- [x] Input validation implemented
- [x] Request timeout added
- [x] npm audit passed (0 vulnerabilities)
- [x] .gitignore excludes sensitive files
- [x] Error messages sanitized

### Security Audit Report
Full security audit documentation available at:
- `tasks/SECURITY_AUDIT.md` - Initial security audit
- `tasks/SECURITY_FIXES_COMPLETED.md` - Implementation details

---

## 💻 Development

### Local Development
```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Security audit
npm audit
```

### Environment Variables
Create `.env.local` file (optional):
```env
VITE_API_BASE_URL=https://jsonplaceholder.typicode.com
```

### Available Scripts
| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production (dist/) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint code quality checks |
| `npm audit` | Check for security vulnerabilities |

### Development Workflow
1. Make changes to source files
2. Hot module replacement updates browser instantly
3. Check browser console for errors
4. Run `npm run lint` before committing
5. Test on multiple viewports (375px, 768px, 1280px+)

---

## 🌐 Browser Compatibility

### Tested & Supported
- ✅ **Chrome** 120+ (Windows, macOS, Linux)
- ✅ **Firefox** 121+ (Windows, macOS, Linux)
- ✅ **Safari** 17+ (macOS, iOS)
- ✅ **Edge** 120+ (Windows, macOS)

### Mobile Browsers
- ✅ **Chrome Mobile** 120+ (Android, iOS)
- ✅ **Safari Mobile** 17+ (iOS)
- ✅ **Samsung Internet** 23+ (Android)

### Required Browser Features
- ES6+ JavaScript support
- Fetch API
- CSS Grid & Flexbox
- CSS Custom Properties (variables)
- AbortController (for request timeout)

### Progressive Enhancement
- Smooth scroll fallback for older browsers
- Graceful degradation for missing CSS features
- Polyfills not required (modern browsers only)

---

## 📄 License

This project is created for educational purposes as part of a web development assignment.

---

## 👤 Author

**Your Name**
- GitHub: [@EspressoD](https://github.com/EspressoD)
- Assignment: Front-End Development
- Date: March 3, 2026