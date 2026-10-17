/* ===== Fiche destination par pays — données à confirmer par l'agence ===== */
const PAYS_DATA = {
  France: {
    flag: "img/flags/fr.svg",
    continent: "Europe",
    langues: "Français",
    devise: "Euro (€)",
    intro:
      "Première destination francophone, la France propose des universités publiques, des grandes écoles et des écoles spécialisées reconnues en Europe. Démarches centralisées via Campus France et Parcoursup selon votre profil.",
    facts: [
      [
        "🎓 Système",
        "Licence (3 ans), Master (2 ans), BTS, écoles d'ingénieurs et de commerce",
      ],
      [
        "💰 Frais de scolarité",
        "Universités publiques : environ 170 € à 3 900 €/an ; écoles privées plus élevées",
      ],
      [
        "🏠 Coût de la vie",
        "Environ 600 à 1 000 €/mois selon la ville (Paris plus élevé)",
      ],
      [
        "🗣️ Langue",
        "Français ; certains programmes disponibles en anglais (TCF/DELF selon l'établissement)",
      ],
      [
        "🛂 Visa",
        "VLS-TS « étudiant » via Campus France : entretien et constitution du dossier",
      ],
      [
        "💼 Travailler",
        "Autorisé à côté des études dans la limite légale en vigueur",
      ],
    ],
    steps: [
      "Choix de la formation et de l'établissement avec un conseiller",
      "Dossier Campus France / Parcoursup selon votre niveau",
      "Entretien Campus France puis admission",
      "Demande de visa étudiant (VLS-TS)",
      "Recherche de logement et préparation du départ",
    ],
  },
  Canada: {
    flag: "img/flags/ca.svg",
    continent: "Amérique du Nord",
    langues: "Français / Anglais",
    devise: "Dollar canadien (CAD)",
    intro:
      "Le Canada combine formation de qualité, bilinguisme et perspectives d'immigration après les études. Le Québec offre de nombreux programmes francophones, notamment à Montréal et Québec.",
    facts: [
      ["🎓 Système", "Baccalauréat (3-4 ans), maîtrise, DEC/CEGEP au Québec"],
      [
        "💰 Frais de scolarité",
        "Environ 8 000 à 30 000 CAD/an selon province et programme",
      ],
      ["🏠 Coût de la vie", "Environ 800 à 1 500 CAD/mois selon la ville"],
      [
        "🗣️ Langue",
        "Français (Québec) ou anglais ; tests TEF/IELTS selon le programme",
      ],
      [
        "🛂 Visa",
        "Permis d'études + certificat d'acceptation du Québec (CAQ) pour le Québec",
      ],
      [
        "💼 Travailler",
        "Permis inclus : travail à temps partiel pendant les sessions",
      ],
    ],
    steps: [
      "Choix du programme, de la province et du budget",
      "Admission directe auprès de l'établissement",
      "Obtention de la lettre d'acceptation",
      "CAQ (si Québec) puis permis d'études",
      "Preuve financière et préparation du départ",
    ],
  },
  Belgique: {
    flag: "img/flags/be.svg",
    continent: "Europe",
    langues: "Français / Néerlandais",
    devise: "Euro (€)",
    intro:
      "Frais de scolarité parmi les plus accessibles d'Europe de l'Ouest et universités reconnues (UCLouvain, ULB, KU Leuven…). Idéale pour un budget maîtrisé à proximité de la France.",
    facts: [
      ["🎓 Système", "Bachelier (3 ans), master (1-2 ans), hautes écoles"],
      [
        "💰 Frais de scolarité",
        "Environ 850 à 4 500 €/an selon la communauté et le statut",
      ],
      ["🏠 Coût de la vie", "Environ 700 à 1 000 €/mois"],
      [
        "🗣️ Langue",
        "Français ou néerlandais selon l'institution ; programmes en anglais",
      ],
      ["🛂 Visa", "Visa D « études » avec attestation d'inscription"],
      ["💼 Travailler", "Possibilité d'un job étudiant dans le cadre légal"],
    ],
    steps: [
      "Choix de l'établissement (communauté française ou flamande)",
      "Demande d'inscription et équivalence du diplôme",
      "Attestation d'inscription délivrée",
      "Demande de visa D étudiant",
      "Logement et assurance santé",
    ],
  },
  Suisse: {
    flag: "img/flags/ch.svg",
    continent: "Europe",
    langues: "Français / Allemand",
    devise: "Franc suisse (CHF)",
    intro:
      "Qualité de formation exceptionnelle (EPFL, UNIL, UNIGE…) et salaires étudiants parmi les plus élevés d'Europe. Coût de la vie élevé, mais frais d'université publique raisonnables.",
    facts: [
      [
        "🎓 Système",
        "Bachelor (3 ans), master (2 ans), hautes écoles spécialisées",
      ],
      [
        "💰 Frais de scolarité",
        "Environ 1 000 à 2 000 CHF/an pour les universités publiques",
      ],
      ["🏠 Coût de la vie", "Environ 1 200 à 2 000 CHF/mois"],
      [
        "🗣️ Langue",
        "Français, allemand ou anglais selon le canton et le programme",
      ],
      ["🛂 Visa", "Autorisation de séjour « études » B auprès du canton"],
      [
        "💼 Travailler",
        "Autorisé après un délai de 6 mois, dans la limite légale",
      ],
    ],
    steps: [
      "Choix de l'université et vérification des équivalences",
      "Dossier d'admission et paiement des frais",
      "Confirmation d'inscription",
      "Demande de visa et autorisation de séjour",
      "Logement (procédure anticipée recommandée)",
    ],
  },
  Italie: {
    flag: "img/flags/it.svg",
    continent: "Europe",
    langues: "Italien",
    devise: "Euro (€)",
    intro:
      "Universités historiques et écoles de design renommées, avec des frais publics abordables calculés sur le revenu familial (bourse DSU possible). Une destination attractive pour le budget.",
    facts: [
      [
        "🎓 Système",
        "Laurea triennale (3 ans), laurea magistrale (2 ans), académies d'art",
      ],
      [
        "💰 Frais de scolarité",
        "Environ 500 à 4 000 €/an, souvent indexés sur le revenu",
      ],
      ["🏠 Coût de la vie", "Environ 600 à 1 000 €/mois selon la ville"],
      ["🗣️ Langue", "Italien ; nombreux programmes en anglais (test requis)"],
      [
        "🛂 Visa",
        "Visto per motivi di studio via Universitaly (préinscription)",
      ],
      ["💼 Travailler", "Jobs étudiants possibles dans la limite légale"],
    ],
    steps: [
      "Préinscription sur Universitaly",
      "Test de langue italien (CILS/CELI) ou anglais selon programme",
      "Admission et inscription",
      "Demande de visa étudiant",
      "Permis de séjour et logement à l'arrivée",
    ],
  },
};

const params = new URLSearchParams(window.location.search);
const pays = params.get("pays");
const data = pays && PAYS_DATA[pays];

const els = {
  flag: document.getElementById("paysFlag"),
  name: document.getElementById("paysName"),
  meta: document.getElementById("paysMeta"),
  intro: document.getElementById("paysIntro"),
  facts: document.getElementById("paysFacts"),
  steps: document.getElementById("paysSteps"),
  error: document.getElementById("paysError"),
  cta: document.getElementById("paysCta"),
  hero: document.querySelector(".pays-hero"),
  headTitle: document.querySelector("title"),
};

if (data) {
  document.title =
    `Étudier en ${pays === "Canada" ? "au" : ""} ${pays} — Einstein Services`
      .replace("en au Canada", "au Canada")
      .replace("en France", "en France")
      .replace("en Belgique", "en Belgique")
      .replace("en Suisse", "en Suisse")
      .replace("en Italie", "en Italie");
  els.headTitle.textContent = `${pays} — Destination d'études | Einstein Services`;

  els.flag.src = data.flag;
  els.flag.alt = `Drapeau : ${pays}`;
  els.flag.hidden = false;
  els.name.textContent = pays;
  els.meta.innerHTML = `<span class="dest-continent">${data.continent}</span> · 🗣️ ${data.langues} · 💱 ${data.devise}`;
  els.intro.textContent = data.intro;
  els.cta.href = `contact.html?destination=${encodeURIComponent(pays)}`;

  els.facts.innerHTML = data.facts
    .map(
      ([label, value]) => `
      <div class="card pays-fact">
        <strong>${label}</strong>
        <p>${value}</p>
      </div>`,
    )
    .join("");

  els.steps.innerHTML = data.steps
    .map(
      (step, i) => `
      <div class="card pays-step">
        <span class="pays-step-num">${i + 1}</span>
        <p>${step}</p>
      </div>`,
    )
    .join("");
} else {
  if (els.hero) els.hero.hidden = true;
  const stepsHead = document.querySelector(".section-head");
  if (stepsHead) stepsHead.hidden = true;
  if (els.error) els.error.hidden = false;
  const factsEl = document.getElementById("paysFacts");
  if (factsEl) factsEl.hidden = true;
  const stepsEl = document.getElementById("paysSteps");
  if (stepsEl) stepsEl.hidden = true;
}
