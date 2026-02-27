# AI Prompts Used - ScholarToday Posts Project

## Context
Project ini dikembangkan dengan bantuan GitHub Copilot (Claude Sonnet 4.5) untuk menyelesaikan assignment React + Tailwind CSS yang menampilkan data dari JSONPlaceholder API.

---

## 📝 List of Prompts

### 1. **Instalasi Tailwind CSS**
**Prompt:**
```
saya ingin menginstall tailwindcss dengan postcss dan auto prefixer tapi saat dinisialisasi malah npm error
```

**Masalah:**
- Error saat menjalankan `npx tailwindcss init -p`
- User menggunakan Tailwind CSS v4 yang memiliki cara setup berbeda dari v3

**Solusi AI:**
- Menjelaskan perbedaan Tailwind v3 vs v4
- Membuat `postcss.config.js` dengan `@tailwindcss/postcss` plugin
- Update `index.css` dengan `@import "tailwindcss"` instead of `@tailwind` directives

---

### 2. **Error Log Debugging**
**Prompt:**
```
"PS C:\Users\LENOVO\Documents\ScholarToday\Assignment\ScToday> npx tailwindcss init -p
npm error could not determine executable to run
npm error A complete log of this run can be found in: C:\Users\LENOVO\AppData\Local\npm-cache\_logs\2026-02-27T16_01_38_910Z-debug-0.log"
kenapa masih error?
```

**File Attached:** `2026-02-27T16_01_38_910Z-debug-0.log`

**Masalah:**
- Command `tailwindcss init` tidak tersedia di Tailwind v4
- User belum paham perubahan cara setup di v4

**Solusi AI:**
- Konfirmasi bahwa Tailwind v4 tidak memerlukan init command
- Membuat konfigurasi manual yang lebih sederhana
- Membuat `postcss.config.js` dan update `index.css`

---

### 3. **Cara Verifikasi Tailwind CSS**
**Prompt:**
```
bagaimana saya membuktikan kalau tailwind css sudah dipakai atau belum?
```

**Solusi AI:**
- Membuat test box di `App.jsx` dengan Tailwind classes yang jelas (bg-blue, text-white, dll)
- Memberikan checklist visual untuk memverifikasi Tailwind berfungsi
- Menjelaskan cara inspect element dan check di DevTools
- Memberikan panduan step-by-step testing

---

### 4. **Membuat Todo List Proyek**
**Prompt:**
```
sebenarnya proyek ini dikerjakan berdasarkan ketentuan ini 
"mengembangkan sebuah aplikasi web sederhana menggunakan React dan Tailwind CSS yang berfungsi untuk menampilkan data postingan (posts) yang diperoleh dari API publik JSONPlaceholder.
[...ketentuan lengkap assignment...]"
buatkan todo listnya
```

**Solusi AI:**
- Membaca dan menganalisis requirements assignment
- Membuat todo list terstruktur dengan 15 task items
- Membuat file `tasks/todo.md` dengan breakdown detail per phase
- Menyusun workflow dari setup hingga deployment

---

## 🎯 Summary

Total prompts yang digunakan: **4 prompts**

**Bantuan AI meliputi:**
1. ✅ Debugging npm error Tailwind CSS v4
2. ✅ Setup dan konfigurasi Tailwind CSS
3. ✅ Membuat test case untuk verifikasi
4. ✅ Project planning dan task breakdown

**Catatan:**
- Semua kode ditulis oleh AI berdasarkan best practices
- AI mengikuti ketentuan assignment (no component library, only Tailwind)
- User tetap memiliki kontrol penuh atas keputusan desain dan implementasi

---

**Created:** February 27, 2026  
**AI Model:** GitHub Copilot (Claude Sonnet 4.5)
