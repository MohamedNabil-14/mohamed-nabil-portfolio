/* ============================================================
   FILTERS.JS — PROJECT FILTERING
   ------------------------------------------------------------
   Two-level filter controller for the Projects page. Cards
   fade/scale out smoothly (see .filter-item in animations.css).
   ============================================================ */

"use strict";

/* ============================================================
   TWO-LEVEL PROJECT FILTERS (Projects page)
   ------------------------------------------------------------
   Top level:  All / Web / Mobile / ... / Graphic Design
   Sub level:  Design / Logo / Drawing (appears only while the
               "Graphic Design" tab is active, with a slide-in
               animation — no page reload, scroll position kept).
   Cards declare data-categories="A|B|..." — graphic cards use
   "Graphic Design|<kind>".
   ============================================================ */

function initProjectFilters({ topBar, subBar, grid, topCats, subCats }) {
  if (!topBar || !grid) return;

  let top = topCats[0];   // active top-level tab ("All" initially)
  let sub = null;         // active sub-tab (null = all graphic work)

  const pill = (label, active) =>
    `<button type="button" class="filter-btn${active ? " is-active" : ""}" aria-pressed="${active}" data-filter="${esc(label)}">${esc(label)}</button>`;

  topBar.innerHTML = topCats.map((c, i) => pill(c, i === 0)).join("");
  if (subBar) subBar.innerHTML = subCats.map((c) => pill(c, false)).join("");

  const count = document.getElementById(`${topBar.id}-count`);

  /** Apply the current (top, sub) state to every card. */
  function apply() {
    // Art-gallery mode: the Drawing sub-category gets larger previews
    // (two wide columns); everything else stays a strict 3-per-row grid.
    grid.classList.toggle("is-gallery", top === "Graphic Design" && sub === "Drawing");
    let visible = 0;
    grid.querySelectorAll(".filter-item").forEach((item) => {
      const values = (item.getAttribute("data-categories") || "").split("|");
      let show;
      if (top === topCats[0]) show = true;                                   // "All"
      else if (top === "Graphic Design") show = values.includes("Graphic Design") && (!sub || values.includes(sub));
      else show = values.includes(top);
      item.classList.toggle("is-hidden", !show);
      if (show) visible++;
    });
    if (count) count.textContent = `${visible} item${visible === 1 ? "" : "s"}`;

    // Friendly empty state when a category has no items yet
    let empty = grid.querySelector(".filter-empty");
    if (visible === 0) {
      if (!empty) {
        empty = document.createElement("p");
        empty.className = "filter-empty";
        empty.textContent = "New work in this category is on its way " + "\u2014" + " check my Behance in the meantime.";
        grid.appendChild(empty);
      }
    } else if (empty) {
      empty.remove();
    }
  }

  /** Toggle a bar's active pill. */
  function activate(bar, label) {
    bar.querySelectorAll(".filter-btn").forEach((b) => {
      const on = b.dataset.filter === label;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", String(on));
    });
  }

  /** Slide the sub-filter bar in/out. */
  function toggleSubBar(open) {
    if (!subBar) return;
    if (open) {
      subBar.hidden = false;
      requestAnimationFrame(() => subBar.classList.add("is-open"));
    } else {
      subBar.classList.remove("is-open");
      subBar.hidden = true;
      sub = null;
      subBar.querySelectorAll(".filter-btn").forEach((b) => {
        b.classList.remove("is-active");
        b.setAttribute("aria-pressed", "false");
      });
    }
  }

  topBar.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;
    top = btn.dataset.filter;
    activate(topBar, top);
    toggleSubBar(top === "Graphic Design");
    apply();
  });

  if (subBar) {
    subBar.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-filter]");
      if (!btn) return;
      // Clicking the active sub-tab again clears it (back to all graphics)
      sub = (sub === btn.dataset.filter) ? null : btn.dataset.filter;
      activate(subBar, sub || "");
      apply();
    });
  }

  apply();
}
window.initProjectFilters = initProjectFilters;
