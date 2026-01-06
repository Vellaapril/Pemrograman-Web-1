// Data: daftar pertemuan dan kontennya (statik)
const meetings = [
  {
    id: 1,
    title: "Pengenalan Web",
    summary: "Dasar-dasar World Wide Web (WWW), cara kerja web, dan pengantar HTML.",
    pdf: "File/File PDF/TPL0293_01_PENGENALAN WEB.pdf",
    ppt: "File/File PPT/Pert 1 - Pengenalan Web.pdf",
    objectives: ["Mahasiswa mampu menjelaskan World Wide Web (WWW).", "Mahasiswa mampu menjelaskan proses kerja web.", "Mahasiswa mendapatkan pengantar HTML.", "Mahasiswa dapat mempraktikkan penulisan struktur HTML dasar."],
    content: `
      <h3>Ringkasan Materi</h3>
      <p>Modul ini memperkenalkan dasar-dasar World Wide Web (WWW), mekanisme kerjanya, dan pengantar Hypertext Markup Language (HTML). WWW adalah kumpulan web di seluruh dunia yang menyediakan layanan akses informasi melalui halaman web atau situs. Internet bekerja dalam format klien-server, di mana klien (browser) meminta dokumen dari server. Dokumen web dibangun menggunakan HTML. Proses kerja web melibatkan protokol HTTP (HyperText Transmission Protocol) yang mengirim permintaan dari browser (klien) ke web server, dan server merespons dengan mengirimkan dokumen HTML. HTML sendiri berfungsi untuk mendeskripsikan struktur halaman web menggunakan elemen atau tag, yang terbagi menjadi bagian <code>&lt;head&gt;</code> (berisi meta tag, CSS, JavaScript) dan bagian <code>&lt;body&gt;</code> (berisi konten yang akan ditampilkan).</p>

      <h3>Rincian Materi</h3>
      <ul>
        <li><strong>World Wide Web (WWW):</strong> Kumpulan dokumen yang saling terhubung melalui hyperlink untuk menyediakan akses informasi.</li>
        <li><strong>Cara Kerja Web:</strong> Model klien-server; browser mengirimkan permintaan HTTP ke server, server merespons dengan dokumen HTML.</li>
        <li><strong>Protokol Komunikasi:</strong> HTTP (HyperText Transfer Protocol) digunakan untuk mengirim dan menerima halaman web.</li>
        <li><strong>Server Web:</strong> Perangkat keras atau lunak yang menyimpan file situs web dan merespons permintaan klien.</li>
        <li><strong>Fungsi Server Web:</strong> Menyimpan data, melayani permintaan, mengelola bandwidth, dan mendukung skrip sisi server.</li>
        <li><strong>Pengantar HTML:</strong> HTML mendeskripsikan struktur halaman web menggunakan tag; terbagi menjadi <code>&lt;head&gt;</code> dan <code>&lt;body&gt;</code>.</li>
        <li><strong>Kegunaan HTML:</strong> Menampilkan konten, form, dan multimedia di web.</li>
        <li><strong>Struktur Elemen HTML:</strong> <code>&lt;head&gt;</code> (meta, title, link ke CSS/JS) dan <code>&lt;body&gt;</code> (konten utama).</li>
        <li><strong>Browser & Editor:</strong> Browser menampilkan halaman (Mozilla, Chrome, Edge). Editor seperti Notepad, EditPlus, atau DreamWeaver digunakan untuk menulis HTML.</li>
      </ul>

      <h3>Contoh Cepat (Struktur Penulisan HTML)</h3>
      <pre class="code">&lt;html&gt;\n&lt;head&gt;\n  &lt;!-- bagian head: title, meta, link css --&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;!-- bagian body: konten yang ditampilkan --&gt;\n&lt;/body&gt;\n&lt;/html&gt;</pre>

      <p>
        <a href="File/File PPT/Pert 1 - Pengenalan Web.pdf" target="_blank">Buka: PPT Pert 1 - Pengenalan Web</a>
        &nbsp;|&nbsp;
        <a href="File/File PDF/TPL0293_01_PENGENALAN WEB.pdf" target="_blank">Buka: PDF Pengenalan Web</a>
      </p>
    `,
  },
  {
    id: 2,
    title: "Basic Tag HTML",
    summary: "Pengenalan tag HTML dasar dan struktur dokumen.",
    pdf: "File/File PDF/TPL0293_02_BASIC TAG HTML.pdf",
    ppt: "File/File PPT/Pert 2 - Basic Tag HTML.pdf",
    objectives: [
      "Mahasiswa mampu memahami dan mempraktikkan tag dasar struktur HTML.",
      "Mahasiswa dapat menggunakan tag format dokumen HTML seperti <head>, <body>, <title>, <meta>, <h1>-<h6>, <p>, <hr>, <pre>, dan <blockquote>.",
      "Mahasiswa dapat membuat halaman web sederhana sesuai contoh dan latihan yang diberikan.",
    ],
    content: `
        <h3>Ringkasan Materi</h3>
        <p>HTML merupakan bahasa markup yang digunakan untuk membuat halaman web. Tag HTML terbagi menjadi beberapa kategori:</p>
        <ul>
          <li>Tag berpasangan: &lt;tag&gt; ... &lt;/tag&gt;</li>
          <li>Tag tunggal: &lt;tag&gt;</li>
          <li>Tag dengan atribut: &lt;tag attributes&gt;</li>
        </ul>

        <h4>Elemen Utama</h4>
        <ul>
          <li>&lt;head&gt;: Berisi metadata seperti judul, link ke file eksternal, dan meta tags.</li>
          <li>&lt;body&gt;: Berisi konten yang tampil di halaman seperti teks, gambar, heading, garis horizontal, dan lainnya.</li>
        </ul>

        <h4>Beberapa Tag Penting</h4>
        <ul>
          <li>&lt;title&gt;: Menampilkan judul halaman di tab browser.</li>
          <li>&lt;meta&gt;: Menyediakan informasi metadata seperti deskripsi halaman, keyword, robot indexing.</li>
          <li>&lt;h1&gt; - &lt;h6&gt;: Heading untuk judul dan subjudul.</li>
          <li>&lt;p&gt;: Paragraf teks.</li>
          <li>&lt;hr&gt;: Garis horizontal untuk pembatas.</li>
          <li>&lt;pre&gt;: Tampilan teks preformat yang mengikuti indentasi dan spasi.</li>
          <li>&lt;blockquote&gt;: Untuk memberi indentasi pada teks.</li>
        </ul>

        <h4>Contoh Cepat</h4>
        <pre class="code">&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;head&gt;\n&lt;title&gt;Contoh Halaman HTML&lt;/title&gt;\n&lt;meta charset="UTF-8"&gt;\n&lt;meta name="description" content="Contoh penggunaan tag HTML dasar"&gt;\n&lt;/head&gt;\n&lt;body&gt;\n&lt;h1&gt;Judul Utama&lt;/h1&gt;\n&lt;p align="justify"&gt;Ini adalah paragraf yang diratakan kiri dan kanan.&lt;/p&gt;\n&lt;hr width="80%" size="5" color="blue"&gt;\n&lt;h2&gt;Judul Sub&lt;/h2&gt;\n&lt;pre&gt;\nContoh teks preformat,\nmengikuti indentasi dan spasi\n&lt;/pre&gt;\n&lt;blockquote&gt;\nIni adalah teks dalam blockquote, menjorok ke dalam.\n&lt;/blockquote&gt;\n&lt;/body&gt;\n&lt;/html&gt;</pre>

        <p>Hasilnya: Web menampilkan judul, paragraf, garis horizontal, teks preformat, dan indentasi sesuai tag.</p>

        <p>
          <a href="File/File PPT/Pert 2 - Basic Tag HTML.pdf" target="_blank">Buka: PPT Pert 2 - Basic Tag HTML</a>
          &nbsp;|&nbsp;
          <a href="File/File PDF/TPL0293_02_BASIC TAG HTML.pdf" target="_blank">Buka: PDF Basic Tag HTML</a>
        </p>
      `,
  },
  {
    id: 3,
    title: "Format Teks dan Karakter Khusus",
    summary: "Penggunaan tag untuk teks, entitas HTML, dan karakter khusus.",
    pdf: "File/File PDF/TPL0293_03_FORMAT TEKS DAN KARAKTER KHUSUS.pdf",
    ppt: "File/File PPT/Pert 3 - Format Teks Dan Karakter Khusus.pdf",
    objectives: [
      "Mahasiswa memahami penggunaan tag HTML untuk melakukan format teks (seperti perubahan font, ukuran, warna, tebalkan, miring, garis bawah, dll.).",
      "Mahasiswa mampu menggunakan karakter khusus (entity) untuk menampilkan simbol-simbol seperti ©, ™, &, dan tanda matematika dalam halaman web.",
      "Mahasiswa dapat mempraktikkan pembuatan halaman web yang menerapkan format teks dan karakter khusus sesuai modul.",
    ],
    content: `
      <h3>Tujuan Pembelajaran</h3>
      <ul>
        <li>Mahasiswa memahami penggunaan tag HTML untuk melakukan format teks ( seperti perubahan font, ukuran, warna, tebalkan, miring, garis bawah, dll.).</li>
        <li>Mahasiswa mampu menggunakan karakter khusus (entity) untuk menampilkan simbol-simbol seperti &amp;copy;, &amp;trade;, &amp;, dan tanda matematika dalam halaman web.</li>
        <li>Mahasiswa dapat mempraktikkan pembuatan halaman web yang menerapkan format teks dan karakter khusus sesuai modul.</li>
      </ul>

      <h3>Ringkasan Materi</h3>
      <p><strong>Format Teks:</strong> Menggunakan tag HTML seperti &lt;font&gt;, &lt;b&gt;, &lt;strong&gt;, &lt;em&gt;, &lt;i&gt;, &lt;small&gt;, &lt;big&gt;, &lt;sub&gt;, &lt;sup&gt;, &lt;u&gt;, &lt;s&gt;, dan &lt;marquee&gt; untuk mengubah tampilan teks.</p>
      <p><strong>Karakter Khusus:</strong> Menggunakan entitas seperti &amp;copy;, &amp;reg;, &amp;trade;, &amp;amp;, &amp;lt;, &amp;gt;, dan lain-lain untuk menampilkan simbol khusus dalam website.</p>

      <h3>Rincian dan Contoh Cepat</h3>
      <h4>Format Teks</h4>
      <p><!-- Contoh Mengubah Font, Ukuran dan Warna --></p>
      <pre class="code">&lt;font face="Arial" color="purple" size="4"&gt;\nContoh Teks Berwarna Ungu, Font Arial, Ukuran 4\n&lt;/font&gt;</pre>

      <p><!-- Contoh Tebal, Miring, Underline --></p>
      <pre class="code">&lt;b&gt;&lt;i&gt;&lt;u&gt;Ini Teks Tebal Miring dan Underline&lt;/u&gt;&lt;/i&gt;&lt;/b&gt;</pre>

      <p><!-- Contoh Ukuran Besar dan Kecil --></p>
      <pre class="code">&lt;big&gt;Ini Ukuran Lebih Besar&lt;/big&gt;\n&lt;small&gt;Ini Ukuran Lebih Kecil&lt;/small&gt;</pre>

      <p><!-- Contoh Subscript dan Superscript --></p>
      <pre class="code">X&lt;sub&gt;1&lt;/sub&gt; + Y&lt;sup&gt;2&lt;/sup&gt;</pre>

      <h4>Karakter Khusus</h4>
      <pre class="code">&amp;copy; 2024\n&amp;trade;\n&amp;reg;\n&lt;B&gt;Ini kalimat bold&lt;/B&gt;\n&gt;Ini tanda lebih besar</pre>

      <h3>Contoh Praktik Singkat</h3>
      <pre class="code">&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;head&gt;\n&lt;title&gt;Contoh Format Teks dan Karakter Khusus&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n&lt;h2&gt;Contoh Format Teks&lt;/h2&gt;\n&lt;p&gt;&lt;b&gt;Ini teks tebal&lt;/b&gt;&lt;/p&gt;\n&lt;p&gt;&lt;i&gt;Ini teks miring&lt;/i&gt;&lt;/p&gt;\n&lt;p&gt;&lt;u&gt;Ini teks garis bawah&lt;/u&gt;&lt;/p&gt;\n&lt;p&gt;&lt;small&gt;Ukuran kecil&lt;/small&gt;&lt;/p&gt;\n&lt;p&gt;&lt;big&gt;Ukuran besar&lt;/big&gt;&lt;/p&gt;\n&lt;p&gt;Hasil subscript: H&lt;sub&gt;2&lt;/sub&gt;O&lt;/p&gt;\n&lt;p&gt;Hasil superscript: x&lt;sup&gt;2&lt;/sup&gt;&lt;/p&gt;\n\n&lt;h2&gt;Contoh Karakter Khusus&lt;/h2&gt;\n&lt;p&gt;&amp;copy; 2024 Contoh Website&lt;/p&gt;\n&lt;p&gt;&amp;trade; Produk Baru&lt;/p&gt;\n&lt;p&gt;&amp;lt;Ini adalah teks dengan tanda kurang dari&amp;gt;&lt;/p&gt;\n&lt;/body&gt;\n&lt;/html&gt;</pre>

      <p>
        <a href="File/File PPT/Pert 3 - Format Teks Dan Karakter Khusus.pdf" target="_blank">Buka: PPT Pert 3 - Format Teks Dan Karakter Khusus</a>
        &nbsp;|&nbsp;
        <a href="File/File PDF/TPL0293_03_FORMAT TEKS DAN KARAKTER KHUSUS.pdf" target="_blank">Buka: PDF Format Teks Dan Karakter Khusus</a>
      </p>
    `,
  },
  {
    id: 4,
    title: "Menampilkan Gambar, Suara dan Video",
    summary: "Praktik menyisipkan gambar, suara, dan video dalam dokumen HTML serta atribut dan format yang umum digunakan.",
    pdf: "File/File PDF/TPL0293_04_MENAMPILKAN GAMBAR, SUARA DAN VIDEO.pdf",
    ppt: "File/File PPT/Pert 4 - Menampilkan Gambar, Suara dan Video.pdf",
    objectives: ["Setelah menyelesaikan materi pada pertemuan ini, mahasiswa mampu mempraktikkan skrip menampilkan gambar, suara, dan video."],
    content: `
      <h3>Uraian Materi</h3>

      <h4>1. Menampilkan Gambar</h4>
      <p>Ekstensi file gambar yang umum: <code>.gif</code>, <code>.jpeg</code>, <code>.pcx</code>, <code>.png</code>, <code>.wmf</code>, <code>.bmp</code>. Browser modern paling sering menerima <code>.gif</code> dan <code>.jpg</code>.</p>
      <p>Tag dasar contoh:</p>
      <pre class="code">&lt;img src="image/me.jpg" width="125" height="150" border="2" alt="my picture" title="Taj'Mahal"&gt;</pre>
      <p>Atribut penting: <strong>src</strong>, <strong>height</strong>, <strong>width</strong>, <strong>align</strong> (top, bottom, middle, left, right, center), <strong>alt</strong>, <strong>border</strong>, <strong>title</strong>.</p>

      <h5>Menampilkan Image Map</h5>
      <p>Gunakan <code>usemap</code> pada tag <code>&lt;img&gt;</code> dan definisikan peta dengan <code>&lt;map name="..."&gt;</code> berisi tag <code>&lt;area&gt;</code> (atribut: <code>shape</code>, <code>coords</code>, <code>href</code>, <code>title</code>/<code>alt</code>).</p>
      <pre class="code">&lt;img src="image/me.jpg" usemap="#picturemap" width="145" height="126" alt="gambarku"&gt;\n&lt;map name="picturemap"&gt;\n  &lt;area shape="rect" coords="0,0,82,126" href="a.htm" title="bagianA"&gt;\n  &lt;area shape="circle" coords="90,58,3" href="b.htm" alt="bagianB"&gt;\n  &lt;area shape="circle" coords="124,58,8" href="c.htm" alt="bagianC"&gt;\n&lt;/map&gt;</pre>

      <h4>2. Menampilkan Suara</h4>
      <p>Gunakan tag <code>&lt;embed&gt;</code> atau (legacy) <code>&lt;bgsound&gt;</code>. Ekstensi umum: <code>.mp3</code>, <code>.wav</code>, <code>.mid</code>, <code>.au</code>.</p>
      <p>Sintaks umum:</p>
      <pre class="code">&lt;embed src="filename.ext" width="x" height="x" autoplay="true|false" hidden="true|false" loop="true|false" volume="30"&gt;&lt;/embed&gt;</pre>
      <p>Atribut penting: <strong>autoplay</strong>, <strong>hidden</strong>, <strong>loop</strong>, <strong>volume</strong> (1–100).</p>
      <p>Contoh:</p>
      <pre class="code">&lt;embed src="music/davesite.mp3" loop="true" autoplay="false" width="145" height="60"&gt;&lt;/embed&gt;\n&lt;BGSOUND SRC="mother.mid" LOOP=5&gt;</pre>

      <h4>3. Menampilkan Video</h4>
      <p>Gunakan <code>&lt;embed&gt;</code> untuk konten plugin/Flash, atau <code>&lt;video&gt;</code> (HTML5) untuk video modern. Format HTML5: MP4, WebM, Ogg.</p>
      <p>Contoh Flash/plugin:</p>
      <pre class="code">&lt;embed src="helloworld.swf" type="application/x-shockwave-flash" width="200" height="200"&gt;</pre>
      <p>Contoh HTML5:</p>
      <pre class="code">&lt;video width="400" controls&gt;\n  &lt;source src="video1.mp4" type="video/mp4"&gt;\n  &lt;source src="video1.ogg" type="video/ogg"&gt;\n  Browser anda tidak support video pada HTML5.\n&lt;/video&gt;</pre>
      <p>Video HTML5 dapat dikontrol via JavaScript untuk fungsi play/pause dan mengubah ukuran.</p>

      <h4>Menampilkan Favicon</h4>
      <p>Siapkan gambar 32x32 lalu konversi ke <code>.ico</code>. Tambahkan di &lt;head&gt;:</p>
      <pre class="code">&lt;link rel="shortcut icon" href="image/favicon.ico"&gt;</pre>

      <h4>Contoh Implementasi Multimedia (Latihan)</h4>
      <pre class="code">&lt;body&gt;\n  &lt;img src="image/banner.gif" width="600" height="100" alt="mybanner" align="center" title="banner"&gt;\n  &lt;embed src="musik/mother.mp3" width="100" height="20" autoplay="false" hidden="false" loop="true" volume="30"&gt;&lt;/embed&gt;\n  &lt;embed src="musik/i swear.mp3" width="100" height="20" autoplay="true" hidden="false" loop="true" volume="30"&gt;&lt;/embed&gt;\n  &lt;embed src="video/pagiraya.mp4" width="300" height="250" autoplay="true" hidden="false" loop="false" volume="30"&gt;&lt;/embed&gt;\n&lt;/body&gt;</pre>

      <p>
        <a href="File/File PPT/Pert 4 - Menampilkan Gambar, Suara dan Video.pdf" target="_blank">Buka: PPT Pert 4 - Menampilkan Gambar, Suara dan Video</a>
        &nbsp;|&nbsp;
        <a href="File/File PDF/TPL0293_04_MENAMPILKAN GAMBAR, SUARA DAN VIDEO.pdf" target="_blank">Buka: PDF Menampilkan Gambar, Suara dan Video</a>
      </p>
    `,
  },
  {
    id: 5,
    title: "Hyperlink",
    summary: "Membuat dan mengelola tautan (relative, absolute, anchor, email) serta praktik aman.",
    pdf: "File/File PDF/TPL0293_05_HYPERLINK.pdf",
    ppt: "File/File PPT/Pert 5 - Hyperlink.pdf",
    objectives: [
      "Setelah menyelesaikan materi pertemuan V, mahasiswa mampu mempraktikkan penggunaan script hyperlink sesuai dengan prosedur.",
      "Mahasiswa mampu membuat link relative, absolute, anchor (internal), dan mailto serta menerapkan atribut target dan rel dengan aman.",
    ],
    content: `
      <h3>Ringkasan Materi</h3>
      <p>Hyperlink dalam HTML adalah kemampuan untuk membuat tautan dari teks atau gambar ke halaman lain, bagian lain dalam halaman yang sama, alamat email, atau sumber eksternal. Materi membahas empat jenis utama: Link Relative, Link Absolute, Link Anchor (pada halaman yang sama), dan Link Email.</p>

      <h3>Rincian Materi (Jenis Hyperlink)</h3>
      <ol>
        <li>
          <strong>Link Relative</strong>
          <p>Melakukan tautan ke file di dalam situs yang sama. Struktur umum:</p>
          <pre class="code">&lt;a href="nama_file.html"&gt;Teks tautan&lt;/a&gt;</pre>
        </li>
        <li>
          <strong>Link Absolute</strong>
          <p>Melakukan tautan ke alamat penuh situs lain. Struktur umum:</p>
          <pre class="code">&lt;a href="https://www.example.com/path"&gt;Teks tautan&lt;/a&gt;</pre>
        </li>
        <li>
          <strong>Link pada Halaman yang Sama (Anchor)</strong>
          <p>Digunakan untuk navigasi antar bagian dalam satu halaman. Struktur tujuan dan tautan:</p>
          <pre class="code">&lt;a name="pengenalan"&gt;&lt;/a&gt;  (menandai tujuan)\n&lt;a href="#pengenalan"&gt;Ke bagian Pengenalan&lt;/a&gt;</pre>
        </li>
        <li>
          <strong>Link Email</strong>
          <p>Membuat tautan yang membuka klien email dengan alamat tujuan. Struktur:</p>
          <pre class="code">&lt;a href="mailto:alamat@domain.com"&gt;Kirim Email&lt;/a&gt;</pre>
        </li>
      </ol>

      <h3>Catatan Atribut Penting</h3>
      <ul>
        <li><code>target="_blank"</code> membuka tautan di tab baru; selalu gunakan <code>rel="noopener noreferrer"</code> bersamaan untuk mencegah akses window.opener dan meningkatkan keamanan.</li>
        <li><code>download</code> dapat digunakan untuk menyarankan pengunduhan file lokal.</li>
        <li>Gunakan teks tautan deskriptif untuk aksesibilitas dan SEO (hindari "klik di sini").</li>
      </ul>

      <h3>Contoh Cepat Sesuai Modul</h3>
      <table class="code">
        <tr><th>Jenis Link</th><th>Contoh Kode</th><th>Keterangan</th></tr>
        <tr><td>Link Relative</td><td><pre>&lt;a href="perpustakaan.html"&gt;Ruang Baca&lt;/a&gt;</pre></td><td>Tautan ke file di situs yang sama</td></tr>
        <tr><td>Link Absolute</td><td><pre>&lt;a href="http://www.google.com"&gt;Google&lt;/a&gt;</pre></td><td>Tautan ke situs eksternal</td></tr>
        <tr><td>Link Anchor (Tujuan)</td><td><pre>&lt;a name="pengenalan"&gt;&lt;/a&gt;</pre></td><td>Menandai lokasi tujuan pada halaman</td></tr>
        <tr><td>Link Anchor (Tautan)</td><td><pre>&lt;a href="#pengenalan"&gt;Pengenalan&lt;/a&gt;</pre></td><td>Tautan menuju bagian yang diberi nama</td></tr>
        <tr><td>Link Email</td><td><pre>&lt;a href="mailto:endar_nirmala@yahoo.com"&gt;kirim email&lt;/a&gt;</pre></td><td>Membuka aplikasi email default</td></tr>
      </table>

      <p>
        <a href="File/File PPT/Pert 5 - Hyperlink.pdf" target="_blank">Buka: PPT Pert 5 - Hyperlink</a>
        &nbsp;|&nbsp;
        <a href="File/File PDF/TPL0293_05_HYPERLINK.pdf" target="_blank">Buka: PDF Hyperlink</a>
      </p>
    `,
  },
];

// Render daftar pertemuan di sidebar
function renderMeetingsList(filter = "") {
  const list = document.getElementById("meetingsList");
  if (!list) return;
  list.innerHTML = "";
  const q = filter.trim().toLowerCase();
  meetings.forEach((m) => {
    if (q && !(m.title + " " + m.summary).toLowerCase().includes(q)) return;
    const a = document.createElement("a");
    a.href = `#${m.id}`;
    a.className = "meeting-item";
    a.dataset.id = m.id;
    a.innerHTML = `<strong>Pertemuan ${m.id}</strong> — ${m.title}`;
    a.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo(m.id);
    });
    list.appendChild(a);
  });
  setActiveFromHash();
}

// Render isi pertemuan
function renderMeeting(id) {
  const m = meetings.find((x) => x.id === id);
  const article = document.getElementById("article");
  if (!article) return;
  if (!m) {
    article.innerHTML = "<h2>Materi tidak ditemukan</h2>";
    return;
  }
  // escape HTML in objectives to avoid injecting <head>, <body>, etc.
  function escapeHtml(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/'/g, "&#39;");
  }
  const objectives = (m.objectives || []).map((o) => `<li>${escapeHtml(o)}</li>`).join("");
  article.innerHTML = `
      <h2>Pertemuan ${m.id}: ${m.title}</h2>
      <div class="meta">Ringkasan: ${m.summary}</div>
      <div class="objectives"><strong>Tujuan Pembelajaran:</strong><ul>${objectives}</ul></div>
      <section class="lesson">${m.content}</section>
      <div class="resources">
        ${m.ppt ? `<a class="btn secondary" href="${m.ppt}" target="_blank">Buka PPT</a>` : ""}
        ${m.pdf ? `<a class="btn" href="${m.pdf}" target="_blank">Buka PDF</a>` : ""}
      </div>
      ${
        m.pdf
          ? `<div class="viewer-wrap" style="margin-top:12px">
        <div style="margin-bottom:8px">
          <button class="btn secondary" id="viewPdfBtn">Lihat PDF</button>
          ${m.ppt ? `<button class="btn" id="viewPptBtn">Lihat PPT (PDF)</button>` : ""}
        </div>
        <iframe id="viewer" src="${m.pdf}" style="width:100%;height:480px;border:1px solid #e6eef8;border-radius:6px"></iframe>
      </div>`
          : ""
      }
      <div class="nav-buttons">
        <a class="btn secondary" href="#" id="prevBtn">&larr; Sebelumnya</a>
        <a class="btn" href="#" id="nextBtn">Berikutnya &rarr;</a>
      </div>
  `;

  const prev = document.getElementById("prevBtn");
  const next = document.getElementById("nextBtn");
  if (prev)
    prev.addEventListener("click", (e) => {
      e.preventDefault();
      goPrev(id);
    });
  if (next)
    next.addEventListener("click", (e) => {
      e.preventDefault();
      goNext(id);
    });
  // viewer buttons
  const viewPdfBtn = document.getElementById("viewPdfBtn");
  const viewPptBtn = document.getElementById("viewPptBtn");
  const viewer = document.getElementById("viewer");
  if (viewPdfBtn && viewer && m.pdf)
    viewPdfBtn.addEventListener("click", () => {
      viewer.src = m.pdf;
    });
  if (viewPptBtn && viewer && m.ppt)
    viewPptBtn.addEventListener("click", () => {
      viewer.src = m.ppt;
    });
}

function goNext(id) {
  const idx = meetings.findIndex((x) => x.id === id);
  if (idx >= 0 && idx < meetings.length - 1) navigateTo(meetings[idx + 1].id);
}

function goPrev(id) {
  const idx = meetings.findIndex((x) => x.id === id);
  if (idx > 0) navigateTo(meetings[idx - 1].id);
}

function navigateTo(id) {
  location.hash = `#${id}`;
  renderMeeting(id);
  setActiveFromHash();
  const content = document.getElementById("content");
  if (content) content.focus();
}

function setActiveFromHash() {
  const hash = location.hash.replace("#", "");
  const id = parseInt(hash) || null;
  document.querySelectorAll(".meeting-item").forEach((el) => {
    el.classList.toggle("active", parseInt(el.dataset.id) === id);
  });
}

// Init UI
document.addEventListener("DOMContentLoaded", () => {
  const search = document.getElementById("search");
  if (search) search.addEventListener("input", (e) => renderMeetingsList(e.target.value));

  window.addEventListener("hashchange", () => {
    const id = parseInt(location.hash.replace("#", ""));
    if (id) renderMeeting(id);
    setActiveFromHash();
  });

  renderMeetingsList();
  const initialId = parseInt(location.hash.replace("#", ""));
  if (initialId) {
    renderMeeting(initialId);
  } else if (meetings && meetings.length) {
    // render first meeting by default so content area isn't empty
    renderMeeting(meetings[0].id);
    // update hash to reflect current view
    location.hash = `#${meetings[0].id}`;
  }
});
