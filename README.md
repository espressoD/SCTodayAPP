# ScholarToday Posts - React Web Application

![React](https://img.shields.io/badge/React-19.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.3.1-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.2.1-cyan)
![React Router](https://img.shields.io/badge/React%20Router-DOM-red)

## 📖 Deskripsi Proyek

**ScholarToday Posts** adalah aplikasi web sederhana yang dibangun menggunakan **React** dan **Tailwind CSS v4** untuk menampilkan data postingan (posts) dari API publik [JSONPlaceholder](https://jsonplaceholder.typicode.com/). 

Aplikasi ini memiliki dua halaman utama:
1. **Post List Page** - Menampilkan seluruh postingan dalam bentuk grid card
2. **Post Detail Page** - Menampilkan detail lengkap dari postingan yang dipilih, termasuk komentar

---

## ✨ Fitur Utama

- ✅ **Fetch Data dari API** - Mengambil data posts dari JSONPlaceholder API
- ✅ **Responsive Design** - Mobile-first design dengan Tailwind CSS
- ✅ **Reusable Components** - Komponen React yang dapat digunakan kembali
- ✅ **Client-Side Routing** - Navigasi menggunakan React Router DOM
- ✅ **Loading State** - Spinner loading saat fetch data
- ✅ **Error Handling** - Menampilkan pesan error jika fetch gagal
- ✅ **Post Comments** - Menampilkan komentar di detail page
- ✅ **User Information** - Menampilkan informasi author post

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.0 | JavaScript library untuk UI |
| **Vite** | 7.3.1 | Build tool dan dev server |
| **Tailwind CSS** | 4.2.1 | Utility-first CSS framework |
| **React Router DOM** | Latest | Client-side routing |
| **PostCSS** | 8.5.6 | CSS processing |
| **Autoprefixer** | 10.4.27 | CSS vendor prefixing |

---

## 📂 Struktur Proyek

```
ScToday/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons, etc.
│   ├── components/        # Reusable React components
│   │   ├── Navbar.jsx    # Navigation bar component
│   │   ├── PostCard.jsx  # Post card component (reusable)
│   │   └── Loading.jsx   # Loading spinner component
│   ├── pages/            # Page components
│   │   ├── PostList.jsx  # Home page - list of all posts
│   │   └── PostDetail.jsx # Detail page - single post with comments
│   ├── services/         # API services
│   │   └── api.js        # API fetch functions
│   ├── App.jsx           # Main app component with routing
│   ├── App.css           # App styles
│   ├── index.css         # Global styles with Tailwind imports
│   └── main.jsx          # Entry point
├── tasks/
│   └── todo.md           # Task list and progress tracking
├── AI_PROMPTS.md         # AI prompts documentation
├── postcss.config.js     # PostCSS configuration
├── vite.config.js        # Vite configuration
├── package.json          # Dependencies
└── README.md             # Project documentation (this file)
```

---

## 🚀 Cara Menjalankan Aplikasi

### Prerequisites

Pastikan Anda sudah menginstall:
- **Node.js** (v18 atau lebih tinggi)
- **npm** atau **yarn**

### Installation

1. **Clone repository ini:**
   ```bash
   git clone https://github.com/espressoD/SCTodayAPP.git
   cd SCTodayAPP
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   ```

4. **Buka browser dan akses:**
   ```
   http://localhost:5173
   ```

### Build untuk Production

```bash
npm run build
```

Build results akan tersimpan di folder `dist/`.

### Preview Production Build

```bash
npm run preview
```

---

## 📡 API Reference

Aplikasi ini menggunakan [JSONPlaceholder](https://jsonplaceholder.typicode.com/) sebagai sumber data.

### Endpoints yang Digunakan:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/posts` | GET | Mengambil semua postingan |
| `/posts/:id` | GET | Mengambil post berdasarkan ID |
| `/posts/:id/comments` | GET | Mengambil komentar dari post tertentu |
| `/users/:id` | GET | Mengambil informasi user |

---

## 🎯 Ketentuan yang Dipenuhi

✅ **React + Vite** - Menggunakan React dengan Vite sebagai build tool  
✅ **Tailwind CSS v4** - Styling menggunakan utility classes Tailwind CSS  
✅ **No Component Library** - Tidak menggunakan shadcn/ui, DaisyUI, atau library lain  
✅ **JSONPlaceholder API** - Fetch data dari `/posts` endpoint  
✅ **Reusable Components** - PostCard, Navbar, Loading components  
✅ **Post List Page** - Halaman menampilkan semua posts  
✅ **Post Detail Page** - Halaman detail dengan informasi lengkap  
✅ **Fetch API** - Menggunakan native Fetch API JavaScript  
✅ **Custom Design** - Desain dan warna disesuaikan sendiri  
✅ **AI Prompts Documented** - Semua prompts AI dicatat di AI_PROMPTS.md  
✅ **Markdown Documentation** - README lengkap dengan instruksi  
✅ **Public Repository** - Source code tersimpan di GitHub public repo  

---

## 🤖 AI Assistance

Proyek ini dikembangkan dengan bantuan **GitHub Copilot (Claude Sonnet 4.5)**.

Semua prompts yang digunakan selama development tercatat lengkap di file [AI_PROMPTS.md](./AI_PROMPTS.md).

---

## 🔧 Scripts Available

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 📝 Notes

- **Tailwind CSS v4** memiliki cara setup yang berbeda dari v3 (tidak perlu `tailwindcss init`)
- Menggunakan `@import "tailwindcss"` di CSS instead of `@tailwind` directives
- PostCSS plugin: `@tailwindcss/postcss` instead of `tailwindcss`
- Design fully custom tanpa component library
- Responsive design dengan mobile-first approach

---

## 👨‍💻 Developer

Developed by **espressoD** as part of React + Tailwind CSS assignment.

---

## 📄 License

This project is created for educational purposes.

---

## 🔗 Links

- **GitHub Repository:** https://github.com/espressoD/SCTodayAPP
- **JSONPlaceholder API Documentation:** https://jsonplaceholder.typicode.com/
- **React Documentation:** https://react.dev/
- **Tailwind CSS v4 Documentation:** https://tailwindcss.com/
- **Vite Documentation:** https://vite.dev/

---

**Last Updated:** February 27, 2026
