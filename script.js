const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');

// Fungsi untuk membuka Lightbox
document.querySelectorAll('.gallery img, .profile-pic, .round-logo').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
  });
});

// Fungsi untuk menutup Lightbox
closeBtn.addEventListener('click', () => lightbox.classList.remove('active'));

// Menutup Lightbox jika area di luar gambar diklik
lightbox.addEventListener('click', (e) => { 
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
});

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  
  const characters = [
    'ع', 'ق', 'ل',             // Arab
    'ꦬ', 'ꦏ', 'ꦧ',             // Jawa
    '爱', '和', '智',             // Mandarin
    'я', 'Ф', 'Б',             // Rusia
    'L', 'V', 'X',             // Latin
    '♪', '♫', '∮', '♭', '♯'    // Musik
  ];
  
  snowflake.innerText = characters[Math.floor(Math.random() * characters.length)];
  
  // Ukuran diperkecil: acak antara 10px sampai 18px
  const size = Math.random() * 8 + 10 + 'px';
  snowflake.style.fontSize = size;
  
  // Posisi horizontal acak
  snowflake.style.left = Math.random() * 100 + 'vw';
  
  // Durasi jatuh (tetap dibuat lambat agar elegan)
  const duration = Math.random() * 5 + 6 + 's';
  snowflake.style.animation = `fall ${duration} linear forwards`;
  
  // Variasi transparansi agar ada efek jauh-dekat
  snowflake.style.opacity = Math.random() * 0.4 + 0.3;

  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, parseFloat(duration) * 1000);
}

// Menjalankan setiap 150ms agar frekuensinya pas
setInterval(createSnowflake, 150);