/* =============================================
   HERO SLIDESHOW — hero.js
   3 videos auto-play in sequence.
   Each video has its own animated typing text.
============================================= */

// Slide data — texts change karanna oka witharak
const HERO_SLIDES = [
  { text: "Luxury Designs" },
  { text: "Premium Quality" },
  { text: "Unique Interior"  }
];

let currentSlide = 0;
let isAnimating  = false;

const videos   = document.querySelectorAll('.hero-vid');
const heading  = document.getElementById('heroHeading');
const dots     = document.querySelectorAll('.hero-dot');
const fallback = document.getElementById('heroFallback');

/* Typing animation trigger */
function typeText(text) {
  heading.textContent = text;
  heading.classList.remove('hero-typing');
  void heading.offsetWidth;   /* reflow — animation restart karanawa */
  heading.classList.add('hero-typing');
}

/* Switch to a specific slide */
function heroGoTo(index) {
  if (isAnimating) return;
  isAnimating = true;

  /* Hide current video */
  videos[currentSlide].classList.remove('active-vid');
  videos[currentSlide].pause();
  dots[currentSlide].classList.remove('active-dot');

  /* Update index */
  currentSlide = index;

  /* Show new video */
  const vid = videos[currentSlide];
  vid.currentTime = 0;
  vid.play().catch(() => {
    fallback.style.display = 'block';
  });
  vid.classList.add('active-vid');
  dots[currentSlide].classList.add('active-dot');

  /* Type new text */
  typeText(HERO_SLIDES[currentSlide].text);
  setTimeout(() => { isAnimating = false; }, 2600);
}

/* Auto-advance when video ends */
videos.forEach((vid, i) => {
  vid.addEventListener('ended', () => {
    heroGoTo((i + 1) % HERO_SLIDES.length);
  });
  vid.addEventListener('error', () => {
    fallback.style.display = 'block';
  });
});

/* Start first slide */
videos[0].play().catch(() => {
  fallback.style.display = 'block';
});
typeText(HERO_SLIDES[0].text);
setTimeout(() => { isAnimating = false; }, 2600);