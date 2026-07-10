/* ============================================================
   GALLERY.JS - FULLSCREEN LIGHTBOX VIEWER
   ------------------------------------------------------------
   One shared lightbox for certificates, graphic design and
   case-study images.

   How it works:
   1. portfolio.js calls registerLightbox("setName", items)
      where each item = { src, title, subtitle?, href?, download?, gallery? }
      ("gallery" = extra images appended as their own slides).
   2. Any element with data-lightbox="setName" data-index="N"
      opens that slide fullscreen on click.
   Keyboard: Esc closes, Left/Right arrows navigate. Focus returns
   to the element that opened it (WCAG friendly).
   ============================================================ */

"use strict";

const LIGHTBOX_SETS = {};   // { name: [ {src,title,...}, ... ] }
let lbState = { set: null, index: 0, opener: null };

/** Register (or replace) a named set of lightbox slides. */
function registerLightbox(name, items) {
  // Primary slides keep their original indexes (data-index maps to
  // them); extra "gallery" images are appended AFTER all primaries
  // so adding gallery images never shifts existing indexes.
  const flat = [...items];
  items.forEach((item) => {
    (item.gallery || []).forEach((src, i) =>
      flat.push({ ...item, src, subtitle: item.title + " - image " + (i + 2), gallery: [] })
    );
  });
  LIGHTBOX_SETS[name] = flat;
}
window.registerLightbox = registerLightbox;

/* -- Build the lightbox DOM once ---------------------------- */

function buildLightbox() {
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.id = "lightbox";
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-modal", "true");
  lb.setAttribute("aria-label", "Fullscreen image viewer");
  lb.innerHTML = `
    <div class="lightbox__bar">
      <div><strong id="lb-title"></strong><small id="lb-subtitle"></small></div>
      <div class="lightbox__actions">
        <a id="lb-behance" class="btn btn--behance" style="padding:0.5rem 1rem;font-size:var(--text-xs)" target="_blank" rel="noopener noreferrer" data-outbound="behance" hidden>${ICONS.behance} Behance</a>
        <a id="lb-download" class="btn btn--outline" style="padding:0.5rem 1rem;font-size:var(--text-xs);color:#fff;border-color:rgba(255,255,255,0.3)" download hidden>${ICONS.download} Download</a>
        <button id="lb-close" class="icon-btn" style="color:#fff;border-color:rgba(255,255,255,0.3)" aria-label="Close fullscreen viewer">${ICONS.close}</button>
      </div>
    </div>
    <div class="lightbox__stage"><img id="lb-image" src="" alt=""></div>
    <button class="lightbox__nav lightbox__nav--prev" id="lb-prev" aria-label="Previous image">&lsaquo;</button>
    <button class="lightbox__nav lightbox__nav--next" id="lb-next" aria-label="Next image">&rsaquo;</button>`;
  document.body.appendChild(lb);

  // Wire controls
  lb.addEventListener("click", (e) => { if (e.target === lb || e.target.closest("#lb-close")) closeLightbox(); });
  document.getElementById("lb-prev").addEventListener("click", (e) => { e.stopPropagation(); stepLightbox(-1); });
  document.getElementById("lb-next").addEventListener("click", (e) => { e.stopPropagation(); stepLightbox(1); });

  addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
  });
}

/* -- Open / render / close ---------------------------------- */

function openLightbox(set, index, opener) {
  const items = LIGHTBOX_SETS[set];
  if (!items || !items[index]) return;
  lbState = { set, index, opener };
  renderLightbox();
  document.getElementById("lightbox").classList.add("is-open");
  document.body.style.overflow = "hidden";
  document.getElementById("lb-close").focus();
}

function renderLightbox() {
  const item = LIGHTBOX_SETS[lbState.set][lbState.index];
  const img = document.getElementById("lb-image");
  // If the hi-res rendition is unavailable, fall back to the original
  img.onerror = () => { img.onerror = null; if (item.srcFallback) img.src = item.srcFallback; };
  img.src = item.src;
  img.alt = item.title;
  document.getElementById("lb-title").textContent = item.title;
  document.getElementById("lb-subtitle").textContent = item.subtitle || "";

  const be = document.getElementById("lb-behance");
  be.hidden = !item.href;
  if (item.href) be.href = item.href;

  const dl = document.getElementById("lb-download");
  dl.hidden = !item.download;
  if (item.download) dl.href = item.download;
}

function stepLightbox(dir) {
  const items = LIGHTBOX_SETS[lbState.set];
  lbState.index = (lbState.index + dir + items.length) % items.length;
  renderLightbox();
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("is-open");
  document.body.style.overflow = "";
  if (lbState.opener) lbState.opener.focus();   // return focus (a11y)
}

/* -- Delegated opener: any [data-lightbox] element ----------- */

document.addEventListener("DOMContentLoaded", () => {
  buildLightbox();
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-lightbox]");
    if (!trigger) return;
    e.preventDefault();
    openLightbox(trigger.dataset.lightbox, parseInt(trigger.dataset.index || "0", 10), trigger);
  });
});

/* End of gallery.js */
