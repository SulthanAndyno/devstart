export const SITE_NAME = 'DevStart';
export const SITE_DESCRIPTION = 'Kursus pemula untuk belajar membuat website menggunakan HTML, CSS, dan JavaScript. Mulai dari nol hingga website pertamamu online.';
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6281234567890';

export const NAV_LINKS = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang Kelas', href: '#tentang-kelas' },
  { label: 'Materi', href: '#materi' },
  { label: 'Hasil Karya', href: '#hasil-karya' },
  { label: 'FAQ', href: '#faq' },
] as const;

export const HERO_BADGES = [
  { icon: 'Users', label: 'Beginner Friendly' },
  { icon: 'FolderGit2', label: 'Project Based' },
  { icon: 'Video', label: 'Live Mentoring' },
  { icon: 'Briefcase', label: 'Portfolio Project' },
] as const;

export const PROBLEMS = [
  {
    icon: 'HelpCircle',
    title: 'Tidak tahu harus mulai dari mana',
    description: 'Terlalu banyak pilihan teknologi membuat bingung menentukan langkah pertama.',
  },
  {
    icon: 'Layers',
    title: 'Terlalu banyak tutorial tanpa arah',
    description: 'Sudah menonton banyak video tutorial tetapi tidak tahu bagaimana menyatukan semuanya.',
  },
  {
    icon: 'PuzzleIcon',
    title: 'Paham teori tetapi bingung membuat project',
    description: 'Memahami konsep secara terpisah tetapi kesulitan mengaplikasikan dalam project nyata.',
  },
  {
    icon: 'Globe',
    title: 'Website hanya berjalan di laptop sendiri',
    description: 'Berhasil membuat website tetapi tidak tahu cara mempublikasikannya secara online.',
  },
  {
    icon: 'FolderOpen',
    title: 'Belum memiliki portfolio untuk ditampilkan',
    description: 'Ingin melamar kerja atau freelance tetapi belum memiliki hasil karya yang bisa ditunjukkan.',
  },
  {
    icon: 'LifeBuoy',
    title: 'Tidak ada mentor untuk bertanya',
    description: 'Bingung mencari jalan keluar ketika menemukan error atau stuck saat menulis kode.',
  },
] as const;

export const COURSE_INFO = {
  name: 'Website Zero to Hero',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  level: 'Beginner',
  method: 'Project Based Learning',
  output: 'Website portfolio yang sudah online',
  features: [
    'Belajar dari fundamental',
    'Latihan setiap modul',
    'Membangun satu project utama',
    'Review hasil project',
    'Panduan deployment',
  ],
} as const;

export const LEARNING_JOURNEY = [
  {
    phase: 1,
    title: 'Web Foundation',
    topics: ['Cara kerja website', 'Struktur dasar HTML', 'Semantic HTML', 'Form, tabel, gambar, dan link'],
    output: 'Membuat struktur website pertama.',
    icon: 'FileCode2',
  },
  {
    phase: 2,
    title: 'Styling with CSS',
    topics: ['CSS selector', 'Box model', 'Flexbox', 'CSS Grid', 'Typography', 'Responsive design'],
    output: 'Mengubah struktur HTML menjadi tampilan website modern.',
    icon: 'Palette',
  },
  {
    phase: 3,
    title: 'JavaScript Fundamentals',
    topics: ['Variable dan data type', 'Function', 'Condition', 'Loop', 'Array dan object', 'DOM manipulation', 'Event listener'],
    output: 'Membuat website interaktif.',
    icon: 'Braces',
  },
  {
    phase: 4,
    title: 'Build Real Project',
    topics: ['Menyusun struktur project', 'Membuat landing page', 'Form validation', 'Responsive layout', 'Code organization'],
    output: 'Website lengkap yang siap dijadikan portfolio.',
    icon: 'Hammer',
  },
  {
    phase: 5,
    title: 'Publish Your Website',
    topics: ['Git dan GitHub dasar', 'Menyimpan project ke repository', 'Deployment'],
    output: 'Website dapat dibuka secara online dan dibagikan kepada orang lain.',
    icon: 'Rocket',
  },
] as const;

export const CURRICULUM = [
  { module: 1, title: 'HTML Fundamental', description: 'Mengenal elemen, tag, dan atribut HTML dasar untuk membangun struktur halaman web.', icon: 'Code2' },
  { module: 2, title: 'Semantic HTML', description: 'Menggunakan elemen HTML5 semantik untuk membuat struktur yang bermakna dan aksesibel.', icon: 'FileCode' },
  { module: 3, title: 'CSS Fundamental', description: 'Mempelajari selector, properti, dan cara menghubungkan style ke halaman HTML.', icon: 'Paintbrush' },
  { module: 4, title: 'Flexbox', description: 'Mengatur layout halaman secara fleksibel menggunakan CSS Flexbox.', icon: 'LayoutList' },
  { module: 5, title: 'CSS Grid', description: 'Membuat layout dua dimensi yang kompleks menggunakan CSS Grid.', icon: 'LayoutGrid' },
  { module: 6, title: 'Responsive Design', description: 'Membuat tampilan website yang menyesuaikan berbagai ukuran layar perangkat.', icon: 'Smartphone' },
  { module: 7, title: 'JavaScript Fundamental', description: 'Memahami variabel, tipe data, fungsi, dan logika dasar JavaScript.', icon: 'Braces' },
  { module: 8, title: 'DOM Manipulation', description: 'Mengakses dan memanipulasi elemen HTML menggunakan JavaScript.', icon: 'MousePointerClick' },
  { module: 9, title: 'Form Validation', description: 'Membuat validasi input form untuk memastikan data yang benar sebelum dikirim.', icon: 'ShieldCheck' },
  { module: 10, title: 'Git & GitHub', description: 'Mengelola versi kode dan berkolaborasi menggunakan Git dan GitHub.', icon: 'GitBranch' },
  { module: 11, title: 'Deployment', description: 'Mempublikasikan website sehingga dapat diakses secara online oleh siapa saja.', icon: 'Rocket' },
  { module: 12, title: 'Portfolio Preparation', description: 'Menyusun project menjadi portfolio profesional yang siap ditampilkan.', icon: 'Briefcase' },
] as const;

export const PROJECT_SHOWCASES = [
  {
    id: 1,
    title: 'Personal Portfolio',
    type: 'Portfolio Website',
    description: 'Website portfolio developer pemula dengan desain modern dan responsif.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'linear-gradient(135deg, #01497c 0%, #2a6f97 50%, #468faf 100%)',
  },
  {
    id: 2,
    title: 'Product Landing Page',
    type: 'Landing Page',
    description: 'Landing page produk dengan desain responsif dan interaksi JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'linear-gradient(135deg, #014f86 0%, #2c7da0 50%, #61a5c2 100%)',
  },
  {
    id: 3,
    title: 'Simple Business Website',
    type: 'Business Website',
    description: 'Website sederhana untuk bisnis atau UMKM dengan tampilan profesional.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'linear-gradient(135deg, #013a63 0%, #01497c 50%, #2a6f97 100%)',
  },
] as const;

export const OUTPUT_CHECKLIST = [
  'Struktur HTML semantic',
  'Tampilan responsif',
  'Interaksi menggunakan JavaScript',
  'Form yang dapat digunakan',
  'Optimasi dasar',
  'Website berhasil dipublish',
] as const;

export const BENEFITS = [
  { icon: 'BookOpen', title: 'Materi Terstruktur', description: 'Alur belajar yang tersusun rapi dari dasar hingga mahir membuat website.' },
  { icon: 'Heart', title: 'Cocok untuk Pemula', description: 'Tidak membutuhkan pengalaman coding sebelumnya untuk mengikuti kelas ini.' },
  { icon: 'FolderGit2', title: 'Belajar Melalui Project', description: 'Langsung praktik membangun website nyata, bukan sekadar menonton tutorial.' },
  { icon: 'FileCode', title: 'Source Code Latihan', description: 'Mendapatkan akses ke seluruh source code materi dan latihan yang bisa dipelajari ulang.' },
  { icon: 'Video', title: 'Live Mentoring', description: 'Sesi belajar langsung bersama mentor untuk menjawab pertanyaan secara real-time.' },
  { icon: 'MessageSquare', title: 'Review Project', description: 'Mendapatkan feedback dan saran perbaikan langsung dari mentor untuk setiap project.' },
  { icon: 'Users', title: 'Komunitas Belajar', description: 'Bergabung dengan grup diskusi untuk saling belajar dan berbagi bersama peserta lain.' },
  { icon: 'Rocket', title: 'Panduan Deployment', description: 'Bimbingan langkah demi langkah untuk mempublikasikan website ke internet.' },
] as const;

export const TARGET_STUDENTS = [
  { icon: 'GraduationCap', title: 'Mahasiswa', description: 'Yang baru belajar web development dan ingin memiliki fondasi yang kuat.' },
  { icon: 'BookOpen', title: 'Pelajar', description: 'Yang ingin memahami coding dan membuat website pertama mereka.' },
  { icon: 'Lightbulb', title: 'Pemula Absolut', description: 'Yang belum pernah menulis kode sama sekali dan ingin memulai.' },
  { icon: 'Laptop', title: 'Calon Freelancer', description: 'Yang ingin membangun skill web development untuk memulai karir freelance.' },
  { icon: 'Store', title: 'Pemilik Bisnis', description: 'Yang ingin memahami cara kerja website untuk bisnisnya.' },
  { icon: 'UserCircle', title: 'Portfolio Builder', description: 'Yang ingin memiliki portfolio digital profesional untuk menunjang karir.' },
] as const;

export const INSTRUCTOR = {
  name: 'Mentor DevStart',
  position: 'Web Developer & Instructor',
  experience: 'Berpengalaman dalam pengembangan web dan mengajar pemula untuk memahami coding dari dasar.',
  focus: 'Fokus pada pengajaran yang praktis, terstruktur, dan berorientasi pada project nyata.',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
} as const;

export const SCHEDULE = {
  course: 'Website Zero to Hero',
  duration: '5 Pertemuan',
  level: 'Beginner',
  method: 'Hybrid Class',
  capacity: 'Terbatas',
} as const;

export const FACILITIES = [
  'Materi pembelajaran',
  'Source code',
  'Recording kelas',
  'Grup diskusi',
  'Mentoring',
  'Review project',
  'Panduan deployment',
] as const;

export const FAQ_DATA = [
  {
    question: 'Apakah kelas ini cocok untuk pemula?',
    answer: 'Ya, kelas ini dirancang khusus untuk pemula yang belum memiliki pengalaman coding sama sekali. Materi disusun dari yang paling dasar hingga mampu membuat dan mempublikasikan website.',
  },
  {
    question: 'Apakah harus memiliki pengalaman coding?',
    answer: 'Tidak. Kelas ini dimulai dari nol. Kamu hanya perlu memiliki laptop dan koneksi internet yang stabil untuk mengikuti kelas.',
  },
  {
    question: 'Apa saja aplikasi yang diperlukan?',
    answer: 'Kamu memerlukan browser (Chrome atau Firefox), text editor (Visual Studio Code yang gratis), dan Git. Semua tools akan diajarkan cara instalasi dan penggunaannya di pertemuan pertama.',
  },
  {
    question: 'Apakah harus menggunakan laptop?',
    answer: 'Ya, laptop atau komputer diperlukan untuk menulis kode dan menjalankan project. Tablet atau smartphone tidak cukup untuk kegiatan coding.',
  },
  {
    question: 'Apakah mendapatkan rekaman kelas?',
    answer: 'Ya, setiap sesi kelas akan direkam dan dapat diakses kembali oleh peserta. Rekaman tersedia selama masa akses yang ditentukan.',
  },
  {
    question: 'Apakah project akan dipublish secara online?',
    answer: 'Ya! Di tahap akhir kelas, kamu akan belajar cara mempublikasikan website menggunakan platform hosting gratis sehingga website bisa diakses oleh siapa saja di internet.',
  },
  {
    question: 'Apakah mendapatkan source code?',
    answer: 'Ya, semua source code materi, latihan, dan project akan dibagikan kepada peserta melalui repository GitHub.',
  },
  {
    question: 'Bagaimana cara mendaftar?',
    answer: 'Kamu bisa mendaftar melalui form pendaftaran yang tersedia di halaman ini. Setelah mengisi form, kamu akan diarahkan ke WhatsApp untuk konfirmasi pendaftaran.',
  },
  {
    question: 'Apakah tersedia konsultasi setelah kelas?',
    answer: 'Ya, peserta tetap bisa bertanya dan berdiskusi di grup komunitas setelah kelas selesai. Untuk konsultasi personal, bisa diatur sesuai ketersediaan mentor.',
  },
  {
    question: 'Apakah ada sertifikat?',
    answer: 'Ya, peserta yang menyelesaikan seluruh materi dan project akan mendapatkan sertifikat penyelesaian dari DevStart.',
  },
] as const;

export const CODING_EXPERIENCE_OPTIONS = [
  'Belum pernah coding',
  'Pernah mencoba HTML/CSS',
  'Sudah pernah membuat website sederhana',
] as const;

export const BATCH_OPTIONS = [
  'Batch Juli 2026',
  'Batch Agustus 2026',
  'Batch September 2026',
] as const;

export const STATS = [
  { value: 3, suffix: '+', label: 'Modul Materi' },
  { value: 5, suffix: '', label: 'Pertemuan' },
  { value: 3, suffix: '+', label: 'Project Portfolio' },
  { value: 100, suffix: '%', label: 'Praktik Langsung' },
] as const;
