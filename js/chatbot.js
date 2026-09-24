/* ===== Chatbot Nafi — Einstein Services ===== */
/* Assistant virtuel 24h/24 (cahier des charges §09) :
   - répond aux questions fréquentes (destinations, démarches, calendrier, documents)
   - qualifie les prospects (niveau, projet, destination)
   - oriente vers le test d'éligibilité ou la prise de rendez-vous
   - transfère vers un conseiller humain sur WhatsApp
   - enregistre les conversations (localStorage) pour le suivi commercial
   Règle : Nafi ne communique AUCUN tarif — il redirige vers un conseiller. */

const NAFI_WHATSAPP = "221783876262";
const NAFI_CONTACT_EMAIL = "contact@einsteinservicesvoyages.com";

/* ---------- Moteur de réponses ---------- */
const NAFI_REPLIES = [
  {
    kw: ["bonjour", "salut", "hello", "bonsoir", "coucou"],
    r: "Bonjour et bienvenue chez Einstein Services ! 👋 Je suis Nafi, votre assistante virtuelle. Comment puis-je vous aider ? Tapez « menu » pour voir tout ce que je peux faire.",
  },
  {
    kw: ["menu", "aide", "option", "choix", "help"],
    r: "Voici ce que je peux faire pour vous :\n1️⃣ Destinations d'études\n2️⃣ Démarches & documents (Campus France, visa…)\n3️⃣ Calendrier des candidatures\n4️⃣ Tester mon éligibilité\n5️⃣ Prendre rendez-vous\n6️⃣ Parler à un conseiller (WhatsApp)\n\nTapez simplement un mot-clé, par exemple « Canada », « visa » ou « rendez-vous ».",
  },
  {
    kw: ["france", "campus france", "parcoursup", "etudes en france"],
    r: "🇫🇷 La France est notre destination n°1 : universités, grandes écoles, BTS/BUT…\nLa procédure passe par Campus France (« Études en France ») ou Parcoursup selon votre situation.\nVous voulez savoir si votre profil est éligible ? Faites le test gratuit : test-eligibilite.html 👉",
  },
  {
    kw: ["canada", "quebec", "montréal", "montreal", "toronto"],
    r: "🇨🇦 Le Canada est très demandé : collèges (DEC technique), universités, possibilité de permis de travail post-diplôme.\nRentrées principales : août et septembre. Il faut s'y prendre plusieurs mois à l'avance !\nVoulez-vous passer au test d'éligibilité pour vérifier votre dossier ?",
  },
  {
    kw: ["belgique", "bruxelles"],
    r: "🇧🇪 La Belgique offre un excellent rapport qualité/prix : hautes écoles et universités francophones reconnues, coût de la vie raisonnable et villes à taille humaine (Bruxelles, Liège…).",
  },
  {
    kw: ["suisse", "genève", "geneve"],
    r: "🇨🇭 La Suisse : excellence académique, débouchés solides, qualité de vie exceptionnelle. Les frais universitaires sont modérés mais le coût de la vie est élevé — un budget solide est nécessaire.",
  },
  {
    kw: ["italie", "italy", "rome", "milan"],
    r: "🇮🇹 L'Italie : universités historiques, frais accessibles (souvent selon les revenus de la famille) et de plus en plus de cursus en anglais. Villes phares : Rome, Milan, Bologne.",
  },
  {
    kw: ["visa", "vls", "titre de séjour"],
    r: "🛂 Pour le visa étudiant, il faut généralement : une admission confirmée, un justificatif de financement, un logement et une assurance. Nous vous accompagnons à chaque étape, y compris la préparation du rendez-vous consulaire.\nSouhaitez-vous un rendez-vous avec un conseiller ?",
  },
  {
    kw: ["document", "dossier", "papier", "pieces", "pièces", "releve", "relevé"],
    r: "📄 Documents généralement demandés : relevés de notes et diplômes (traduits si besoin), pièce d'identité/passeport, CV, lettre de motivation, justificatif de langue (TCF/DELF/IELTS), preuve de financement.\nJe peux vous orienter vers un conseiller pour une checklist personnalisée. Dites « conseiller » !",
  },
  {
    kw: ["calendrier", "date", "deadline", "quand", "rentree", "rentrée", "candidature"],
    r: "📅 Repères généraux :\n• France : Campus France/Parcoursup entre novembre et mars selon la procédure\n• Canada : candidatures souvent avant janvier-mars pour la rentrée d'automne\n• Belgique/Suisse/Italie : printemps à début d'été\nLe plus tôt est le mieux ! Consultez le catalogue : formations.html",
  },
  {
    kw: ["langue", "tcf", "delf", "ielts", "anglais", "français"],
    r: "🗣️ Pour la France, un niveau B2 en français (TCF/DELF) est généralement demandé. Pour les cursus en anglais (Canada, Italie…), prévoyez l'IELTS (souvent 6.0–6.5).\nNous vous aidons à planifier votre test de langue. Dites « rendez-vous » pour être accompagné.",
  },
  {
    kw: ["test", "eligibilite", "éligibilité", "eligible", "profil"],
    r: "✅ Le test d'éligibilité évalue gratuitement la faisabilité de votre projet (niveau, langue, financement, calendrier). C'est le meilleur point de départ : test-eligibilite.html\nEt pour votre orientation : test-orientation.html",
  },
  {
    kw: ["logement", "hebergement", "hébergement", "residence", "résidence"],
    r: "🏠 Nous proposons une assistance logement : résidences étudiantes, CROUS en France, colocations. L'attestation de logement est aussi souvent requise pour le visa.\nUn conseiller peut vous détailler les options : tapez « conseiller ».",
  },
  {
    kw: ["bourse", "financement", "argent", "budget", "cout", "coût", "frais"],
    r: "💰 Le financement se prépare tôt : justificatif de ressources, AVI, garant… Des bourses existent (Eiffel, bourses régionales, établissements). Je ne peux pas vous communiquer de tarifs — un conseiller se charge de l'aspect financier avec vous. Tapez « conseiller » ou « rendez-vous ».",
  },
  {
    kw: ["formation", "catalogue", "ecole", "école", "université", "universite", "master", "licence", "bts", "bachelor"],
    r: "🎓 Notre catalogue référence les formations de nos établissements partenaires avec des filtres (pays, niveau, domaine, langue…). Direction : formations.html",
  },
  {
    kw: ["voyage", "billet", "avion", "hotel", "hôtel", "tourisme"],
    r: "✈️ Einstein Services c'est aussi la billetterie : billets d'avion, réservations d'hôtels, visas de tourisme et d'affaires. Un conseiller s'occupe de votre demande : tapez « conseiller ».",
  },
  {
    kw: ["rendez-vous", "rendez vous", "rdv", "appointment", "conseiller", "humain", "agent", "contact"],
    r:
      "👋 Très bien ! Pour parler à un conseiller humain :\n• WhatsApp direct : https://wa.me/" + NAFI_WHATSAPP + "\n• Téléphone : +221 33 830 54 60\n• Email : " + NAFI_CONTACT_EMAIL + "\nOu via le formulaire de contact en page d'accueil : index.html#contact",
  },
  {
    kw: ["tarif", "prix", "combien", "coute", "coûte", "paiement", "devis"],
    r: "📋 Notre règle : Nafi ne communique aucun tarif, pour garantir une information exacte et personnalisée. Un conseiller vous répond très vite sur WhatsApp : https://wa.me/" + NAFI_WHATSAPP,
  },
  {
    kw: ["merci", "super", "parfait", "top", "cool"],
    r: "Avec plaisir ! 😊 N'hésitez pas si vous avez d'autres questions. Bonne préparation de votre projet d'études !",
  },
  {
    kw: ["adresse", "où", "ou etes", "localisation", "bureau", "yoff"],
    r: "📍 Nous sommes à Yoff (Dakar, Sénégal) : Route de l'Aéroport, près de la Senelec.\nTéléphones : +221 33 830 54 60 • +221 78 387 62 62 • +221 78 733 81 81",
  },
  {
    kw: ["qui es", "nafi", "robot", "humain", "personne"],
    r: "Je suis Nafi 🤖, l'assistante virtuelle d'Einstein Services, disponible 24h/24 ! Je réponds aux questions courantes et je vous mets en relation avec un conseiller humain dès que nécessaire.",
  },
];
const NAFI_FALLBACK =
  "Je ne suis pas sûre d'avoir bien compris 🤔 Essayez un mot-clé comme « France », « visa », « documents », « calendrier », « logement », « formation » ou « rendez-vous ». Ou tapez « menu » pour voir les options.";

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
      <div class="nafi-avatar">🤖</div>
      <div>
        <strong>Nafi</strong>
        <small>Assistant Einstein Services — en ligne</small>
      </div>
      <button class="nafi-close" id="nafiClose" aria-label="Fermer">✕</button>
    </div>
    <div class="nafi-body" id="nafiBody">
      <div class="nafi-msg bot">Bonjour ! 👋 Je suis <strong>Nafi</strong>, l'assistante virtuelle d'Einstein Services. Comment puis-je vous aider ?</div>
      <div class="nafi-quick">
        <button data-q="Destinations d'études">🌍 Destinations</button>
        <button data-q="Documents et démarches">📄 Démarches</button>
        <button data-q="Tester mon éligibilité">✅ Éligibilité</button>
        <button data-q="Parler à un conseiller">💬 Conseiller</button>
      </div>
    </div>
    <form class="nafi-input" id="nafiForm">
      <input id="nafiText" type="text" placeholder="Écrivez votre question…" autocomplete="off" />
      <button type="submit" aria-label="Envoyer">➤</button>
    </form>
  </div>
  <button class="nafi-toggle" id="nafiToggle" aria-label="Ouvrir le chat">
    <span>💬</span>
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

/* Le chat ne s'ouvre JAMAIS tout seul : uniquement sur clic du bouton */
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
  // Transforme les liens cités en liens cliquables
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
