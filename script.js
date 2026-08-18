(function initNavToggle() {
  var button = document.querySelector(".hamburger");
  var nav = button && button.closest("nav");
  if (!button || !nav) return;

  button.addEventListener("click", function () {
    nav.classList.toggle("nav-mobile-open");
  });

  nav.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("nav-mobile-open");
    });
  });
})();

/**
 * Scroll-reveal engine.
 *
 * Progressive enhancement: bails out immediately if the browser has no
 * IntersectionObserver, or if the user prefers reduced motion — in both
 * cases `.reveal` elements simply render in their final state (the
 * hidden/animated CSS only exists under `.js-reveal`, see styles.css).
 * Each element reveals once and is then unobserved.
 */
(function initScrollReveal() {
  var supportsIO = "IntersectionObserver" in window;
  var wantsMotion =
    !window.matchMedia ||
    window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

  if (!supportsIO || !wantsMotion) return;

  document.documentElement.classList.add("js-reveal");

  var revealObserver = new IntersectionObserver(onIntersect, {
    threshold: 0.15,
    rootMargin: "0px 0px -60px 0px",
  });

  function onIntersect(entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }

  document.querySelectorAll(".reveal").forEach(function (el) {
    revealObserver.observe(el);
  });
})();
