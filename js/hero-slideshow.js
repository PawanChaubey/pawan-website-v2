
/* =========================================================
   HOMEPAGE SLIDESHOW
   Change background every 3 seconds
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const slideshow = document.querySelector(
    ".hero-slideshow .hero-slides"
  );

  if (!slideshow) {
    return;
  }

  const slides = Array.from(
    slideshow.querySelectorAll(".hero-slide")
  );

  if (slides.length < 2) {
    return;
  }

  // Start from the currently active slide.
  let currentIndex = slides.findIndex(function (slide) {
    return slide.classList.contains("is-active");
  });

  if (currentIndex < 0) {
    currentIndex = 0;
    slides[0].classList.add("is-active");
  }

  // Respect the visitor's reduced-motion preference.
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion) {
    return;
  }

  // Rotate every 3 seconds.
  window.setInterval(function () {

    slides[currentIndex].classList.remove("is-active");

    currentIndex = (currentIndex + 1) % slides.length;

    slides[currentIndex].classList.add("is-active");

  }, 3000);

});
