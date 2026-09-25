/* ===== Test d'éligibilité Campus France ===== */
const eligForm = document.getElementById("eligForm");
const resultat = document.getElementById("resultat");
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");
const resultCta = document.getElementById("resultCta");

if (eligForm) {
  eligForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(eligForm);
    const champs = [
      "niveau",
      "langue",
      "coherence",
      "financement",
      "calendrier",
    ];
    let score = 0;
    let manquants = 0;
    champs.forEach((c) => {
      const v = data.get(c);
      if (v === null) manquants++;
      else score += parseInt(v, 10);
    });

    if (manquants > 0) {
      alert(
        "Merci de répondre à toutes les questions avant de voir votre résultat.",
      );
      return;
    }

    resultat.hidden = false;
    resultat.scrollIntoView({ behavior: "smooth", block: "center" });

    if (score >= 8) {
      resultTitle.textContent = "✅ Éligible";
      resultTitle.style.color = "#2e8b57";
      resultText.textContent =
        "Bonne nouvelle : votre profil répond aux critères essentiels de la procédure Campus France. Nous vous proposons un rendez-vous pour préparer votre dossier « Études en France » et viser la rentrée prochaine.";
      resultCta.href = "index.html#contact";
      resultCta.textContent = "Prendre rendez-vous";
    } else if (score >= 5) {
      resultTitle.textContent = "🟡 À renforcer";
      resultTitle.style.color = "#b8860b";
      resultText.textContent =
        "Votre projet est réalisable, mais quelques points doivent être renforcés avant le dépôt (niveau de langue, financement ou calendrier selon vos réponses). Nos conseillers vous aideront à construire un plan d'action adapté.";
      resultCta.href = "index.html#contact";
      resultCta.textContent = "Élaborer mon plan d'action";
    } else {
      resultTitle.textContent = "🔴 Non éligible pour le moment";
      resultTitle.style.color = "#c0392b";
      resultText.textContent =
        "Sur la base de vos réponses, il est préférable de préparer votre projet avant de déposer une demande : reprise d'études, niveau de langue ou financement. Nous pouvons vous orienter vers des étapes intermédiaires adaptées à votre situation.";
      resultCta.href = "index.html#contact";
      resultCta.textContent = "Préparer mon projet avec un conseiller";
    }
  });
}
