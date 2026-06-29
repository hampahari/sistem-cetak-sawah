# Sistem Informasi Pendataan Pengawasan Cetak Sawah

Aplikasi web sederhana (*Single Page Application*) untuk melakukan pendataan personel yang akan diturunkan ke lapangan dalam rangka pengawasan kegiatan cetak sawah. Aplikasi ini dilengkapi dengan fitur otomatis untuk meng-generate dan mencetak **Surat Tugas** secara kolektif berdasarkan data yang dimasukkan.

## 🚀 Fitur Utama
- **Pendataan Real-time:** Menambahkan nama, NIP, jabatan, dan lokasi tugas.
- **Generate Surat Tugas:** Membuat dan menyusun *layout* Surat Tugas resmi yang siap di-print atau disimpan sebagai PDF (menggunakan fitur cetak bawaan *browser*).
- **Penyimpanan Lokal:** Data tidak akan hilang saat halaman di-refresh karena tersimpan dalam `localStorage` *browser*.

## 🛠️ Teknologi yang Digunakan
- HTML5
- CSS3 & Bootstrap 5 (CDN)
- Vanilla JavaScript

## 📦 Cara Penggunaan & Instalasi (GitHub Pages)
Aplikasi ini tidak memerlukan instalasi *backend* atau *database*. Anda dapat langsung menggunakannya melalui GitHub Pages.
1. *Fork* atau *Clone* repositori ini.
2. Buka Pengaturan (*Settings*) pada repositori GitHub Anda.
3. Arahkan ke menu **Pages** di bilah kiri.
4. Pada *Source*, pilih *branch* `main` dan klik *Save*.
5. GitHub akan memberikan tautan (URL) publik yang bisa langsung diakses.

## 📝 Cara Kerja
1. Masukkan data personel melalui form yang tersedia di halaman utama.
2. Data akan muncul pada tabel di sebelah kanan.
3. Klik tombol **"Cetak Surat Tugas"**. 
4. Aplikasi akan secara otomatis menyembunyikan elemen formulir dan menampilkan *layout* Kop Surat dan daftar nama ke dalam format resmi.
