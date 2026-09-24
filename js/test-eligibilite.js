/* ===== Test d'�ligibilit� Campus France ===== */
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
        "Merci de r�pondre � toutes les questions avant de voir votre r�sultat.",
      );
      return;
    }

    resultat.hidden = false;
    resultat.scrollIntoView({ behavior: "smooth", block: "center" });

    if (score >= 8) {
      resultTitle.textContent = "? �ligible";
      resultTitle.style.color = "#2e8b57";
      resultText.textContent =
        "Bonne nouvelle : votre profil r�pond aux crit�res essentiels de la proc�dure Campus France. Nous vous proposons un rendez-vous pour pr�parer votre dossier � �tudes en France � et viser la rentr�e prochaine.";
      resultCta.href = "index.html#contact";
      resultCta.textContent = "Prendre rendez-vous";
    } else if (score >= 5) {
      resultTitle.textContent = "?? � renforcer";
      resultTitle.style.color = "#b8860b";
      resultText.textContent =
        "Votre projet est r�alisable, mais quelques points doivent �tre renforc�s avant le d�p�t (niveau de langue, financement ou calendrier selon vos r�ponses). Nos conseillers vous aideront � construire un plan d'action adapt�.";
      resultCta.href = "index.html#contact";
      resultCta.textContent = "�laborer mon plan d'action";
    } else {
      resultTitle.textContent = "?? Non �ligible pour le moment";
      resultTitle.style.color = "#c0392b";
      resultText.textContent =
        "Sur la base de vos r�ponses, il est pr�f�rable de pr�parer votre projet avant de d�poser une demande : reprise d'�tudes, niveau de langue ou financement. Nous pouvons vous orienter vers des �tapes interm�diaires adapt�es � votre situation.";
      resultCta.href = "index.html#contact";
      resultCta.textContent = "Pr�parer mon projet avec un conseiller";
    }
  });
}
