/* ============================================================
   CERTIFICATES.JS — CERTIFICATES (edit like JSON)
   ------------------------------------------------------------
   "image": put certificate scans in assets/images/certificates/
   "credentialUrl": optional verification link ("" = hidden)
   "file": optional original file (PDF) — used by the Download
           button; falls back to the preview image if omitted
   The Download button lets visitors save the image file.
   ============================================================ */

window.DATA = window.DATA || {};

window.DATA.certificates = [
  { "title": "Figma UI UX Design Advanced", "institution": "Udemy — Daniel Walter Scott", "date": "Jul 2026", "image": "assets/images/certificates/figma-uiux-advanced-udemy.jpg", "file": "assets/certificates/Figma-UI-UX-Design-Advanced-Udemy.pdf", "note": "9 hours" },
  // "credentialUrl": "https://ude.my/UC-3f0269c4-d163-41cd-8230-4e37287736a5"
  { "title": "Graphic Design Diploma — 50 Hours", "institution": "Grand Notion", "date": "2026", "image": "assets/images/certificates/graphic-design-grand-notion.jpg", "note": "Photoshop · Illustrator · InDesign", "credentialUrl": "" },
  { "title": "User Experience Design Track", "institution": "Google DSC — EELU Ain Shams University", "date": "May 2024", "image": "assets/images/certificates/ux-track-google-dsc.jpg", "note": "Top Graduate 🎓", "credentialUrl": "" },
  { "title": "UI/UX Design Internship — July Batch", "institution": "UNEEQ Interns", "date": "Jul 2024", "image": "assets/images/certificates/uiux-internship-uneeq.jpg", "note": "", "credentialUrl": "" },
  { "title": "UX/UI Course — 50 Hours", "institution": "KIMIT Academy", "date": "Dec 2023", "image": "assets/images/certificates/uxui-kimit.jpg", "note": "", "credentialUrl": "" },
  { "title": "Back-End Web Development Diploma", "institution": "SEF — Software Engineering Future", "date": "Jul 2023", "image": "assets/images/certificates/backend-sef-diploma.jpg", "note": "Score 96.98%", "credentialUrl": "" },
  { "title": "Back-End Web Development Course", "institution": "SEF — Software Engineering Future", "date": "Aug 2023", "image": "assets/images/certificates/backend-sef-course.jpg", "note": "Score 92%", "credentialUrl": "" },
  { "title": "Full-Stack Development Diploma", "institution": "Route IT Training Center", "date": "Jun 2021", "image": "assets/images/certificates/fullstack-route.jpg", "note": "", "credentialUrl": "" },
  { "title": "ISO 9001 / 14001 / 45001 — Certificate of Appreciation", "institution": "Hassan Allam Roads & Bridges", "date": "2025", "image": "assets/images/certificates/iso-hassan-allam.jpg", "note": "", "credentialUrl": "" }
];
