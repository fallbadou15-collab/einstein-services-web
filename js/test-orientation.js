/* ===== Questionnaire indicatif d'orientation ===== */
const orientForm = document.getElementById("orientForm");
const orientResultat = document.getElementById("orientResultat");
const orientDomaine = document.getElementById("orientDomaine");
const orientDest = document.getElementById("orientDest");

const orientationFields = [
  ["matieres", "Centres d’intérêt et matières fortes"],
  ["motivation", "Motivations et intérêts professionnels"],
  ["projet", "Projet professionnel"],
  ["budget", "Budget et devise"],
];

if (orientForm) {
  orientForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!orientForm.reportValidity()) return;

    const data = new FormData(orientForm);
    const answers = orientationFields.map(
      ([name, label]) => `${label} : ${data.get(name).trim()}`,
    );

    orientDomaine.textContent = "Récapitulatif de vos réponses";
    orientDest.textContent =
      "Les domaines, destinations et formations recommandés doivent être rapprochés du catalogue officiel et validés par l’agence. " +
      answers.join(" | ");

    const shareResult = orientResultat.querySelector("a[href*='wa.me']");
    if (shareResult) {
      const message = [
        "Bonjour Einstein Services, voici mes réponses au questionnaire indicatif d'orientation :",
        ...answers,
        "Je souhaite échanger avec un conseiller.",
      ].join("\n");
      shareResult.href = `https://wa.me/221783876262?text=${encodeURIComponent(message)}`;
      shareResult.target = "_blank";
      shareResult.rel = "noopener";
    }

    orientResultat.hidden = false;
    orientResultat.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}
