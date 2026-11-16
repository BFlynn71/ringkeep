// The one place the support email is set. Replace it here when the real address is ready,
// and every page updates.
const SUPPORT_EMAIL = "support@ringkeep.example";

document.querySelectorAll("[data-email]").forEach((el) => {
  const subject = el.getAttribute("data-subject");
  el.textContent = SUPPORT_EMAIL;
  el.setAttribute("href", "mailto:" + SUPPORT_EMAIL + (subject ? "?subject=" + encodeURIComponent(subject) : ""));
});

document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });
