/* ===== Test d'orientation ===== */
const orientForm = document.getElementById("orientForm");
const orientResultat = document.getElementById("orientResultat");
const orientDomaine = document.getElementById("orientDomaine");
const orientDest = document.getElementById("orientDest");

const DOMAINES = {
  sciences: {
    titre: "?? Profil scientifique et technique",
    texte:
      "Vos r�ponses orientent vers les domaines des sciences, de l'ing�nierie, de la sant� ou de l'informatique. Pistes : �coles d'ing�nieurs, licences sciences, sant�, BTS/BUT techniques.",
  },
  lettres: {
    titre: "?? Profil lettres, droit et sciences humaines",
    texte:
      "Vos r�ponses orientent vers le droit, les langues, la communication, l'enseignement ou le journalisme. Pistes : licences de droit, LEA/LLCE, sciences de l'information, �coles de journalisme.",
  },
  eco: {
    titre: "?? Profil �conomie, gestion et commerce",
    texte:
      "Vos r�ponses orientent vers la gestion, le commerce, la finance ou l'entrepreneuriat. Pistes : �coles de commerce, licences �co-gestion, BTS/BUT commerciaux, comptabilit�.",
  },
  arts: {
    titre: "?? Profil cr�atif et artistique",
    texte:
      "Vos r�ponses orientent vers le design, l'architecture, les arts appliqu�s ou le num�rique cr�atif. Pistes : �coles d'art et de design, architecture, motion design, UX/UI.",
  },
};

const DESTINATIONS = {
  france: {
    nom: "???? France",
    detail:
      "Excellente ad�quation avec votre profil : universit�s et grandes �coles reconnues, frais mod�r�s, et nos relais � Paris et Lille pour vous accueillir. Proc�dure Campus France ou Parcoursup selon votre situation.",
  },
  canada: {
    nom: "???? Canada",
    detail:
      "Le Canada correspond bien � votre projet : formations de qualit�, environnement multiculturel et possibilit� de permis de travail post-dipl�me.",
  },
  belgique: {
    nom: "???? Belgique",
    detail:
      "La Belgique offre un excellent compromis : universit�s francophones r�put�es, co�t de la vie raisonnable et villes � taille humaine.",
  },
  suisse: {
    nom: "???? Suisse",
    detail:
      "La Suisse correspond � votre budget et � votre ambition : excellence acad�mique, d�bouch�s professionnels solides et qualit� de vie exceptionnelle.",
  },
  italie: {
    nom: "???? Italie",
    detail:
      "L'Italie est une belle opportunit� : universit�s historiques, frais de scolarit� accessibles, riches cadres culturels, avec des cursus de plus en plus offerts en anglais.",
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
          "Merci de r�pondre � toutes les questions avant de voir votre r�sultat.",
        );
        return;
      }
    }

    // Domaine : majorit� des 3 premi�res r�ponses
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
      `<br><br><strong>Destination sugg�r�e : ${DESTINATIONS[dest].nom}</strong><br>${DESTINATIONS[dest].detail}`;

    orientResultat.hidden = false;
    orientResultat.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}
