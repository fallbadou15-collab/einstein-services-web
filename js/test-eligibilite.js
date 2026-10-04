/* ===== Questionnaire indicatif Campus France ===== */
const eligForm = document.getElementById("eligForm");
const resultat = document.getElementById("resultat");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");
const resultCta = document.getElementById("resultCta");

const eligibiliteFields = [
  ["niveau", "Niveau d'études et moyennes"],
  ["langue", "Niveau de français"],
  ["coherence", "Cohérence du parcours"],
  ["financement", "Capacité de financement"],
  ["calendrier", "Calendrier"],
];

if (eligForm) {
  eligForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!eligForm.reportValidity()) return;

    const data = new FormData(eligForm);
    const answers = eligibiliteFields.map(
      ([name, label]) => `${label} : ${data.get(name).trim()}`,
    );

    resultTitle.textContent = "Récapitulatif indicatif";
    resultText.textContent =
      "La grille de notation et les seuils d'éligibilité doivent être validés par l'agence. Ce questionnaire ne délivre donc pas de verdict automatique. Vos réponses ne seront transmises que si vous ouvrez WhatsApp et envoyez le message.";
    resultCta.href = "index.html#contact";
    resultCta.textContent = "Contacter un conseiller";

    const shareResult = resultat.querySelector("a[href*='wa.me']");
    if (shareResult) {
      const message = [
        "Bonjour Einstein Services, voici mes réponses au questionnaire indicatif Campus France :",
        ...answers,
        "Je souhaite échanger avec un conseiller.",
      ].join("\n");
      shareResult.href = `https://wa.me/221783876262?text=${encodeURIComponent(message)}`;
      shareResult.target = "_blank";
      shareResult.rel = "noopener";
    }

    resultat.hidden = false;
    resultat.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}
