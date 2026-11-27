/* ===== Einstein Services — code.js ===== */

// FAQ accordéon
document.querySelectorAll(".faq-q").forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    const isOpen = q.classList.contains("open");
    // Fermer tous les autres
    document.querySelectorAll(".faq-q").forEach((other) => {
      other.classList.remove("open");
      other.nextElementSibling.style.maxHeight = null;
    });
    if (!isOpen) {
      q.classList.add("open");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// Formulaire de contact — prépare un message WhatsApp à envoyer par l'utilisateur
// ⚠️ Remplacez le numéro ci-dessous par le vrai numéro WhatsApp de l'agence
// au format international sans + ni espaces (ex. : 33612345678)
const WHATSAPP_NUMBER = "221787927373";

const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formOk = document.getElementById("formOk");
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const message =
      `utilise du boostrp Einstein Services ! 👋\n\n` +
      `👤 Nom : ${data.get("nom")}\n` +
      `📧 Email : ${data.get("email")}\n` +
      `📱 Téléphone : ${data.get("tel") || "non renseigné"}\n` +
      `🌍 Destination : ${data.get("destination")}\n\n` +
      `🎓 Formation : ${new URLSearchParams(window.location.search).get("formation") || "non précisée"}\n\n` +
      `💬 Message :\n${data.get("message")}`;

    // Ouvre WhatsApp avec le message pré-rempli
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
    );

    if (formOk) {
      formOk.textContent =
        "WhatsApp s'ouvre avec votre message prérempli. Vérifiez-le puis appuyez sur Envoyer pour transmettre votre demande.";
      formOk.hidden = false;
      formOk.setAttribute("role", "status");
    }
  });
}

// Animations d'apparition au scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
document
  .querySelectorAll(".card, .dest, .temoin, .step, .steps, .trust")
  .forEach((el) => observer.observe(el));

// ===== Formulaire d'évaluation de profil =====
// Envoi vers WhatsApp (même mécanique que le formulaire de contact)
const profilForm = document.getElementById("profilForm");
if (profilForm) {
  profilForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = new FormData(profilForm);
    const msg =
      `Bonjour Einstein Services ! 👋\n\n` +
      `📋 Évaluation de profil :\n` +
      `• Niveau : ${d.get("niveau")}\n` +
      `• Moyenne : ${d.get("moyenne")}/20\n` +
      `• Destination : ${d.get("destination")}\n` +
      `• Budget annuel : ${d.get("budget")}\n` +
      `• Domaine : ${d.get("domaine")}\n` +
      `• Téléphone : ${d.get("tel")}\n\n` +
      `Je souhaite échanger avec un conseiller au sujet de mon projet.`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
    document.getElementById("profilOk").hidden = false;
    profilForm.reset();
  });
}

// Ombre de la navbar au scroll
const navbar = document.querySelector(".navbar");
if (navbar) {
  const onScroll = () =>
    navbar.classList.toggle("scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

if (!document.querySelector(".lang-switch")) {
  const fileName = window.location.pathname.split("/").pop() || "index.html";
  const isEnglish = document.documentElement.lang === "en" || fileName.endsWith("-en.html");
  const frenchPage = isEnglish
    ? (fileName === "index-en.html" ? "index.html" : fileName.replace("-en.html", ".html"))
    : fileName;
  const englishPage = isEnglish
    ? fileName
    : (fileName === "index.html" ? "index-en.html" : fileName.replace(".html", "-en.html"));

  const switcher = document.createElement("div");
  switcher.className = "lang-switch";
  switcher.setAttribute("aria-label", isEnglish ? "Language switch" : "Choix de la langue");
  switcher.innerHTML = `
    <a href="${frenchPage}" class="lang-opt${isEnglish ? "" : " active"}" hreflang="fr" title="Français" aria-label="Français">
      <img src="img/flags/fr.svg" alt="Français" width="22" height="16">
    </a>
    <a href="${englishPage}" class="lang-opt${isEnglish ? " active" : ""}" hreflang="en" title="English" aria-label="English">
      <img src="img/flags/gb.svg" alt="English" width="22" height="16">
    </a>`;

  const inner = document.querySelector(".nav-inner, .u-nav-inner, header.site .wrap");
  if (inner) {
    const burger = inner.querySelector("#burger, .u-burger, .burger, .site-menu-toggle");
    if (burger) inner.insertBefore(switcher, burger);
    else inner.appendChild(switcher);
  }
}
