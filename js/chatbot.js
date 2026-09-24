/* ===== Chatbot Nafi � Einstein Services ===== */
/* Assistant virtuel 24h/24 (cahier des charges �09) :
   - r�pond aux questions fr�quentes (destinations, d�marches, calendrier, documents)
   - qualifie les prospects (niveau, projet, destination)
   - oriente vers le test d'�ligibilit� ou la prise de rendez-vous
   - transf�re vers un conseiller humain sur WhatsApp
   - enregistre les conversations (localStorage) pour le suivi commercial
   R�gle : Nafi ne communique AUCUN tarif � il redirige vers un conseiller. */

const NAFI_WHATSAPP = "221783876262";
const NAFI_CONTACT_EMAIL = "contact@einsteinservicesvoyages.com";

/* ---------- Moteur de r�ponses ---------- */
const NAFI_REPLIES = [
  {
    kw: ["bonjour", "salut", "hello", "bonsoir", "coucou"],
    r: "Bonjour et bienvenue chez Einstein Services ! ?? Je suis Nafi, votre assistante virtuelle. Comment puis-je vous aider ? Tapez � menu � pour voir tout ce que je peux faire.",
  },
  {
    kw: ["menu", "aide", "option", "choix", "help"],
    r: "Voici ce que je peux faire pour vous :\n1?? Destinations d'�tudes\n2?? D�marches & documents (Campus France, visa�)\n3?? Calendrier des candidatures\n4?? Tester mon �ligibilit�\n5?? Prendre rendez-vous\n6?? Parler � un conseiller (WhatsApp)\n\nTapez simplement un mot-cl�, par exemple � Canada �, � visa � ou � rendez-vous �.",
  },
  {
    kw: ["france", "campus france", "parcoursup", "etudes en france"],
    r: "???? La France est notre destination n�1 : universit�s, grandes �coles, BTS/BUT�\nLa proc�dure passe par Campus France (� �tudes en France �) ou Parcoursup selon votre situation.\nVous voulez savoir si votre profil est �ligible ? Faites le test gratuit : test-eligibilite.html ??",
  },
  {
    kw: ["canada", "quebec", "montr�al", "montreal", "toronto"],
    r: "???? Le Canada est tr�s demand� : coll�ges (DEC technique), universit�s, possibilit� de permis de travail post-dipl�me.\nRent�es principales : ao�t et septembre. Il faut s'y prendre plusieurs mois � l'avance !\nVoulez-vous passer au test d'�ligibilit� pour v�rifier votre dossier ?",
  },
  {
    kw: ["belgique", "belgique", "bruxelles"],
    r: "???? La Belgique offre un excellent rapport qualit�/prix : hautes �coles et universit�s francophones reconnues, co�t de la vie raisonnable et villes � taille humaine (Bruxelles, Li�ge�).",
  },
  {
    kw: ["suisse", "gen�ve", "geneve"],
    r: "???? La Suisse : excellence acad�mique, d�bouch�s solides, qualit� de vie exceptionnelle. Les frais universitaires sont mod�r�s mais le co�t de la vie est �lev� � un budget solide est n�cessaire.",
  },
  {
    kw: ["italie", "italy", "rome", "milan"],
    r: "???? L'Italie : universit�s historiques, frais accessibles (souvent selon les revenus de la famille) et de plus en plus de cursus en anglais. Villes phares : Rome, Milan, Bologne.",
  },
  {
    kw: ["visa", "vls", "titre de s�jour"],
    r: "?? Pour le visa �tudiant, il faut g�n�ralement : une admission confirm�e, un justificatif de financement, un logement et une assurance. Nous vous accompagnons � chaque �tape, y compris la pr�paration du rendez-vous consulaire.\nSouhaitez-vous un rendez-vous avec un conseiller ?",
  },
  {
    kw: [
      "document",
      "dossier",
      "papier",
      "pieces",
      "pi�ces",
      "releve",
      "relev�",
    ],
    r: "?? Documents g�n�ralement demand�s : relev�s de notes et dipl�mes (traduits si besoin), pi�ce d'identit�/passeport, CV, lettre de motivation, justificatif de langue (TCF/DELF/IELTS), preuve de financement.\nJe peux vous orienter vers un conseiller pour une checklist personnalis�e. Dites � conseiller � !",
  },
  {
    kw: [
      "calendrier",
      "date",
      "deadline",
      "quand",
      "rentree",
      "rentr�e",
      "candidature",
    ],
    r: "??? Rep�res g�n�raux :\n� France : Campus France/Parcoursup entre novembre et mars selon la proc�dure\n� Canada : candidatures souvent avant janvier-mars pour la rentr�e d'automne\n� Belgique/Suisse/Italie : printemps � d�but d'�t�\nLe plus t�t est le mieux ! Consultez le catalogue : formations.html",
  },
  {
    kw: ["langue", "tcf", "delf", "ielts", "anglais", "fran�ais"],
    r: "??? Pour la France, un niveau B2 en fran�ais (TCF/DELF) est g�n�ralement demand�. Pour les cursus en anglais (Canada, Italie�), pr�voyez l'IELTS (souvent 6.0�6.5).\nNous vous aidons � planifier votre test de langue. Dites � rendez-vous � pour �tre accompagn�.",
  },
  {
    kw: ["test", "eligibilite", "�ligibilit�", "eligible", "profil"],
    r: "?? Le test d'�ligibilit� �value gratuitement la faisabilit� de votre projet (niveau, langue, financement, calendrier). C'est le meilleur point de d�part : test-eligibilite.html\nEt pour votre orientation : test-orientation.html",
  },
  {
    kw: ["logement", "hebergement", "h�bergement", "residence", "r�sidence"],
    r: "?? Nous proposons une assistance logement : r�sidences �tudiantes, CROUS en France, colocations. L'attestation de logement est aussi souvent requise pour le visa.\nUn conseiller peut vous d�tailler les options : tapez � conseiller �.",
  },
  {
    kw: ["bourse", "financement", "argent", "budget", "cout", "co�t", "frais"],
    r: "?? Le financement se pr�pare t�t : justificatif de ressources, AVI, garant� Des bourses existent (Eiffel, bourses r�gionales, �tablissements). Je ne peux pas vous communiquer de tarifs � un conseiller se charge de l'aspect financier avec vous. Tapez � conseiller � ou � rendez-vous �.",
  },
  {
    kw: [
      "formation",
      "catalogue",
      "ecole",
      "�cole",
      "universit�",
      "universite",
      "master",
      "licence",
      "bts",
      "bachelor",
    ],
    r: "?? Notre catalogue r�f�rence les formations de nos �tablissements partenaires avec des filtres (pays, niveau, domaine, langue�). Direction : formations.html",
  },
  {
    kw: ["voyage", "billet", "avion", "hotel", "h�tel", "tourisme"],
    r: "?? Einstein Services c'est aussi la billetterie : billets d'avion, r�servations d'h�tels, visas de tourisme et d'affaires. Un conseiller s'occupe de votre demande : tapez � conseiller �.",
  },
  {
    kw: [
      "rendez-vous",
      "rendez vous",
      "rdv",
      "appointment",
      "conseiller",
      "humain",
      "agent",
      "contact",
    ],
    r:
      "?? Tr�s bien ! Pour parler � un conseiller humain :\n� WhatsApp direct : https://wa.me/221783876262\n� T�l�phone : +221 33 830 54 60\n� Email : " +
      NAFI_CONTACT_EMAIL +
      "\nOu via le formulaire de contact en page d'accueil : index.html#contact",
  },
  {
    kw: ["tarif", "prix", "combien", "coute", "co�te", "paiement", "devis"],
    r: "?? Notre r�gle : Nafi ne communique aucun tarif, pour garantir une information exacte et personnalis�e. Un conseiller vous r�pond tr�s vite sur WhatsApp : https://wa.me/221783876262",
  },
  {
    kw: ["merci", "super", "parfait", "top", "cool"],
    r: "Avec plaisir ! ?? N'h�sitez pas si vous avez d'autres questions. Bonne pr�paration de votre projet d'�tudes !",
  },
  {
    kw: ["adresse", "o�", "ou etes", "localisation", "bureau", "yoff"],
    r: "?? Nous sommes � Yoff (Dakar, S�n�gal) : Route de l'A�roport, pr�s de la Senelec.\nT�l�phones : +221 33 830 54 60 � +221 78 387 62 62 � +221 78 733 81 81",
  },
  {
    kw: ["qui es", "nafi", "robot", "humain", "personne"],
    r: "Je suis Nafi ??, l'assistante virtuelle d'Einstein Services, disponible 24h/24 ! Je r�ponds aux questions courantes et je vous mets en relation avec un conseiller humain d�s que n�cessaire.",
  },
];
const NAFI_FALLBACK =
  "Je ne suis pas s�re d'avoir bien compris ?? Essayez un mot-cl� comme � France �, � visa �, � documents �, � calendrier �, � logement �, � formation � ou � rendez-vous �. Ou tapez � menu � pour voir les options.";

/* ---------- Enregistrement des conversations ---------- */
function nafiSave(msg, from) {
  try {
    const key = "es_nafi_conversations";
    const convs = JSON.parse(localStorage.getItem(key) || "[]");
    const page = location.pathname.split("/").pop() || "index.html";
    let conv = convs.find(
      (c) => c.session === sessionStorage.getItem("nafiSession"),
    );
    if (!conv) {
      sessionStorage.setItem(
        "nafiSession",
        "S" + Date.now().toString(36).toUpperCase(),
      );
      conv = {
        session: sessionStorage.getItem("nafiSession"),
        page: page,
        date: new Date().toISOString(),
        messages: [],
      };
      convs.unshift(conv);
    }
    conv.messages.push({ from, text: msg, time: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(convs.slice(0, 100)));
  } catch (e) {
    /* stockage indisponible : on ignore */
  }
}

/* ---------- Interface ---------- */
const NAFI_HTML = `
<div id="nafiWidget" aria-live="polite">
  <div class="nafi-panel" id="nafiPanel" hidden>
    <div class="nafi-head">
      <div class="nafi-avatar">??</div>
      <div>
        <strong>Nafi</strong>
        <small>Assistant Einstein Services � en ligne</small>
      </div>
      <button class="nafi-close" id="nafiClose" aria-label="Fermer">?</button>
    </div>
    <div class="nafi-body" id="nafiBody">
      <div class="nafi-msg bot">Bonjour ! ?? Je suis <strong>Nafi</strong>, l'assistante virtuelle d'Einstein Services. Comment puis-je vous aider ?</div>
      <div class="nafi-quick">
        <button data-q="Destinations d'�tudes">?? Destinations</button>
        <button data-q="Documents et d�marches">?? D�marches</button>
        <button data-q="Tester mon �ligibilit�">?? �ligibilit�</button>
        <button data-q="Parler � un conseiller">?? Conseiller</button>
      </div>
    </div>
    <form class="nafi-input" id="nafiForm">
      <input id="nafiText" type="text" placeholder="�crivez votre question�" autocomplete="off" />
      <button type="submit" aria-label="Envoyer">?</button>
    </form>
  </div>
  <button class="nafi-toggle" id="nafiToggle" aria-label="Ouvrir le chat">
    <span>??</span>
  </button>
</div>`;

const nafiWidgetWrap = document.createElement("div");
nafiWidgetWrap.innerHTML = NAFI_HTML;
document.body.appendChild(nafiWidgetWrap);

const nafiPanel = document.getElementById("nafiPanel");
const nafiToggle = document.getElementById("nafiToggle");
const nafiClose = document.getElementById("nafiClose");
const nafiBody = document.getElementById("nafiBody");
const nafiForm = document.getElementById("nafiForm");
const nafiText = document.getElementById("nafiText");

nafiToggle.addEventListener("click", () => {
  nafiPanel.hidden = !nafiPanel.hidden;
  nafiToggle.classList.toggle("hidden", !nafiPanel.hidden);
  if (!nafiPanel.hidden) nafiText.focus();
});
nafiClose.addEventListener("click", () => {
  nafiPanel.hidden = true;
  nafiToggle.classList.remove("hidden");
});

function nafiAdd(text, who) {
  const div = document.createElement("div");
  div.className = "nafi-msg " + who;
  text.split("\n").forEach((line, i) => {
    if (i) div.appendChild(document.createElement("br"));
    div.appendChild(document.createTextNode(line));
  });
  // Transforme les liens cit�s en liens cliquables
  div.innerHTML = div.innerHTML.replace(
    /(test-eligibilite\.html|test-orientation\.html|formations\.html|index\.html#contact|https:\/\/wa\.me\/\d+)/g,
    '<a href="$1" target="_blank" rel="noopener">$1</a>',
  );
  nafiBody.appendChild(div);
  nafiBody.scrollTop = nafiBody.scrollHeight;
  nafiSave(text, who === "bot" ? "nafi" : "utilisateur");
}

function nafiReply(question) {
  const q = question.toLowerCase();
  const hit = NAFI_REPLIES.find((r) => r.kw.some((k) => q.includes(k)));
  setTimeout(
    () => nafiAdd(hit ? hit.r : NAFI_FALLBACK, "bot"),
    450 + Math.random() * 400,
  );
}

nafiForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const v = nafiText.value.trim();
  if (!v) return;
  nafiAdd(v, "user");
  nafiText.value = "";
  nafiReply(v);
});

nafiBody.querySelectorAll(".nafi-quick button").forEach((b) =>
  b.addEventListener("click", () => {
    nafiAdd(b.dataset.q, "user");
    nafiReply(b.dataset.q);
  }),
);
