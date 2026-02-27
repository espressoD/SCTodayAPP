# Todo List - ScholarToday Posts App

## 📋 Requirements Summary
- ✅ React + Vite
- ✅ Tailwind CSS (no component library)
- ✅ JSONPlaceholder API (/posts)
- ✅ Post List Page
- ✅ Post Detail Page
- ✅ Reusable components
- ✅ Routing
- ✅ Documentation dengan AI prompts
- ✅ Public GitHub repository

---

## ✅ Completed Tasks

- [x] **Setup React + Vite project**
- [x] **Install & configure Tailwind CSS v4**
  - Installed `@tailwindcss/postcss`
  - Created `postcss.config.js`
  - Added `@import "tailwindcss"` to `index.css`

---

## 🚀 Phase 1: Project Setup & Structure

- [ ] **Install React Router**
  ```bash
  npm install react-router-dom
  ```

- [ ] **Create folder structure**
  ```
  src/
  ├── components/
  │   ├── PostCard.jsx
  │   ├── Navbar.jsx
  │   └── Loading.jsx
  ├── pages/
  │   ├── PostList.jsx
  │   └── PostDetail.jsx
  ├── services/
  │   └── api.js
  └── App.jsx
  ```

---

## 🔧 Phase 2: API Integration

- [ ] **Create API service** (`services/api.js`)
  - Function: `getAllPosts()` → fetch /posts
  - Function: `getPostById(id)` → fetch /posts/:id
  - Error handling
  - Use Fetch API or Axios

---

## 🎨 Phase 3: Components Development

- [ ] **PostCard Component** (Reusable)
  - Props: `post` (id, title, body)
  - Display: title, body preview, "Read More" button
  - Tailwind styling: card, hover effect, responsive

- [ ] **Navbar Component**
  - Logo/Title: "ScholarToday Posts"
  - Link back to home
  - Sticky/fixed position

- [ ] **Loading Component**
  - Show loading spinner/skeleton
  - Use Tailwind animation

---

## 📄 Phase 4: Pages Development

- [ ] **PostList Page** (`/`)
  - Fetch all posts from API
  - Display using PostCard components
  - Grid/Flex layout (responsive)
  - Loading state
  - Error handling

- [ ] **PostDetail Page** (`/post/:id`)
  - Fetch single post by ID
  - Display full content (title, body)
  - Optional: show userId
  - Back button to list
  - Loading & error state

---

## 🛣️ Phase 5: Routing

- [ ] **Setup React Router in App.jsx**
  - Route `/` → PostList
  - Route `/post/:id` → PostDetail
  - Handle 404 page (optional)

---

## 🎨 Phase 6: UI/UX Enhancement

- [ ] **Responsive Design**
  - Mobile first approach
  - Tablet & desktop breakpoints
  - Test on different screen sizes

- [ ] **Styling dengan Tailwind**
  - Consistent color scheme
  - Typography hierarchy
  - Spacing & padding
  - Hover & active states

- [ ] **Loading & Error States**
  - Loading spinner/skeleton
  - Error message display
  - Empty state (if no posts)

---

## ✅ Phase 7: Testing

- [ ] **Manual Testing**
  - Test post list loads successfully
  - Test click to detail page
  - Test back navigation
  - Test on different browsers
  - Test responsive on mobile

---

## 📚 Phase 8: Documentation

- [ ] **Create README.md**
  - Project description
  - Features list
  - Tech stack used
  - Installation steps
  - How to run locally
  - Project structure
  - API reference
  - Screenshots (optional)

- [ ] **Add AI Prompts Documentation**
  - List all prompts used with AI
  - Include in README or separate file
  - Explain what each prompt helped with

---

## 🚀 Phase 9: Deployment & GitHub

- [ ] **Push to GitHub**
  - Create public repository
  - Add .gitignore
  - Write good commit messages
  - Push all code

- [ ] **Optional: Deploy to Vercel/Netlify**
  - Deploy for live demo
  - Add live URL to README

---

## 📝 Notes

### API Endpoints to Use:
- `GET https://jsonplaceholder.typicode.com/posts` - All posts
- `GET https://jsonplaceholder.typicode.com/posts/1` - Single post

### Tailwind CSS Best Practices:
- Use utility classes only
- No external component libraries
- Build components from scratch
- Focus on reusability

### Component Structure:
```jsx
// Example PostCard component structure
<div className="card">
  <h3 className="title">{title}</h3>
  <p className="body">{body.substring(0, 100)}...</p>
  <Link to={`/post/${id}`}>Read More</Link>
</div>
```

---

## 🎯 Current Priority

**Next Steps:**
1. Install React Router
2. Create folder structure
3. Build API service

---

**Last Updated:** February 27, 2026
