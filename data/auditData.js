export const phases = [
  {
    id: 'persiapan',
    label: 'A',
    title: 'Persiapan',
    color: 'gold',
    description: 'Fondasi audit yang kuat dimulai dari persiapan dan perencanaan yang matang.',
    steps: [
      {
        id: 'persiapan-1',
        title: 'Persiapan & Perencanaan',
        icon: '📋',
        description: 'Memastikan kedua belah pihak memahami alur kerja dan keluaran berdasarkan perjanjian kerja sama dan jadwal yang disepakati.',
        sections: [
          {
            title: 'Pembuatan Perjanjian (PKS & NDA)',
            type: 'checklist',
            items: [
              { id: 'p1', text: 'Identitas kedua belah pihak (nama, alamat, kontak auditor dan auditi) telah dicantumkan' },
              { id: 'p2', text: 'Tujuan audit telah ditetapkan secara tertulis' },
              { id: 'p3', text: 'Ruang lingkup audit telah disepakati (profil, risiko, ancaman, aset digital, SDM)' },
              { id: 'p4', text: 'Metode audit telah didefinisikan (wawancara, pemindaian, observasi, dll.)' },
              { id: 'p5', text: 'Periode audit telah ditetapkan (min. 3 bulan)' },
              { id: 'p6', text: 'Hak dan kewajiban masing-masing pihak tercantum dalam PKS' },
              { id: 'p7', text: 'Klausul kerahasiaan data (NDA) telah ditandatangani kedua belah pihak' },
              { id: 'p8', text: 'Klausul penyelesaian sengketa tercantum dalam NDA' },
              { id: 'p9', text: 'Informasi kemungkinan perubahan periode kerja telah dicantumkan' },
            ]
          },
          {
            title: 'Pengumpulan Informasi Awal',
            type: 'checklist',
            items: [
              { id: 'p10', text: 'Informasi publik media (situs web, media sosial) telah dikumpulkan' },
              { id: 'p11', text: 'Penyedia surel yang digunakan media telah diidentifikasi' },
              { id: 'p12', text: 'Aktivitas media di luar produksi konten berita telah dicatat' },
            ]
          },
          {
            title: 'Penyusunan Jadwal',
            type: 'checklist',
            items: [
              { id: 'p13', text: 'Tahapan audit telah disusun dalam tabel jadwal' },
              { id: 'p14', text: 'Dokumen kebutuhan per tahapan telah diidentifikasi' },
              { id: 'p15', text: 'Jadwal telah dikonfirmasi dengan pihak auditi' },
            ]
          },
          {
            title: 'Pertemuan Awal (Kick-off)',
            type: 'checklist',
            items: [
              { id: 'p16', text: 'Pertemuan awal telah dijadwalkan (luring atau daring)' },
              { id: 'p17', text: 'Durasi dan metode audit telah dijelaskan ke manajemen auditi' },
              { id: 'p18', text: 'Daftar personel yang akan dilibatkan telah disepakati' },
              { id: 'p19', text: 'Auditi memahami apa yang perlu disiapkan (profil, aset digital, personel)' },
            ]
          },
          {
            title: 'Persiapan Auditor',
            type: 'checklist',
            items: [
              { id: 'p20', text: 'Perangkat keras audit telah disiapkan dan diuji' },
              { id: 'p21', text: 'Perangkat lunak dan tools audit telah terinstal dan berfungsi' },
              { id: 'p22', text: 'Daftar periksa audit telah disiapkan' },
              { id: 'p23', text: 'Rencana perjalanan dan logistik (jika audit luring) telah diatur' },
              { id: 'p24', text: 'Manajemen risiko auditor telah disiapkan (untuk organisasi risiko tinggi)' },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'pelaksanaan',
    label: 'B',
    title: 'Pelaksanaan',
    color: 'accent',
    description: 'Inti dari proses audit: menilai risiko, ancaman, aset, dan infrastruktur media.',
    steps: [
      {
        id: 'pelaksanaan-1',
        title: 'Penilaian Risiko & Ancaman',
        icon: '⚠️',
        description: 'Mengidentifikasi dan menilai berbagai risiko yang dihadapi media agar dapat mengambil tindakan strategis. Tingkat risiko = kemungkinan × dampak.',
        sections: [
          {
            title: 'Analisis Isu & Program',
            type: 'checklist',
            items: [
              { id: 'r1', text: 'Profil media telah dipetakan (nama, status Dewan Pers, struktur organisasi)' },
              { id: 'r2', text: 'Isu-isu sensitif yang disoroti media telah diidentifikasi' },
              { id: 'r3', text: 'Program dan kegiatan di luar produksi konten telah didaftar' },
              { id: 'r4', text: 'Model bisnis media (programmatic ads, penggalangan dana, pelatihan) telah dipahami' },
              { id: 'r5', text: 'Sasaran dan penerima manfaat program media telah diidentifikasi' },
            ]
          },
          {
            title: 'Pemetaan Aktor Ancaman',
            type: 'checklist',
            items: [
              { id: 'r6', text: 'Aktor potensial (negara, swasta, publik) yang mungkin menyerang telah dipetakan' },
              { id: 'r7', text: 'Kapasitas dan sumber daya masing-masing aktor telah dianalisis' },
              { id: 'r8', text: 'Riwayat serangan aktor terhadap media serupa telah ditelusuri' },
              { id: 'r9', text: 'Teknik serangan yang biasa digunakan aktor telah diidentifikasi' },
              { id: 'r10', text: 'Tingkat prioritas target media oleh aktor telah dinilai' },
            ]
          },
          {
            title: 'Penilaian Kapasitas (3P)',
            type: 'checklist',
            items: [
              { id: 'r11', text: '[Proses] Kebijakan keamanan digital atau SOP telah ada dan terdokumentasi' },
              { id: 'r12', text: '[Proses] Kebijakan diterapkan secara konsisten dan diperbarui berkala' },
              { id: 'r13', text: '[Proses] Terdapat penanggung jawab keamanan digital di media' },
              { id: 'r14', text: '[Orang] Staf mendapatkan pelatihan keamanan digital yang memadai' },
              { id: 'r15', text: '[Orang] Semua pihak terhubung (jurnalis, admin medsos, logistik) telah dinilai kapasitasnya' },
              { id: 'r16', text: '[Platform] Sistem operasi yang digunakan orisinal dan berlisensi sah' },
              { id: 'r17', text: '[Platform] Semua perangkat lunak dan aplikasi diperbarui secara rutin' },
              { id: 'r18', text: '[Platform] Tidak ada aplikasi bajakan pada perangkat staf' },
            ]
          },
          {
            title: 'Analisis Kerentanan',
            type: 'checklist',
            items: [
              { id: 'r19', text: 'Penggunaan OS atau program bajakan telah diperiksa' },
              { id: 'r20', text: 'Kebijakan pencadangan data (laptop & ponsel) telah diverifikasi' },
              { id: 'r21', text: 'Kekuatan kata sandi akun-akun penting telah dievaluasi' },
              { id: 'r22', text: 'Versi CMS dan plugin situs web telah diperiksa (apakah up-to-date)' },
              { id: 'r23', text: 'Konfigurasi shared hosting telah diperiksa risikonya' },
            ]
          },
          {
            title: 'Analisis Ancaman & Matriks Risiko',
            type: 'checklist',
            items: [
              { id: 'r24', text: 'Riwayat serangan digital yang pernah dialami media telah didokumentasikan' },
              { id: 'r25', text: 'Dampak dan penanganan insiden sebelumnya telah dianalisis' },
              { id: 'r26', text: 'Matriks risiko (kemungkinan × dampak) telah dibuat' },
              { id: 'r27', text: 'Serangan kemungkinan tinggi-dampak tinggi telah diprioritaskan (peretasan, DDoS, pengambilalihan akun)' },
            ]
          },
          {
            title: 'PAKEM DIRI (Penilaian Mandiri)',
            type: 'pakem',
            description: 'Formulir penilaian keamanan digital individual. Kumpulkan dari semua staf, lalu rata-ratakan untuk tingkat risiko organisasi.',
            categories: [
              {
                title: 'Keamanan Perangkat (Laptop)',
                items: [
                  { id: 'pkm1', text: 'Memisahkan laptop untuk bekerja dan pribadi' },
                  { id: 'pkm2', text: 'Menggunakan sistem operasi (OS) orisinal, bukan bajakan' },
                  { id: 'pkm3', text: 'Menggunakan program atau aplikasi orisinal, bukan bajakan' },
                  { id: 'pkm4', text: 'Memperbarui OS dan aplikasi secara rutin' },
                  { id: 'pkm5', text: 'Menggunakan password/PIN untuk mengunci laptop' },
                  { id: 'pkm6', text: 'Mengaktifkan enkripsi penyimpanan (BitLocker/FileVault)' },
                  { id: 'pkm7', text: 'Memiliki antivirus aktif dan diperbarui' },
                  { id: 'pkm8', text: 'Melakukan pencadangan data secara berkala' },
                  { id: 'pkm9', text: 'Mengunci layar saat meninggalkan laptop' },
                  { id: 'pkm10', text: 'Tidak menyambungkan ke charger/USB dari sumber tidak dikenal' },
                ]
              },
              {
                title: 'Keamanan Ponsel',
                items: [
                  { id: 'pkm11', text: 'Memisahkan ponsel untuk bekerja/sensitif dengan ponsel pribadi' },
                  { id: 'pkm12', text: 'Melindungi ponsel dengan password, PIN, pola, atau biometrik' },
                  { id: 'pkm13', text: 'Mengaktifkan penguncian otomatis (1-5 menit)' },
                  { id: 'pkm14', text: 'Memperbarui OS dan aplikasi ponsel secara rutin' },
                  { id: 'pkm15', text: 'Memasang aplikasi hanya dari sumber resmi (App Store/Play Store)' },
                  { id: 'pkm16', text: 'Menonaktifkan Bluetooth dan Wi-Fi jika tidak digunakan' },
                  { id: 'pkm17', text: 'Menonaktifkan lokasi kecuali saat dibutuhkan' },
                  { id: 'pkm18', text: 'Memeriksa izin akses aplikasi secara berkala' },
                  { id: 'pkm19', text: 'Mengganti nama ponsel agar tidak mudah dikenali' },
                  { id: 'pkm20', text: 'Keluar dari email di ponsel jika tidak digunakan lama' },
                ]
              },
              {
                title: 'Keamanan Akun & Identitas',
                items: [
                  { id: 'pkm21', text: 'Membedakan akun pribadi dengan akun pekerjaan' },
                  { id: 'pkm22', text: 'Membatasi unggahan identitas personal di media sosial' },
                  { id: 'pkm23', text: 'Membuat password yang kompleks dan kuat (min. 12 karakter)' },
                  { id: 'pkm24', text: 'Menggunakan password berbeda untuk setiap akun' },
                  { id: 'pkm25', text: 'Mencatat password di aplikasi pengelola (KeePass/Bitwarden)' },
                  { id: 'pkm26', text: 'Mengganti password secara berkala (min. 6 bulan sekali)' },
                  { id: 'pkm27', text: 'Menggunakan 2FA untuk semua akun penting' },
                ]
              },
              {
                title: 'Keamanan Komunikasi',
                items: [
                  { id: 'pkm28', text: 'Menggunakan koneksi pribadi (bukan Wi-Fi publik) untuk data sensitif' },
                  { id: 'pkm29', text: 'Menggunakan VPN saat mengakses Wi-Fi publik' },
                  { id: 'pkm30', text: 'Menghindari informasi sensitif saat di Wi-Fi publik' },
                  { id: 'pkm31', text: 'Menggunakan peramban aman (Brave/Firefox)' },
                  { id: 'pkm32', text: 'Menghapus riwayat dan kukis peramban secara berkala' },
                  { id: 'pkm33', text: 'Menggunakan aplikasi pesan terenkripsi (Signal/Wire) untuk grup kerja' },
                  { id: 'pkm34', text: 'Menggunakan surel terenkripsi untuk komunikasi sensitif' },
                  { id: 'pkm35', text: 'Menggunakan mesin pencari yang menghargai privasi (DuckDuckGo/Brave)' },
                  { id: 'pkm36', text: 'Menggunakan layanan video terenkripsi (Jitsi/BigBlueButton)' },
                  { id: 'pkm37', text: 'Menggunakan penyimpanan cloud terenkripsi (Proton Drive/Mega)' },
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'pelaksanaan-2',
        title: 'Penilaian Aset & Data',
        icon: '🗄️',
        description: 'Memetakan dan menilai semua aset digital media, kepatuhan terhadap regulasi, serta risiko penyalahgunaan data.',
        sections: [
          {
            title: 'Pemahaman Konsep CIA (Kerahasiaan, Keutuhan, Ketersediaan)',
            type: 'info',
            cards: [
              { title: 'Kerahasiaan (Confidentiality)', desc: 'Data hanya bisa diakses orang berhak. Dijaga dengan password, enkripsi, dan kontrol akses.', icon: '🔒' },
              { title: 'Keutuhan (Integrity)', desc: 'Data harus tetap akurat dan tidak berubah tanpa izin. Dijaga dengan hashing dan kontrol versi.', icon: '✅' },
              { title: 'Ketersediaan (Availability)', desc: 'Data harus bisa diakses saat dibutuhkan. Dijaga dengan infrastruktur baik, backup, dan proteksi DDoS.', icon: '⚡' },
            ]
          },
          {
            title: 'Penilaian Kepatuhan Regulasi',
            type: 'checklist',
            items: [
              { id: 'a1', text: '[UU PDP] Media memiliki mekanisme persetujuan eksplisit sebelum mengumpulkan data narasumber' },
              { id: 'a2', text: '[UU PDP] Data yang dikumpulkan disimpan secara aman (terenkripsi, akses terbatas)' },
              { id: 'a3', text: '[UU PDP] Media mampu memenuhi hak subjek data (akses, koreksi, penghapusan)' },
              { id: 'a4', text: '[UU PDP] Data sensitif (politik, kesehatan, agama, orientasi seksual) dikelola dengan sangat hati-hati' },
              { id: 'a5', text: '[UU KIP] Jika menerima dana publik, informasi wajib tersedia untuk publik sesuai ketentuan' },
              { id: 'a6', text: 'Media menerapkan kontrol akses, enkripsi, dan SOP penghapusan data internal' },
              { id: 'a7', text: 'Media siap menghadapi permintaan klarifikasi, koreksi, atau penghapusan data dari subjek data' },
            ]
          },
          {
            title: 'Pemetaan Aset Digital',
            type: 'checklist',
            items: [
              { id: 'a8', text: 'Dokumen penting (laporan keuangan, kontrak, proposal) telah diinventarisasi' },
              { id: 'a9', text: 'Basis data (narasumber, donatur, pembaca) telah diidentifikasi lokasinya' },
              { id: 'a10', text: 'Konten media (foto, video, desain) telah diinventarisasi' },
              { id: 'a11', text: 'Akun dan kredensial (email org, medsos, cloud) telah didaftar' },
              { id: 'a12', text: 'Sistem dan perangkat lunak (situs web, CMS, aplikasi internal) telah didata' },
              { id: 'a13', text: 'Perangkat keras (komputer, router, kamera, NAS) telah diinventarisasi' },
              { id: 'a14', text: 'Lokasi penyimpanan data telah dipetakan (cloud, lokal, NAS)' },
              { id: 'a15', text: 'Hak akses setiap aset digital telah ditentukan dan didokumentasikan' },
              { id: 'a16', text: 'Syarat & ketentuan serta kebijakan privasi layanan pihak ketiga (Google Drive, dll.) telah ditinjau' },
            ]
          },
          {
            title: 'Identifikasi Risiko Data',
            type: 'checklist',
            items: [
              { id: 'a17', text: 'Data sensitif telah diklasifikasikan (tinggi/sedang/rendah)' },
              { id: 'a18', text: 'Konsekuensi kehilangan/kebocoran setiap kategori data telah dianalisis' },
              { id: 'a19', text: 'Kemampuan pemulihan data jika terjadi kerusakan telah dinilai' },
              { id: 'a20', text: 'Rekam jejak layanan pihak ketiga terhadap insiden keamanan telah diperiksa' },
            ]
          },
          {
            title: 'Daftar & Keamanan Media Sosial',
            type: 'checklist',
            items: [
              { id: 'a21', text: 'Semua akun media sosial organisasi telah didaftar (platform, nama akun, tautan)' },
              { id: 'a22', text: 'Jumlah pengikut/pelanggan dan intensitas unggahan telah dicatat' },
              { id: 'a23', text: 'Kekuatan kata sandi setiap akun medsos telah dievaluasi' },
              { id: 'a24', text: '2FA/MFA telah diaktifkan pada semua akun medsos penting' },
              { id: 'a25', text: 'Daftar admin yang memiliki akses akun medsos telah dibuat' },
              { id: 'a26', text: 'SOP pengelolaan dan pemulihan akun medsos telah ada' },
              { id: 'a27', text: 'Admin memahami cara memulihkan akun medsos secara mandiri' },
            ]
          }
        ]
      },
      {
        id: 'pelaksanaan-3',
        title: 'Pemetaan Infrastruktur & Jaringan',
        icon: '🌐',
        description: 'Memetakan dan menguji keamanan infrastruktur digital, situs web, dan jaringan Wi-Fi media.',
        sections: [
          {
            title: 'Observasi & Inventarisasi Infrastruktur',
            type: 'checklist',
            items: [
              { id: 'i1', text: 'Semua perangkat jaringan (router, NAS, access point, printer jaringan) telah diinventarisasi' },
              { id: 'i2', text: 'Perangkat non-jaringan yang menyimpan data sensitif (laptop, kamera, mesin fotokopi) telah didata' },
              { id: 'i3', text: 'Layanan produktivitas (Google Workspace, Microsoft 365) telah diidentifikasi' },
              { id: 'i4', text: 'Aplikasi komunikasi yang digunakan (WhatsApp, Signal, dll.) telah dicatat' },
              { id: 'i5', text: 'Inventarisasi aset IT mencakup: nama aset, pengguna, lokasi, pengamanan, spesifikasi, tanggal pembelian' },
              { id: 'i6', text: 'Layanan pihak ketiga dievaluasi berdasarkan kebijakan, kepatuhan standar, dan rekam jejak keamanan' },
            ]
          },
          {
            title: 'Pemindaian Situs Web (Website Footprinting)',
            type: 'checklist',
            items: [
              { id: 'i7', text: 'Teknologi yang digunakan situs web telah diidentifikasi (Wappalyzer/BuiltWith)' },
              { id: 'i8', text: 'Infrastruktur domain dipetakan: subdomain, IP, DNS, MX record (DNSDumpster/SecurityTrails)' },
              { id: 'i9', text: 'Situs web dipindai kerentanan umum (Sucuri SiteCheck/UpGuard)' },
              { id: 'i10', text: 'Jika WordPress: dipindai dengan WPScan atau WPSec' },
              { id: 'i11', text: 'Konfigurasi SSL/TLS diperiksa dengan SSLabs Test (grade A minimal)' },
              { id: 'i12', text: 'Situs web tidak masuk dalam daftar hitam (blacklist)' },
              { id: 'i13', text: 'CMS dan semua plugin/tema telah diperbarui ke versi terbaru' },
              { id: 'i14', text: 'Infrastruktur surel organisasi telah diperiksa pengamanannya' },
              { id: 'i15', text: 'HTTPS (TLS/SSL) telah diimplementasikan dengan benar di seluruh situs' },
            ]
          },
          {
            title: 'Pemetaan & Keamanan Jaringan Wi-Fi',
            type: 'checklist',
            items: [
              { id: 'i16', text: 'Nama SSID tidak dipajang secara terbuka (dinding/papan)' },
              { id: 'i17', text: 'Kredensial bawaan (default) router telah diubah' },
              { id: 'i18', text: 'Terdapat pemisahan jaringan antara pengguna internal dan tamu/eksternal' },
              { id: 'i19', text: 'Percobaan login ke admin router dengan kredensial default — hasilnya dicatat' },
              { id: 'i20', text: 'ISP yang digunakan telah diidentifikasi' },
              { id: 'i21', text: 'Semua perangkat terhubung di jaringan telah diidentifikasi (Fing/router dashboard)' },
              { id: 'i22', text: 'Firewall aktif dan melindungi jaringan dari akses tidak sah' },
              { id: 'i23', text: 'Terdapat kebijakan penggunaan perangkat pribadi di jaringan organisasi' },
              { id: 'i24', text: 'Backup data jaringan dilakukan secara teratur' },
              { id: 'i25', text: 'Karyawan mendapat pelatihan keamanan jaringan' },
              { id: 'i26', text: 'LAN digunakan dengan akses terbatas (tamu tidak bisa langsung mengakses)' },
              { id: 'i27', text: 'Jika ada kamera CCTV: jumlah dan penempatannya telah dicatat' },
              { id: 'i28', text: 'Keamanan fisik kantor (lingkungan, pintu, pengaturan ruang) telah diobservasi' },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'pelaporan',
    label: 'C',
    title: 'Pelaporan',
    color: 'green',
    description: 'Menyusun dan menyampaikan temuan audit secara akurat, jelas, dan konstruktif.',
    steps: [
      {
        id: 'pelaporan-1',
        title: 'Penyusunan & Penyampaian Laporan',
        icon: '📄',
        description: 'Laporan audit harus akurat, jelas, dan dapat ditindaklanjuti. Sesuaikan bahasa dengan audiens non-teknis.',
        sections: [
          {
            title: 'Kelengkapan Laporan',
            type: 'checklist',
            items: [
              { id: 'l1', text: 'Halaman depan berisi: nama organisasi, judul, waktu audit, nama auditor' },
              { id: 'l2', text: 'Pengantar mencakup: latar belakang, tujuan, ruang lingkup, metodologi' },
              { id: 'l3', text: 'Profil organisasi (deskripsi singkat, struktur teknis, kapasitas tim) telah ditulis' },
              { id: 'l4', text: 'Temuan: Risiko & Ancaman telah didokumentasikan' },
              { id: 'l5', text: 'Temuan: Kapasitas (3P: Proses, Orang, Platform) telah didokumentasikan' },
              { id: 'l6', text: 'Temuan: Aset Digital telah didokumentasikan' },
              { id: 'l7', text: 'Temuan: Jaringan & Infrastruktur telah didokumentasikan' },
              { id: 'l8', text: 'Rekomendasi kebijakan telah disusun berdasarkan temuan' },
              { id: 'l9', text: 'Rekomendasi pengelolaan data & aset digital telah disusun' },
              { id: 'l10', text: 'Rekomendasi jaringan & infrastruktur telah disusun' },
              { id: 'l11', text: 'Lampiran teknis (hasil pemindaian, data tools) telah dilampirkan' },
            ]
          },
          {
            title: 'Kualitas Rekomendasi',
            type: 'checklist',
            items: [
              { id: 'l12', text: 'Setiap rekomendasi terhubung langsung dengan temuan spesifik' },
              { id: 'l13', text: 'Rekomendasi bersifat spesifik (bukan generik)' },
              { id: 'l14', text: 'Rekomendasi disesuaikan dengan kapasitas SDM, pemahaman IT, dan pendanaan organisasi' },
              { id: 'l15', text: 'Prioritas rekomendasi telah dibuat (tinggi/sedang/rendah)' },
              { id: 'l16', text: 'Estimasi jangka waktu pelaksanaan telah ditambahkan (pendek/menengah/panjang)' },
              { id: 'l17', text: 'Bahasa laporan mudah dipahami oleh pembaca non-teknis' },
              { id: 'l18', text: 'Istilah teknis disertai penjelasan singkat' },
            ]
          },
          {
            title: 'Penyampaian Laporan',
            type: 'checklist',
            items: [
              { id: 'l19', text: 'Laporan tertulis telah dikirimkan ke pihak auditi sebelum sesi presentasi' },
              { id: 'l20', text: 'Sesi pemaparan laporan (presentasi) telah dijadwalkan' },
              { id: 'l21', text: 'Pimpinan yang bisa mengambil keputusan hadir dalam sesi pemaparan' },
              { id: 'l22', text: 'Ruang diskusi dan tanya jawab disediakan dalam sesi pemaparan' },
              { id: 'l23', text: 'Jadwal tindak lanjut dan re-audit telah disepakati bersama' },
              { id: 'l24', text: 'Organisasi memahami bahwa audit keamanan digital perlu dilakukan berkala (min. setahun sekali)' },
            ]
          }
        ]
      }
    ]
  }
]

export function getAllItems() {
  const items = []
  for (const phase of phases) {
    for (const step of phase.steps) {
      for (const section of step.sections) {
        if (section.type === 'checklist') {
          for (const item of section.items) {
            items.push({ ...item, phaseId: phase.id, stepId: step.id })
          }
        } else if (section.type === 'pakem') {
          for (const cat of section.categories) {
            for (const item of cat.items) {
              items.push({ ...item, phaseId: phase.id, stepId: step.id })
            }
          }
        }
      }
    }
  }
  return items
}

export function getTotalByPhase(phaseId) {
  const phase = phases.find(p => p.id === phaseId)
  if (!phase) return 0
  let count = 0
  for (const step of phase.steps) {
    for (const section of step.sections) {
      if (section.type === 'checklist') count += section.items.length
      else if (section.type === 'pakem') {
        for (const cat of section.categories) count += cat.items.length
      }
    }
  }
  return count
}
