/* ============================================================
   ANIMATIONS.JS — MOTION SYSTEM
   ------------------------------------------------------------
   1. Page loader (MN. monogram, slides away when ready)
   2. Scroll reveal via IntersectionObserver ([data-reveal])
   3. Animated counters ([data-counter])
   4. Skill bars ([data-skill-bar])
   5. Hero word-by-word headline + rotating specialty line
   All effects are skipped for prefers-reduced-motion users.
   ============================================================ */

"use strict";

const REDUCED_MOTION = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ── 1. Page loader ──────────────────────────────────────── */

function initLoader() {
  // Show once per browser session so navigation feels instant.
  if (sessionStorage.getItem("loaded") || REDUCED_MOTION) return;
  sessionStorage.setItem("loaded", "1");

  const loader = document.createElement("div");
  loader.className = "loader";
  loader.setAttribute("aria-hidden", "true");
  loader.innerHTML = `<p class="loader__logo">MN<span>.</span></p><div class="loader__line"></div>`;
  document.body.appendChild(loader);

  setTimeout(() => {
    loader.classList.add("is-done");
    setTimeout(() => loader.remove(), 800);
  }, 1400);
}

/* ── 2. Scroll reveal ────────────────────────────────────── */

/**
 * Observe every [data-reveal] element (call again after JS renders
 * new content — portfolio.js calls window.refreshReveals()).
 */
function observeReveals() {
  if (REDUCED_MOTION) {
    document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-revealed"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = el.dataset.revealDelay;
      if (delay) el.style.setProperty("--reveal-delay", `${delay}ms`);
      el.classList.add("is-revealed");
      io.unobserve(el);
    });
  }, { rootMargin: "0px 0px -60px 0px", threshold: 0.1 });

  document.querySelectorAll("[data-reveal]:not(.is-revealed)").forEach((el) => io.observe(el));
}
window.refreshReveals = observeReveals;

/* ── 3. Animated counters ────────────────────────────────── */

/** <span data-counter="800" data-suffix="+">0</span> counts up in view. */
function initCounters() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      io.unobserve(el);
      const target = parseInt(el.dataset.counter, 10) || 0;
      const suffix = el.dataset.suffix || "";
      if (REDUCED_MOTION) { el.textContent = target.toLocaleString() + suffix; return; }

      const duration = 1600;
      const start = performance.now();
      (function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
        el.textContent = Math.round(target * eased).toLocaleString() + suffix;
        if (p < 1) requestAnimationFrame(tick);
      })(start);
    });
  }, { threshold: 0.4 });

  document.querySelectorAll("[data-counter]").forEach((el) => io.observe(el));
}
window.refreshCounters = initCounters;

/* ── 4. Skill bars ───────────────────────────────────────── */

/** <div class="skill__bar" data-skill-bar="92"></div> grows in view. */
function initSkillBars() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.style.width = `${entry.target.dataset.skillBar}%`;
      io.unobserve(entry.target);
    });
  }, { threshold: 0.4 });
  document.querySelectorAll("[data-skill-bar]").forEach((el) => io.observe(el));
}
window.refreshSkillBars = initSkillBars;

/* ── 5. Hero headline + rotator ──────────────────────────── */

/** Wraps [data-words] content in staggered .word spans. */
function initWordReveal() {
  document.querySelectorAll("[data-words]:not([data-words-done])").forEach((el) => {
    el.setAttribute("data-words-done", "1");
    const text = el.textContent.trim();
    el.setAttribute("aria-label", text);
    const base = parseInt(el.dataset.wordsDelay || "0", 10);
    el.innerHTML = text.split(/\s+/).map((w, i) =>
      `<span class="word" aria-hidden="true"><span class="word-inner" style="animation-delay:${base + i * 70}ms">${w}</span></span>`
    ).join(" ");
  });
}

/** Cycles through DATA.site.hero.rotating inside #hero-rotator. */
function initRotator() {
  const holder = document.getElementById("hero-rotator");
  if (!holder || !window.DATA?.site) return;
  const words = DATA.site.hero.rotating;
  let i = 0;

  const swap = () => {
    holder.textContent = words[i % words.length];
    holder.classList.remove("is-swapping");
    void holder.offsetWidth;            // restart CSS animation
    holder.classList.add("is-swapping");
    i++;
  };
  swap();
  if (!REDUCED_MOTION) setInterval(swap, 2600);
}

/* ── Boot ────────────────────────────────────────────────── */

document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initWordReveal();
  initRotator();
  observeReveals();
  initCounters();
  initSkillBars();
});
