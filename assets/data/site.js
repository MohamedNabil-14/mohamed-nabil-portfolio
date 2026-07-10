/* ============================================================
   SITE.JS — GLOBAL SITE SETTINGS (edit like JSON)
   ------------------------------------------------------------
   Everything between the outer { } is plain JSON.
   Edit values, save, refresh the browser — done.
   NOTE: data lives in .js files (not .json) so the site works
   when opened directly from index.html (file://), where
   browsers block fetch() of .json files.
   ============================================================ */

window.DATA = window.DATA || {};

window.DATA.site = {
  "name": "Mohamed Nabil",
  "fullName": "Mohamed Nabil Ahmed",
  "role": "UI/UX Designer",
  "tagline": "I design exceptional Web, Mobile, SharePoint and Microsoft Power Apps experiences.",
  "location": "Cairo, Egypt · Full Time / Part Time / Freelancer",
  "email": "m.nabil9418@gmail.com",
  "phone": "+20 103 270 1188",
  "whatsapp": "https://wa.me/201032701188",
  "cvUrl": "assets/files/Mohamed_Nabil_UI_UX_Designer_CV.pdf",
  "calendly": "https://calendly.com/",
  "url": "https://mohamednabil.design",
  "profileImage": "https://pps.services.adobe.com/api/profile/C32E60815E0F4A310A495E93@AdobeID/image/e45a7dfe-59f1-49fc-abd1-07abdde5c0bc/276",

  "social": {
    "behance": "https://www.behance.net/mohamednabil94",
    "linkedin": "https://www.linkedin.com/in/mnabil14/",
    "dribbble": "https://dribbble.com/Monabil14",
    "instagram": "https://instagram.com/mohamednabil_14",
    "facebook": "https://facebook.com/Mohamednabilv"
  },

  "behanceStats": {
    "projects": 31,
    "appreciations": 116,
    "followers": 117,
    "projectViews": 1657,
    "memberSince": "March 2020",
    "fields": ["UI/UX Design", "Web & Mobile Design", "Illustration", "Graphic Design"]
  },

  "hero": {
    "eyebrow": "Available — Full Time · Part Time · Freelancer",
    "headline": ["I design", "exceptional digital", "experiences."],
    "rotating": ["Web applications", "Mobile applications", "SharePoint solutions", "Microsoft Power Apps", "Dashboards & CRM systems", "Design systems"],
    "intro": "I design exceptional Web, Mobile, SharePoint and Microsoft Power Apps experiences with a strong focus on usability, accessibility and enterprise solutions — currently shaping HR, CRM and administration platforms at Global Brands Group."
  },

  "stats": [
    { "value": 30, "suffix": "+", "label": "Projects shipped" },
    { "value": 12, "suffix": "+", "label": "Enterprise platforms designed" },
    { "value": 10, "suffix": "+", "label": "Power Apps & SharePoint platforms" },
    { "value": 6, "suffix": "+", "label": "Years in enterprise environments" }
  ],

  "domains": ["Web Application Design", "Mobile App Design", "SharePoint Design", "Microsoft Power Apps", "Dashboard Design", "Enterprise Systems", "CRM Systems", "Design Systems", "UX Design", "UI Design", "UX Research", "Graphic Design"],

  "process": [
    { "step": "01", "title": "Discover",      "text": "Stakeholder workshops, business-goal alignment, and understanding the domain before touching pixels." },
    { "step": "02", "title": "Research",      "text": "Interviews, surveys, usability tests and competitive analysis — evidence over opinion." },
    { "step": "03", "title": "Define",        "text": "Personas, journey maps and problem statements that everyone can rally behind." },
    { "step": "04", "title": "Ideate",        "text": "Sketching, flows and crazy-8s — quantity first, then ruthless prioritization." },
    { "step": "05", "title": "Wireframe",     "text": "Low-fidelity structure and information architecture, validated early and cheaply." },
    { "step": "06", "title": "Prototype",     "text": "Interactive prototypes that make ideas testable before they're expensive." },
    { "step": "07", "title": "Validate",      "text": "Usability testing and iteration until the flow disappears and the task remains." },
    { "step": "08", "title": "Design System", "text": "Tokens, components and documentation so the tenth screen ships as fast as the first." },
    { "step": "09", "title": "Handoff",       "text": "Specs, states and edge cases engineers actually need — then staying in the room." },
    { "step": "10", "title": "Measure",       "text": "UX metrics and analytics to prove impact and feed the next cycle." }
  ],

  "_testimonials_howto": "AUTHENTIC CONTENT ONLY: LinkedIn blocks automated reading, so paste the real post text into 'quote' below (plus the author's name/role/company and optionally an avatar image path in assets/images/profile/). A card appears automatically once its 'quote' is filled; the section stays hidden while all quotes are empty.",
  "testimonials": [
    { "quote": "I'd like to express my sincere gratitude…", "name": "Mohamed Nabil", "role": "Appreciation post", "company": "LinkedIn", "avatar": "assets/images/profile/me.jpeg", "url": "https://www.linkedin.com/posts/mnabil14_id-like-to-express-my-sincere-gratitude-ugcPost-7397283873350553600-T2L0/" },
    { "quote": "", "name": "", "role": "", "company": "", "avatar": "", "url": "https://www.linkedin.com/posts/mnabil14_uiux-webdesign-productdesign-share-7434604586243579904-sJ9k/" },
    { "quote": "Thrilled to share that I've officially completed…", "name": "Mohamed Nabil", "role": "Achievement", "company": "LinkedIn", "avatar": "assets/images/profile/me.jpeg", "url": "https://www.linkedin.com/posts/mnabil14_thrilled-to-share-that-ive-officially-completed-ugcPost-7397282952641941504-2CKx/" }
  ]
};
