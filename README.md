# Audit Keamanan Digital — SAFEnet

Aplikasi web interaktif panduan audit keamanan digital untuk media daring, berdasarkan **Panduan Audit Keamanan Digital untuk Media Daring** oleh SAFEnet (2025).

## Fitur

- ✅ **Checklist Interaktif** — 150+ item audit terorganisir per fase dan tahapan
- 📊 **Progres Real-time** — Tracking otomatis per tahapan, fase, dan keseluruhan
- 📝 **Catatan Temuan** — Tambahkan catatan per item (tersimpan di browser)
- 🔒 **PAKEM DIRI** — Kalkulator risiko digital mandiri dengan skor otomatis
- 💾 **Auto-save** — Progres tersimpan di localStorage, tidak hilang saat refresh
- 📱 **Responsif** — Berfungsi di desktop dan mobile

## Struktur Audit

### Bagian A: Persiapan
- Persiapan & Perencanaan (PKS, NDA, jadwal, kick-off)

### Bagian B: Pelaksanaan
- Penilaian Risiko & Ancaman (termasuk PAKEM DIRI)
- Penilaian Aset & Data
- Pemetaan Infrastruktur & Jaringan

### Bagian C: Pelaporan
- Penyusunan & Penyampaian Laporan

## Deploy ke Vercel

### Cara 1: Via Vercel CLI
```bash
npm install -g vercel
cd audit-keamanan-digital
npm install
vercel
```

### Cara 2: Via GitHub + Vercel Dashboard
1. Push project ini ke repository GitHub
2. Buka [vercel.com](https://vercel.com) dan login
3. Klik **"Add New Project"**
4. Import repository GitHub Anda
5. Vercel akan otomatis mendeteksi Next.js — klik **Deploy**
6. Selesai! App live di `https://nama-project.vercel.app`

### Cara 3: Deploy Langsung (Drag & Drop)
1. Build terlebih dahulu: `npm run build`
2. Drag folder project ke [vercel.com/new](https://vercel.com/new)

## Pengembangan Lokal

```bash
npm install
npm run dev
# Buka http://localhost:3000
```

## Teknologi

- **Next.js 14** (Pages Router)
- **React 18**
- **CSS Modules**
- **localStorage** untuk persistensi data

## Lisensi

Konten panduan: CC BY-SA 4.0 — SAFEnet  
Kode aplikasi: MIT
