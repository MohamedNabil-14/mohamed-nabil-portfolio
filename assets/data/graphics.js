/* ============================================================
   GRAPHICS.JS — GRAPHIC DESIGN WORK (edit like JSON)
   ------------------------------------------------------------
   Shown INSIDE the Projects page under the "Graphic Design"
   filter, with three sub-categories powered by "kind":
     • "Printing"                 (print designs, posters, t-shirts,
                                   character prints, mockups)
     • "Drawing"                  (artwork — larger gallery layout)
     • "Social Media & Branding"  (social posts, branding, campaigns)

   HOW TO UPDATE IN MINUTES:
   • Replace a cover: overwrite the image file in
     assets/images/graphics/ (keep the same file name) — done.
   • Add a project: copy any { ... } block, edit title/kind/
     description/cover/behanceUrl. "behanceUrl": "" hides the
     Behance button until the project is published.
   • Delete / re-categorize: remove the block or change "kind".
   ============================================================ */

window.DATA = window.DATA || {};

window.DATA.graphics = [
  /* ── Printing ─────────────────────────────────────────── */
  { "title": "Tooth Project", "kind": "Printing", "description": "Brand and print design for a dental clinic.", "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/08d557159133573.Y3JvcCwxNDAwLDEwOTUsMCwzNDM.png", "gallery": [], "behanceUrl": "https://www.behance.net/gallery/159133573/Tooth-project" },
  { "title": "Edit Designs — Brush Store", "kind": "Printing", "description": "Design edits and print visuals for the Brush Store brand.", "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/1c621b103935289.Y3JvcCwzMDAwLDIzNDYsMCwyOQ.png", "gallery": [], "behanceUrl": "https://www.behance.net/gallery/103935289/Edit-designs-for-brush-store" },
  // { "title": "Creative T-shirt — Brush Store", "kind": "Printing", "description": "Creative t-shirt designs with realistic apparel mockups.", "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/a658be102649467.Y3JvcCwxMjgwLDEwMDEsMCwxMzk.png", "gallery": [], "behanceUrl": "https://www.behance.net/gallery/102649467/creative-t-shirt-(brush-store)" },
  { "title": "Cukur", "kind": "Printing", "description": "Fan-art poster for the series Cukur — print design.", "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/d92155121921567.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.png", "gallery": [], "behanceUrl": "https://www.behance.net/gallery/121921567/cukur" },
  { "title": "California", "kind": "Printing", "description": "Typographic travel poster — print-ready design.", "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/478f25121923685.Y3JvcCwzMTU2LDI0NjksNDIxLDUxNQ.png", "gallery": [], "behanceUrl": "https://www.behance.net/gallery/121923685/california" },
  { "title": "Donald Duck", "kind": "Printing", "description": "Classic character print design — Donald Duck.", "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/0e3bd3121924027.Y3JvcCwxMzE3LDEwMzAsMzY1LDE5OA.jpg", "gallery": [], "behanceUrl": "https://www.behance.net/gallery/121924027/donald-duck" },
  { "title": "Naruto", "kind": "Printing", "description": "Anime character print design — Naruto.", "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/ecc933121924619.Y3JvcCw1NTgsNDM2LDE3NCw2.png", "gallery": [], "behanceUrl": "https://www.behance.net/gallery/121924619/naruto" },
  { "title": "Rick", "kind": "Printing", "description": "Character print design — Rick.", "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/609e3a121924981.Y3JvcCwyNTU2LDIwMDAsMjIxLDA.png", "gallery": [], "behanceUrl": "https://www.behance.net/gallery/121924981/Rick" },
  { "title": "Shmshon", "kind": "Printing", "description": "Character print design — Shmshon.", "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/f73935121925391.Y3JvcCwyNTU2LDIwMDAsMjIxLDA.png", "gallery": [], "behanceUrl": "https://www.behance.net/gallery/121925391/shmshon" },
  { "title": "Mickey Mouse", "kind": "Printing", "description": "Classic character print design — Mickey Mouse.", "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/76bec4121925591.Y3JvcCwzOTk5LDMxMjgsMCwxODg.jpg", "gallery": [], "behanceUrl": "https://www.behance.net/gallery/121925591/mickey-mouse" },
  { "title": "Pikachu", "kind": "Printing", "description": "Character print design — Pikachu.", "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/86e279127659217.6283cb5ab6a12.png", "gallery": [], "behanceUrl": "https://www.behance.net/gallery/127659217/pikachu" },
  { "title": "Batman", "kind": "Printing", "description": "Character print design — Batman.", "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/883112143883849.6283cc6596bff.png", "gallery": [], "behanceUrl": "https://www.behance.net/gallery/143883849/batman" },
  { "title": "Evil", "kind": "Printing", "description": "Dark character concept — print design.", "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/953a35143885265.6283cbe8bfc29.png", "gallery": [], "behanceUrl": "https://www.behance.net/gallery/143885265/evil" },
  { "title": "Boo", "kind": "Printing", "description": "Character print design — Boo.", "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/ffe1aa143884383.6283cbc14d1a8.png", "gallery": [], "behanceUrl": "https://www.behance.net/gallery/143884383/Boo" },
  { "title": "Papai", "kind": "Printing", "description": "Character print design — Papai.", "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/902b03143884827.6283cbd4b8acb.png", "gallery": [], "behanceUrl": "https://www.behance.net/gallery/143884827/papai" },
  { "title": "Spongebob", "kind": "Printing", "description": "Character print design — Spongebob.", "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/28f82e143885493.6283cc2084e19.png", "gallery": [], "behanceUrl": "https://www.behance.net/gallery/143885493/spongbob" },
  { "title": "Cartoon Faces", "kind": "Printing", "description": "Expressive cartoon face series — print design set.", "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/a20c5f143885815.6283ccacb31ef.png", "gallery": [], "behanceUrl": "https://www.behance.net/gallery/143885815/cartoon-faces" },

  /* ── Drawing — artwork, shown in a larger gallery layout ── */
  { "title": "Shikabala", "kind": "Drawing", "description": "Hand-drawn sports portrait — Shikabala.", "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/b08abe121921185.Y3JvcCwyNTUwLDE5OTQsMCwxMTk.png", "gallery": [], "behanceUrl": "https://www.behance.net/gallery/121921185/Shikabala" },
  { "title": "Avatar", "kind": "Drawing", "description": "Digital artwork — Avatar.", "cover": "https://mir-s3-cdn-cf.behance.net/projects/808_webp/0b068f252182865.Y3JvcCwxMDIyLDgwMCwxODcsMA.png", "gallery": [], "behanceUrl": "https://www.behance.net/gallery/252182865/Avatar" },

  /* ── Social Media & Branding — the branding showcase ──────
     Overwrite each placeholder image in assets/images/graphics/
     and add the Behance link when the project is published.  */
  { "title": "Fish Port", "kind": "Social Media & Branding", "description": "Brand identity and promotional design — Fish Port.", "cover": "https://mir-s3-cdn-cf.behance.net/projects/max_808/665dcd252183171.Y3JvcCwxMDc5LDg0NCwyMTEsMA.jpg", "gallery": [], "behanceUrl": "https://www.behance.net/gallery/252183171/Fish-Port" },
  { "title": "V7", "kind": "Social Media & Branding", "description": "Brand identity and social visuals — V7.", "cover": "https://mir-s3-cdn-cf.behance.net/projects/max_808/548f09252180167.Y3JvcCwzMTY2LDI0NzcsMTE3LDQ2Mg.png", "gallery": [], "behanceUrl": "https://www.behance.net/gallery/252180167/V7" },
  { "title": "Sprite", "kind": "Social Media & Branding", "description": "Creative social media concept — Sprite.", "cover": "https://mir-s3-cdn-cf.behance.net/projects/808/51632c252182445.Y3JvcCwxMzU5MCwxMDYzMCwzMDIsMA.png", "gallery": [], "behanceUrl": "https://www.behance.net/gallery/252182445/Sprite" },
  { "title": "Harvest Nuts", "kind": "Social Media & Branding", "description": "Packaging-led branding and social campaign — Harvest Nuts.", "cover": "https://mir-s3-cdn-cf.behance.net/projects/max_808/091219252180415.Y3JvcCw3MjQ3LDU2NjksNjI3LDA.png", "gallery": [], "behanceUrl": "https://www.behance.net/gallery/252180415/Harvest-nuts" },
  { "title": "Etisalat", "kind": "Social Media & Branding", "description": "Social media campaign visuals — Etisalat.", "cover": "https://mir-s3-cdn-cf.behance.net/projects/max_808/2b0976252180733.Y3JvcCw3MjQ3LDU2NjksMTAwNCww.png", "gallery": [], "behanceUrl": "https://www.behance.net/gallery/252180733/Etisalat" },
  { "title": "Social Media Poster", "kind": "Social Media & Branding", "description": "Promotional poster series for social platforms.", "cover": "https://mir-s3-cdn-cf.behance.net/projects/808/ebba39252180935.Y3JvcCw0NDgwLDM1MDQsMCw5OQ.png", "gallery": [], "behanceUrl": "https://www.behance.net/gallery/252180935/Social-media-Poster" },
  { "title": "Moon", "kind": "Social Media & Branding", "description": "Creative visual campaign — Moon.", "cover": "https://mir-s3-cdn-cf.behance.net/projects/max_808/3c6c79252182563.Y3JvcCwxMzU5MCwxMDYzMCwzMDIsMA.png", "gallery": [], "behanceUrl": "https://www.behance.net/gallery/252182563/Moon" },
  { "title": "Book Cover", "kind": "Social Media & Branding", "description": "Editorial book cover design.", "cover": "https://mir-s3-cdn-cf.behance.net/projects/max_808/9c6954252182719.Y3JvcCwzODM1LDMwMDAsODUsMA.png", "gallery": [], "behanceUrl": "https://www.behance.net/gallery/252182719/Book-Cover" },

  /* Parked (not in any current category) — restore by moving back
     into the array and giving it a "kind":
  { "title": "Tech Tube", "kind": "Printing", "description": "Channel identity for a tech media platform.", "cover": "https://mir-s3-cdn-cf.behance.net/projects/404/6e8fac140806603.Y3JvcCwzNDQxLDI2OTIsNTEsMA.png", "gallery": [], "behanceUrl": "https://www.behance.net/gallery/140806603/Tech-tube" },
  */
];
