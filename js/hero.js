/* =============================================
   HERO VIDEO — hero.js
   Single background video with static text
============================================= */

const video    = document.querySelector('.hero-vid');
const fallback = document.getElementById('heroFallback');

function showFallback() {
  if (fallback) fallback.style.display = 'block';
}

/* Play video on load */
if (video) {
  // playsinline — iOS mobile autoplay fix
  video.setAttribute('playsinline', '');

  video.play().catch(() => {
    showFallback();
  });

  video.addEventListener('error', () => {
    showFallback();
  });

  // Mobile:
  setTimeout(() => {
    if (video.readyState < 2) {
      showFallback();
    }
  }, 3000);
}