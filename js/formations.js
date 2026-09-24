/* ===== Catalogue des formations ===== */
/* ⚠️ Données d'exemple — à remplacer/maintenir depuis la liste officielle
   des établissements partenaires transmise par l'agence. */
const FORMATIONS = [
  {
    etab: "Institut polytechnique partenaires",
    pays: "France",
    ville: "Paris",
    titre: "Cycle d'ingénieur — Informatique",
    domaine: "Informatique",
    niveau: "Ingénieur",
    langue: "Français",
    rentree: "Septembre 2026",
    frais: "8 500 € / an",
    conditions: "Bac scientifique, dossier + entretien, niveau de français B2",
    duree: "3 ans",
    debouches: "Développeur, ingénieur logiciel, chef de projet IT",
    deadline: "31 mars 2026",
  },
  {
    etab: "École de commerce partenaire",
    pays: "France",
    ville: "Lille",
    titre: "Programme Grande École — Management",
    domaine: "Commerce & gestion",
    niveau: "Master",
    langue: "Français / Anglais",
    rentree: "Septembre 2026",
    frais: "9 900 € / an",
    conditions: "Bac+3 validé, score TAGE MAGE ou GMAT, entretien",
    duree: "2 ans",
    debouches: "Management, marketing, finance d'entreprise",
    deadline: "30 avril 2026",
  },
  {
    etab: "Université partenaire — Paris",
    pays: "France",
    ville: "Paris",
    titre: "Licence Droit",
    domaine: "Droit & sciences humaines",
    niveau: "Licence",
    langue: "Français",
    rentree: "Septembre 2026",
    frais: "2 900 € / an (frais différentiels non-UE)",
    conditions: "Bac, dossier Campus France « Études en France »",
    duree: "3 ans",
    debouches: "Master de droit, écoles de journalisme, concours",
    deadline: "via Parcoursup / Campus France — voir calendrier",
  },
  {
    etab: "College partenaire",
    pays: "Canada",
    ville: "Montréal",
    titre: "DEC technique — Administration des affaires",
    domaine: "Commerce & gestion",
    niveau: "BTS",
    langue: "Français / Anglais",
    rentree: "Août 2026",
    frais: "≈ 12 000 $ CA / an",
    conditions: "Bac, moyenne ≥ 12/20 recommandée",
    duree: "3 ans",
    debouches: "Gestion, comptabilité, entrepreneuriat",
    deadline: "1er mars 2026",
  },
  {
    etab: "Université partenaire — Ontario",
    pays: "Canada",
    ville: "Toronto",
    titre: "Bachelor of Computer Science",
    domaine: "Informatique",
    niveau: "Bachelor",
    langue: "Anglais",
    rentree: "Septembre 2026",
    frais: "≈ 28 000 $ CA / an",
    conditions: "Bac scientifique solide, preuve d'anglais (IELTS 6.5)",
    duree: "4 ans",
    debouches: "Développeur, data analyst, études supérieures",
    deadline: "15 janvier 2026",
  },
  {
    etab: "Haute École partenaire",
    pays: "Belgique",
    ville: "Bruxelles",
    titre: "Bachelor en Marketing",
    domaine: "Commerce & gestion",
    niveau: "Bachelor",
    langue: "Français",
    rentree: "Septembre 2026",
    frais: "≈ 900 € / an",
    conditions: "Bac, dossier + entretien de motivation",
    duree: "3 ans",
    debouches: "Marketing, communication, digital",
    deadline: "30 juin 2026",
  },
  {
    etab: "Université partenaire — Genève",
    pays: "Suisse",
    ville: "Genève",
    titre: "Master en Relations internationales",
    domaine: "Droit & sciences humaines",
    niveau: "Master",
    langue: "Français / Anglais",
    rentree: "Septembre 2026",
    frais: "≈ 1 000 CHF / semestre",
    conditions: "Licence en sciences sociales ou droit, dossier sélectif",
    duree: "2 ans",
    debouches: "Organisations internationales, ONG, diplomatie",
    deadline: "28 février 2026",
  },
  {
    etab: "Academia partner",
    pays: "Italie",
    ville: "Milan",
    titre: "Bachelor en Design — Interior & Product",
    domaine: "Art & design",
    niveau: "Bachelor",
    langue: "Anglais",
    rentree: "Octobre 2026",
    frais: "≈ 15 000 € / an",
    conditions: "Bac, portfolio recommandé, motivation",
    duree: "3 ans",
    debouches: "Designer produit, interior designer, stylisme",
    deadline: "31 mai 2026",
  },
  {
    etab: "Université partenaire — Rome",
    pays: "Italie",
    ville: "Rome",
    titre: "Licence en Sciences économiques",
    domaine: "Commerce & gestion",
    niveau: "Licence",
    langue: "Français / Anglais",
    rentree: "Septembre 2026",
    frais: "≈ 2 000 € / an (selon revenus)",
    conditions: "Bac, test d'entrée TOLC",
    duree: "3 ans",
    debouches: "Banque, management, masters spécialisés",
    deadline: "15 avril 2026",
  },
  {
    etab: "École partenaire — Lyon",
    pays: "France",
    ville: "Lyon",
    titre: "BTS Commerce international",
    domaine: "Commerce & gestion",
    niveau: "BTS",
    langue: "Français",
    rentree: "Septembre 2026",
    frais: "≈ 4 500 € / an",
    conditions: "Bac toutes séries, entretien de motivation",
    duree: "2 ans",
    debouches: "Assistant export/import, poursuite en licence pro",
    deadline: "30 juin 2026",
  },
  {
    etab: "Institut partenaire — Casablanca de l'enseignement privé FR",
    pays: "France",
    ville: "Bordeaux",
    titre: "Licence Santé (PASS)",
    domaine: "Santé",
    niveau: "Licence",
    langue: "Français",
    rentree: "Septembre 2026",
    frais: "2 900 € / an (frais différentiels non-UE)",
    conditions: "Bac scientifique avec mention, dossier Campus France",
    duree: "1 an + concours",
    debouches: "Médecine, pharmacie, maïeutique",
    deadline: "via Campus France — voir calendrier",
  },
  {
    etab: "Polytechnic partner",
    pays: "Belgique",
    ville: "Liège",
    titre: "Master en Sciences de l'ingénieur",
    domaine: "Sciences & ingénierie",
    niveau: "Master",
    langue: "Français",
    rentree: "Septembre 2026",
    frais: "≈ 900 € / an",
    conditions: "Bac+3 en sciences appliquées, dossier",
    duree: "2 ans",
    debouches: "Ingénieur civil, R&D, énergie",
    deadline: "30 avril 2026",
  },
];

const grid = document.getElementById("formationsGrid");
const fPays = document.getElementById("fPays");
const fNiveau = document.getElementById("fNiveau");
const fDomaine = document.getElementById("fDomaine");
const fLangue = document.getElementById("fLangue");
const fReset = document.getElementById("fReset");
const fCount = document.getElementById("fCount");
const noResult = document.getElementById("noResult");

function formationCard(f) {
  return `
 <article class="card formation-card">
    <div class="formation-top">
      <span class="tag">${f.niveau}</span>
      <span class="tag tag-country">${f.pays} · ${f.ville}</span>
    </div>
    <h3>${f.titre}</h3>
    <p class="formation-etab">${f.etab}</p>
    <ul class="formation-facts">
      <li>🗓️ Rentrée : ${f.rentree}</li>
      <li>⏱️ Durée : ${f.duree}</li>
      <li>🗣️ Langue : ${f.langue}</li>
      <li>💶 Frais : ${f.frais}</li>
      <li>📅 Candidature avant : ${f.deadline}</li>
    </ul>
    <details class="formation-details">
      <summary>Conditions d'admission & débouchés</summary>
      <p><strong>Conditions :</strong> ${f.conditions}</p>
      <p><strong>Débouchés :</strong> ${f.debouches}</p>
    </details>
    <a
      class="btn btn-orange"
      href="index.html#contact"
      onclick="sessionStorage.setItem('formation', '${f.titre} — ${f.etab} (${f.ville}, ${f.pays})')"
      >Je candidate avec Einstein Services</a
    >
 </article>`;
}

function render() {
  const liste = FORMATIONS.filter(
    (f) =>
      (!fPays.value || f.pays === fPays.value) &&
      (!fNiveau.value || f.niveau === fNiveau.value) &&
      (!fDomaine.value || f.domaine === fDomaine.value) &&
      (!fLangue.value ||
        f.langue === fLangue.value ||
        (f.langue === "Français / Anglais" && !fLangue.value)),
  );
  grid.innerHTML = liste.map(formationCard).join("");
  // Les cartes générées dynamiquement ne passent pas par l'observer de
  // code.js : on force leur affichage en marquant le conteneur « visible ».
  grid.classList.add("visible");
  noResult.hidden = liste.length > 0;
  fCount.textContent = liste.length
    ? `${liste.length} formation${liste.length > 1 ? "s" : ""} correspondent à vos critères`
    : "";
}

[fPays, fNiveau, fDomaine, fLangue].forEach((s) =>
  s.addEventListener("change", render),
);
fReset.addEventListener("click", () => {
  [fPays, fNiveau, fDomaine, fLangue].forEach((s) => (s.value = ""));
  render();
});

render();

// Pré-remplit le message de contact si l'utilisateur vient d'une candidature
const fMessage = document.querySelector("textarea[name='message']");
const fChoisie = sessionStorage.getItem("formation");
if (fMessage && fChoisie) {
  fMessage.value = `Bonjour, je souhaite candidate avec Einstein Services à la formation : ${fChoisie}.`;
  sessionStorage.removeItem("formation");
}
