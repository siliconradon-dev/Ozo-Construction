/* =============================================
   HERO VIDEO — hero.js
   Single background video with static text
============================================= */

const video   = document.querySelector('.hero-vid');
const fallback = document.getElementById('heroFallback');

/* Play video on load */
if (video) {
  video.play().catch(() => {
    fallback.style.display = 'block';
  });
  
  video.addEventListener('error', () => {
    fallback.style.display = 'block';
  });
}