/* ============================================================
   MAIN.JS — SITE SHELL
   ------------------------------------------------------------
   Responsibilities:
   1. Tiny DOM helpers used by every script
   2. Inject header + footer (single source — no duplicated HTML)
   3. Theme toggle (dark default, saved to localStorage)
   4. Mobile menu
   5. Custom cursor (desktop, motion-safe only)
   6. Scroll progress bar
   7. Outbound Behance click tracking hook
   All content comes from window.DATA (assets/data/*.js).
   ============================================================ */

"use strict";

/* ── 1. Helpers ──────────────────────────────────────────── */

/** Shorthand query selectors. */
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/** Escape a string for safe insertion into HTML. */
function esc(str) {
  return String(str ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[c]);
}

/** Inline SVG icons (kept here so there are no icon-font deps). */
const ICONS = {
  behance: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8.84 10.84c.8-.38 1.4-1.2 1.4-2.32 0-2.13-1.6-3.02-3.6-3.02H1v12.9h5.85c2.19 0 4.15-1.05 4.15-3.5 0-1.55-.75-2.63-2.16-3.06ZM3.8 7.7h2.5c.94 0 1.63.42 1.63 1.36 0 .98-.68 1.4-1.66 1.4H3.8V7.7Zm2.77 8.5H3.8v-3.3h2.83c1.11 0 1.86.55 1.86 1.68 0 1.13-.83 1.62-1.92 1.62ZM15.5 6.2h5.4v1.44h-5.4V6.2Zm7.5 8.06c0-2.9-1.7-5.2-4.75-5.2-2.97 0-4.99 2.2-4.99 5.09 0 2.99 1.92 5.05 5.02 5.05 2.35 0 3.87-1.05 4.6-3.06h-2.44c-.27.85-1.11 1.3-2.08 1.3-1.44 0-2.29-.78-2.42-2.35H23v-.83Zm-7.05-.94c.2-1.3 1.02-2.1 2.3-2.1 1.35 0 2.11.83 2.2 2.1h-4.5Z"/></svg>',
  arrow:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"/></svg>',
  sun:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>',
  menu:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>',
  expand:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>',
  up:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
  linkedin:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z"/></svg>'
};

/** Behance covers: upgrade the small 404px thumbnails to the 808px
    renditions for crisp Retina display. Cards add an onerror fallback
    to the original URL, so nothing can ever break. */
function hiRes(url) {
  return String(url || "").replace("/projects/404/", "/projects/808/");
}

/* Navigation model — edit here to change menus site-wide. */
const NAV_LINKS = [
  { href: "index.html",          label: "Home" },
  { href: "about.html",          label: "About" },
  { href: "experience.html",     label: "Experience" },
  { href: "projects.html",       label: "Projects" },
  { href: "certificates.html",   label: "Certificates" },
  { href: "contact.html",        label: "Contact" }
];

/** Current page file name, e.g. "projects.html". */
function currentPage() {
  const file = location.pathname.split("/").pop();
  return file === "" ? "index.html" : file;
}

/* ── 2. Header & footer injection ────────────────────────── */

function buildHeader() {
  const page = currentPage();
  const links = NAV_LINKS.map((l) =>
    `<a class="nav__link${l.href === page ? " is-active" : ""}" href="${l.href}"${l.href === page ? ' aria-current="page"' : ""}>${l.label}</a>`
  ).join("");
  const mobileLinks = NAV_LINKS.map((l) =>
    `<a href="${l.href}"${l.href === page ? ' class="is-active" aria-current="page"' : ""}>${l.label}</a>`
  ).join("");

  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <nav class="nav" aria-label="Main navigation">
      <a class="nav__logo" href="index.html" aria-label="${esc(DATA.site.name)} — home">MN<span>.</span></a>
      <div class="nav__links">${links}</div>
      <div class="nav__actions">
        <button class="icon-btn" id="theme-toggle" aria-label="Toggle dark / light mode">${ICONS.moon}</button>
        <a class="btn btn--primary nav__cta" href="contact.html" style="padding:0.55rem 1.2rem">Let's talk</a>
        <button class="icon-btn nav__burger" id="menu-toggle" aria-label="Open menu" aria-expanded="false">${ICONS.menu}</button>
      </div>
    </nav>`;
  document.body.prepend(header);

  const mobile = document.createElement("div");
  mobile.className = "mobile-menu";
  mobile.id = "mobile-menu";
  mobile.innerHTML = mobileLinks;
  document.body.appendChild(mobile);

  // Shadow under nav after scrolling
  const nav = $(".nav");
  addEventListener("scroll", () => nav.classList.toggle("is-scrolled", scrollY > 24), { passive: true });
}

function buildFooter() {
  const s = DATA.site;
  const year = new Date().getFullYear();
  const exploreLinks = NAV_LINKS.slice(1).map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join("");

  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <!-- Oversized call-to-action marquee -->
    <a href="contact.html" aria-label="Go to contact page">
      <div class="marquee marquee--big" aria-hidden="true">
        <div class="marquee__track">
          ${"<span>Let's build something great</span><span>Ready to Collaborate</span>".repeat(3)}
        </div>
      </div>
    </a>
    <div class="container footer-grid">
      <div>
        <p class="nav__logo">MN<span>.</span></p>
        <p class="muted" style="max-width:18rem;font-size:var(--text-sm);margin-top:0.8rem">
          ${esc(s.role)} — Design exceptional Web, Mobile, SharePoint and Microsoft Power Apps experiences with a strong focus on usability, accessibility and enterprise solutions.
        </p>
      </div>
      <nav aria-label="Footer">
        <h4>Explore</h4>
        <ul>${exploreLinks}</ul>
      </nav>
      <div>
        <h4>Elsewhere</h4>
        <ul>
          <li><a href="${s.social.behance}" target="_blank" rel="noopener noreferrer" data-outbound="behance">Behance ↗</a></li>
          <li><a href="${s.social.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li>
          <li><a href="${s.social.dribbble}" target="_blank" rel="noopener noreferrer">Dribbble ↗</a></li>
          <li><a href="${s.social.instagram}" target="_blank" rel="noopener noreferrer">Instagram ↗</a></li>
          <li><a href="mailto:${s.email}">${esc(s.email)}</a></li>
        </ul>
      </div>
    </div>
    <div class="container footer-bottom">
      <p>© ${year} ${esc(s.fullName)}.</p>
      <button class="icon-btn to-top" aria-label="Back to top">${ICONS.up}</button>
    </div>`;
  document.body.appendChild(footer);

  $(".to-top", footer).addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
}

/* ── 3. Theme toggle ─────────────────────────────────────── */

function initTheme() {
  // Dark is default; restore saved preference.
  const saved = localStorage.getItem("theme");
  if (saved === "light") document.documentElement.dataset.theme = "light";
  syncThemeIcon();

  $("#theme-toggle").addEventListener("click", () => {
    const light = document.documentElement.dataset.theme === "light";
    if (light) delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = "light";
    localStorage.setItem("theme", light ? "dark" : "light");
    syncThemeIcon();
  });
}

function syncThemeIcon() {
  const light = document.documentElement.dataset.theme === "light";
  $("#theme-toggle").innerHTML = light ? ICONS.moon : ICONS.sun;
}

/* ── 4. Mobile menu ──────────────────────────────────────── */

function initMobileMenu() {
  const btn = $("#menu-toggle");
  const menu = $("#mobile-menu");
  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    btn.innerHTML = open ? ICONS.close : ICONS.menu;
  });
  // Close on Escape for keyboard users
  addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) btn.click();
  });
}

/* ── 5. Custom cursor (fine pointers, motion-safe only) ──── */

function initCursor() {
  const fine = matchMedia("(pointer: fine)").matches;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!fine || reduced) return;

  document.body.classList.add("has-cursor");
  const dot = document.createElement("div");
  const ring = document.createElement("div");
  dot.className = "cursor-dot";
  ring.className = "cursor-ring";
  dot.setAttribute("aria-hidden", "true");
  ring.setAttribute("aria-hidden", "true");
  document.body.append(dot, ring);

  let x = -100, y = -100, rx = -100, ry = -100;

  addEventListener("pointermove", (e) => {
    x = e.clientX; y = e.clientY;
    dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    const hover = e.target.closest("a, button, input, textarea, select, [data-cursor='hover']");
    ring.classList.toggle("is-hover", !!hover);
  }, { passive: true });

  // The ring lags behind the dot for a premium trailing feel.
  (function follow() {
    rx += (x - rx) * 0.16;
    ry += (y - ry) * 0.16;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(follow);
  })();
}

/* ── 6. Scroll progress bar ──────────────────────────────── */

function initScrollProgress() {
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  bar.setAttribute("aria-hidden", "true");
  document.body.appendChild(bar);
  addEventListener("scroll", () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  }, { passive: true });
}

/* ── 7. Outbound Behance click tracking ──────────────────── */

function initOutboundTracking() {
  // Hook your analytics here (e.g. Plausible, GA4). Console for now.
  document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-outbound='behance']");
    if (link) console.info("[analytics] outbound behance click:", link.href);
  });
}

/* ── Boot ────────────────────────────────────────────────── */

/** Point every CV button at the current CV (single source: site.js). */
function initCvLinks() {
  document.querySelectorAll("[data-cv]").forEach((a) => {
    a.href = DATA.site.cvUrl;
    a.setAttribute("download", "");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  buildHeader();
  initCvLinks();
  buildFooter();
  initTheme();
  initMobileMenu();
  initCursor();
  initScrollProgress();
  initOutboundTracking();
});
