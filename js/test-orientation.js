/* ===== Test d'orientation ===== */
const orientForm = document.getElementById("orientForm");
const orientResultat = document.getElementById("orientResultat");
const orientDomaine = document.getElementById("orientDomaine");
const orientDest = document.getElementById("orientDest");

const DOMAINES = {
  sciences: {
    titre: "🔬 Profil scientifique et technique",
    texte:
      "Vos réponses orientent vers les domaines des sciences, de l'ingénierie, de la santé ou de l'informatique. Pistes : écoles d'ingénieurs, licences sciences, santé, BTS/BUT techniques.",
  },
  lettres: {
    titre: "⚖️ Profil lettres, droit et sciences humaines",
    texte:
      "Vos réponses orientent vers le droit, les langues, la communication, l'enseignement ou le journalisme. Pistes : licences de droit, LEA/LLCE, sciences de l'information, écoles de journalisme.",
  },
  eco: {
    titre: "📊 Profil économie, gestion et commerce",
    texte:
      "Vos réponses orientent vers la gestion, le commerce, la finance ou l'entrepreneuriat. Pistes : écoles de commerce, licences éco-gestion, BTS/BUT commerciaux, comptabilité.",
  },
  arts: {
    titre: "🎨 Profil créatif et artistique",
    texte:
      "Vos réponses orientent vers le design, l'architecture, les arts appliqués ou le numérique créatif. Pistes : écoles d'art et de design, architecture, motion design, UX/UI.",
  },
};

const DESTINATIONS = {
  france: {
    nom: "🇫🇷 France",
    detail:
      "Excellente adéquation avec votre profil : universités et grandes écoles reconnues, frais modérés, et nos relais à Paris et Lille pour vous accueillir. Procédure Campus France ou Parcoursup selon votre situation.",
  },
  canada: {
    nom: "🇨🇦 Canada",
    detail:
      "Le Canada correspond bien à votre projet : formations de qualité, environnement multiculturel et possibilité de permis de travail post-diplôme.",
  },
  belgique: {
    nom: "🇧🇪 Belgique",
    detail:
      "La Belgique offre un excellent compromis : universités francophones réputées, coût de la vie raisonnable et villes à taille humaine.",
  },
  suisse: {
    nom: "🇨🇭 Suisse",
    detail:
      "La Suisse correspond à votre budget et à votre ambition : excellence académique, débouchés professionnels solides et qualité de vie exceptionnelle.",
  },
  italie: {
    nom: "🇮🇹 Italie",
    detail:
      "L'Italie est une belle opportunité : universités historiques, frais de scolarité accessibles, riches cadres culturels, avec des cursus de plus en plus offerts en anglais.",
  },
};

if (orientForm) {
  orientForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(orientForm);
    const champs = [
      "matieres",
      "motivation",
      "projet",
      "budget",
      "langue",
      "ville",
    ];
    for (const c of champs) {
      if (data.get(c) === null) {
        alert(
          "Merci de répondre à toutes les questions avant de voir votre résultat.",
        );
        return;
      }
    }

    // Domaine : majorité des 3 premières réponses
    const votes = [
      data.get("matieres"),
      data.get("motivation"),
      data.get("projet"),
    ];
    const compte = {};
    votes.forEach((v) => (compte[v] = (compte[v] || 0) + 1));
    const domaine = Object.keys(compte).sort(
      (a, b) => compte[b] - compte[a],
    )[0];

    // Destination : budget > langue > ville
    const dest =
      data.get("budget") in DESTINATIONS
        ? data.get("budget")
        : data.get("langue") in DESTINATIONS
          ? data.get("langue")
          : data.get("ville");

    orientDomaine.textContent = DOMAINES[domaine].titre;
    orientDest.innerHTML =
      DOMAINES[domaine].texte +
      `<br><br><strong>Destination suggérée : ${DESTINATIONS[dest].nom}</strong><br>${DESTINATIONS[dest].detail}`;

    orientResultat.hidden = false;
    orientResultat.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}
