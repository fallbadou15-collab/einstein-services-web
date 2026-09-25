/* ===== Einstein Services — code.js ===== */

// Menu mobile
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
burger.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks
  .querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open")),
  );

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

// Formulaire de contact — envoi réel via WhatsApp (pré-rempli)
// ⚠️ Remplacez le numéro ci-dessous par le vrai numéro WhatsApp de l'agence
// au format international sans + ni espaces (ex. : 33612345678)
const WHATSAPP_NUMBER = "221783876262";

const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const message =
      `Bonjour Einstein Services ! 👋\n\n` +
      `👤 Nom : ${data.get("nom")}\n` +
      `📧 Email : ${data.get("email")}\n` +
      `📱 Téléphone : ${data.get("tel") || "non renseigné"}\n` +
      `🌍 Destination : ${data.get("destination")}\n\n` +
      `💬 Message :\n${data.get("message")}`;

    // Ouvre WhatsApp avec le message pré-rempli
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
    );

    document.getElementById("formOk").hidden = false;
    form.reset();
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
      `Je souhaite recevoir une analyse gratuite de mon projet.`;
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
