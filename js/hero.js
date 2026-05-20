/* =============================================
   HERO VIDEO — hero.js
   Autoplay video with mobile fallback
============================================= */

const video    = document.querySelector('.hero-vid');
const fallback = document.getElementById('heroFallback');

function showFallback() {
  if (fallback) fallback.style.display = 'block';
  if (video)    video.style.display    = 'none';
}

if (video) {
  // Try to play
  const playPromise = video.play();

  if (playPromise !== undefined) {
    playPromise.catch(() => {
      showFallback();
    });
  }

  video.addEventListener('error', showFallback);

  // Mobile: if video stalls for too long, show fallback
  setTimeout(() => {
    if (video.readyState < 2) {
      showFallback();
    }
  }, 3000);
} else {
  showFallback();
}