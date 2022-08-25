# countdowntime-HTML-CSS-JavaScript
Implementasi sederhana HTML, CSS, dan JavaScript untuk website penghitung mundur waktu

Pembelajaran dari HTML (index.html) :
- Menambahkan file CSS Eksternal(dalam 1 folder yang sama) kedalam HTML
  <link rel="stylesheet" href="style.css" class="rel">
- Menambahkan file JavaScript kedalam HTML
  <script src="main.js" defer></script>
  "defer" artinya menunda eksekusi JavaScript sampai HTML loading sempurna
 
 Pembelajarab dari CSS (style.css)
 - Menambahkan background dari CSS dengan : "background-image: url(img/bg.jpg);"
 - Mengatur posisi background : "background-position: center;"
 - Mengatur tampilan : "display: flex;"
 - Mengatur posisi konten : "align-items: center;" dan "justify-content: center;"
 - Mengubah jenis font : "font-family :'Courier New', Courier, monospace;"
 - Mengubah ukuran font : "font-size: 20px;"
 - Mengubah posisi teks : "text-align: center;"
 - Mengubah ketebalan font : "font-weight: bold;"
 
 Pembelajaran dari JavaScript (main.js)
 - Mengambil data dari HTML : document.getElementById('ISI DENGAN ID DATA YANG INGIN DIAMBIL');
 - Fungsi new pada "const nyd = new Date(newYears);" adalah untuk menambakan data baru
 - Nilai Date(); adalah waktu saat ini
 - Membulatkan angka ke bawah dengan "Math.floor(tcouns/24/3600)"
   Contoh : 2,7 menjadi 2
 - Mengisi nilai (contoh : jumlah hari)dari JavaScript ke HTML dengan : ISI_DENGAN_VARIABEL_(PEMBELAJARAN-1).innerHTML = days
 - Menambahkan interval waktu pada proses fungsi : setInterval(ISI_DENGAN_FUNGSI, 1000);
