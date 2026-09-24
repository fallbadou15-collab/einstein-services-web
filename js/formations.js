/* ===== Catalogue des formations ===== */
/* ?? Donn�es d'exemple � � remplacer/maintenir depuis la liste officielle
   des �tablissements partenaires transmise par l'agence. */
const FORMATIONS = [
  {
    etab: "Institut polytechnique partenaires",
    pays: "France",
    ville: "Paris",
    titre: "Cycle d'ing�nieur � Informatique",
    domaine: "Informatique",
    niveau: "Ing�nieur",
    langue: "Fran�ais",
    rentree: "Septembre 2026",
    frais: "8 500 � / an",
    conditions: "Bac scientifique, dossier + entretien, niveau de fran�ais B2",
    duree: "3 ans",
    debouches: "D�veloppeur, ing�nieur logiciel, chef de projet IT",
    deadline: "31 mars 2026",
  },
  {
    etab: "�cole de commerce partenaire",
    pays: "France",
    ville: "Lille",
    titre: "Programme Grande �cole � Management",
    domaine: "Commerce & gestion",
    niveau: "Master",
    langue: "Fran�ais / Anglais",
    rentree: "Septembre 2026",
    frais: "9 900 � / an",
    conditions: "Bac+3 valid�, score TAGE MAGE ou GMAT, entretien",
    duree: "2 ans",
    debouches: "Management, marketing, finance d'entreprise",
    deadline: "30 avril 2026",
  },
  {
    etab: "Universit� partenaire � Paris",
    pays: "France",
    ville: "Paris",
    titre: "Licence Droit",
    domaine: "Droit & sciences humaines",
    niveau: "Licence",
    langue: "Fran�ais",
    rentree: "Septembre 2026",
    frais: "2 900 � / an (frais diff�rentiels non-UE)",
    conditions: "Bac, dossier Campus France � �tudes en France �",
    duree: "3 ans",
    debouches: "Master de droit, �coles de journalisme, concours",
    deadline: "via Parcoursup / Campus France � voir calendrier",
  },
  {
    etab: "College partenaire",
    pays: "Canada",
    ville: "Montr�al",
    titre: "DEC technique � Administration des affaires",
    domaine: "Commerce & gestion",
    niveau: "BTS",
    langue: "Fran�ais / Anglais",
    rentree: "Ao�t 2026",
    frais: "� 12 000 $ CA / an",
    conditions: "Bac, moyenne = 12/20 recommand�e",
    duree: "3 ans",
    debouches: "Gestion, comptabilit�, entrepreneuriat",
    deadline: "1er mars 2026",
  },
  {
    etab: "Universit� partenaire � Ontario",
    pays: "Canada",
    ville: "Toronto",
    titre: "Bachelor of Computer Science",
    domaine: "Informatique",
    niveau: "Bachelor",
    langue: "Anglais",
    rentree: "Septembre 2026",
    frais: "� 28 000 $ CA / an",
    conditions: "Bac scientifique solide, preuve d'anglais (IELTS 6.5)",
    duree: "4 ans",
    debouches: "D�veloppeur, data analyst, �tudes sup�rieures",
    deadline: "15 janvier 2026",
  },
  {
    etab: "Haute �cole partenaire",
    pays: "Belgique",
    ville: "Bruxelles",
    titre: "Bachelor en Marketing",
    domaine: "Commerce & gestion",
    niveau: "Bachelor",
    langue: "Fran�ais",
    rentree: "Septembre 2026",
    frais: "� 900 � / an",
    conditions: "Bac, dossier + entretien de motivation",
    duree: "3 ans",
    debouches: "Marketing, communication, digital",
    deadline: "30 juin 2026",
  },
  {
    etab: "Universit� partenaire � Gen�ve",
    pays: "Suisse",
    ville: "Gen�ve",
    titre: "Master en Relations internationales",
    domaine: "Droit & sciences humaines",
    niveau: "Master",
    langue: "Fran�ais / Anglais",
    rentree: "Septembre 2026",
    frais: "� 1 000 CHF / semestre",
    conditions: "Licence en sciences sociales ou droit, dossier s�lectif",
    duree: "2 ans",
    debouches: "Organisations internationales, ONG, diplomatie",
    deadline: "28 f�vrier 2026",
  },
  {
    etab: "Academia partner",
    pays: "Italie",
    ville: "Milan",
    titre: "Bachelor en Design � Interior & Product",
    domaine: "Art & design",
    niveau: "Bachelor",
    langue: "Anglais",
    rentree: "Octobre 2026",
    frais: "� 15 000 � / an",
    conditions: "Bac, portfolio recommand�, motivation",
    duree: "3 ans",
    debouches: "Designer produit, interior designer, stylisme",
    deadline: "31 mai 2026",
  },
  {
    etab: "Universit� partenaire � Rome",
    pays: "Italie",
    ville: "Rome",
    titre: "Licence en Sciences �conomiques",
    domaine: "Commerce & gestion",
    niveau: "Licence",
    langue: "Fran�ais / Anglais",
    rentree: "Septembre 2026",
    frais: "� 2 000 � / an (selon revenus)",
    conditions: "Bac, test d'entr�e TOLC",
    duree: "3 ans",
    debouches: "Banque, management, masters sp�cialis�s",
    deadline: "15 avril 2026",
  },
  {
    etab: "�cole partenaire � Lyon",
    pays: "France",
    ville: "Lyon",
    titre: "BTS Commerce international",
    domaine: "Commerce & gestion",
    niveau: "BTS",
    langue: "Fran�ais",
    rentree: "Septembre 2026",
    frais: "� 4 500 � / an",
    conditions: "Bac toutes s�ries, entretien de motivation",
    duree: "2 ans",
    debouches: "Assistant export/import, poursuite en licence pro",
    deadline: "30 juin 2026",
  },
  {
    etab: "Institut partenaire � Casablanca de l'enseignement priv� FR",
    pays: "France",
    ville: "Bordeaux",
    titre: "Licence Sant� (PASS)",
    domaine: "Sant�",
    niveau: "Licence",
    langue: "Fran�ais",
    rentree: "Septembre 2026",
    frais: "2 900 � / an (frais diff�rentiels non-UE)",
    conditions: "Bac scientifique avec mention, dossier Campus France",
    duree: "1 an + concours",
    debouches: "M�decine, pharmacie, ma�eutique",
    deadline: "via Campus France � voir calendrier",
  },
  {
    etab: "Polytechnic partner",
    pays: "Belgique",
    ville: "Li�ge",
    titre: "Master en Sciences de l'ing�nieur",
    domaine: "Sciences & ing�nierie",
    niveau: "Master",
    langue: "Fran�ais",
    rentree: "Septembre 2026",
    frais: "� 900 � / an",
    conditions: "Bac+3 en sciences appliqu�es, dossier",
    duree: "2 ans",
    debouches: "Ing�nieur civil, R&D, �nergie",
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
      <span class="tag tag-country">${f.pays} � ${f.ville}</span>
    </div>
    <h3>${f.titre}</h3>
    <p class="formation-etab">${f.etab}</p>
    <ul class="formation-facts">
      <li>??? Rentr�e : ${f.rentree}</li>
      <li>?? Dur�e : ${f.duree}</li>
      <li>??? Langue : ${f.langue}</li>
      <li>?? Frais : ${f.frais}</li>
      <li>?? Candidature avant : ${f.deadline}</li>
    </ul>
    <details class="formation-details">
      <summary>Conditions d'admission & d�bouch�s</summary>
      <p><strong>Conditions :</strong> ${f.conditions}</p>
      <p><strong>D�bouch�s :</strong> ${f.debouches}</p>
    </details>
    <a
      class="btn btn-orange"
      href="index.html#contact"
      onclick="sessionStorage.setItem('formation', '${f.titre} � ${f.etab} (${f.ville}, ${f.pays})')"
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
        (f.langue === "Fran�ais / Anglais" && !fLangue.value)),
  );
  grid.innerHTML = liste.map(formationCard).join("");
  // Les cartes g�n�r�es dynamiquement ne passent pas par l'observer de
  // code.js : on force leur affichage en marquant le conteneur � visible �.
  grid.classList.add("visible");
  noResult.hidden = liste.length > 0;
  fCount.textContent = liste.length
    ? `${liste.length} formation${liste.length > 1 ? "s" : ""} correspondent � vos crit�res`
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

// Pr�-remplit le message de contact si l'utilisateur vient d'une candidature
const fMessage = document.querySelector("textarea[name='message']");
const fChoisie = sessionStorage.getItem("formation");
if (fMessage && fChoisie) {
  fMessage.value = `Bonjour, je souhaite candidate avec Einstein Services � la formation : ${fChoisie}.`;
  sessionStorage.removeItem("formation");
}
