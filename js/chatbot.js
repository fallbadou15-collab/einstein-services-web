/* ===== Chatbot Nafi — Einstein Services ===== */
/* Assistant virtuel 24h/24 (cahier des charges §09) :
   - répond aux questions fréquentes (destinations, démarches, calendrier, documents)
   - qualifie les prospects (niveau, projet, destination)
   - oriente vers le test d'éligibilité ou la prise de rendez-vous
   - transfère vers un conseiller humain (page contact)
   Règle : Nafi ne communique AUCUN tarif — il redirige vers un conseiller. */

const NAFI_CONTACT_EMAIL = "contact@einsteinservicesvoyages.com";
const NAFI_LINK_LABELS = {
  "test-eligibilite.html": "Faire le test d'éligibilité",
  "test-orientation.html": "Faire le test d'orientation",
  "formations.html": "Voir le catalogue des formations",
  "destinations.html": "Découvrir les destinations",
  "contact.html": "Ouvrir la page contact",
};

if (!document.querySelector(".u-whatsapp, .site-whatsapp")) {
  const whatsappLink = document.createElement("a");
  whatsappLink.className = "site-whatsapp";
  whatsappLink.href =
    "https://wa.me/221783876262?text=Bonjour%20Einstein%20Services%2C%20je%20souhaite%20des%20informations";
  whatsappLink.target = "_blank";
  whatsappLink.rel = "noopener";
  whatsappLink.setAttribute("aria-label", "Contacter Einstein Services sur WhatsApp");
  whatsappLink.innerHTML = "<span aria-hidden=\"true\">WA</span>";
  document.body.appendChild(whatsappLink);
}

/* ---------- Moteur de réponses ---------- */
const NAFI_REPLIES = [
  {
    kw: ["bonjour", "salut", "hello", "bonsoir", "coucou"],
    r: "Bonjour et bienvenue chez Einstein Services ! 😊 Je suis Nafi, votre assistante virtuelle. Comment puis-je vous aider ? Tapez « menu » pour voir tout ce que je peux faire.",
  },
  {
    kw: ["menu", "aide", "option", "choix", "help"],
    r: "Voici ce que je peux faire pour vous :\n1️⃣ Destinations d'études\n2️⃣ Démarches & documents (Campus France, visa…)\n3️⃣ Calendrier des candidatures\n4️⃣ Tester mon éligibilité\n5️⃣ Prendre rendez-vous\n6️⃣ Parler à un conseiller\n\nTapez simplement un mot-clé, par exemple « Canada », « visa » ou « rendez-vous ».",
  },
  {
    kw: ["destination", "pays", "études à l'étranger", "etudes a l'etranger"],
    r: "🌍 Nous accompagnons les projets d'études en France, au Canada, en Belgique, en Suisse et en Italie.\nConsultez les informations et démarches par pays : destinations.html\nQuel pays vous intéresse ?",
  },
  {
    kw: ["france", "campus france", "parcoursup", "etudes en france"],
    r: "🇫🇷 La France fait partie des destinations mentionnées par Einstein Services. Le cahier des charges cite Parcoursup et Campus France (« Études en France ») parmi les démarches d'admission.\nLe questionnaire Campus France est indicatif : la grille d'évaluation doit être confirmée par l'agence. Vous pouvez le consulter ici : test-eligibilite.html",
  },
  {
    kw: ["canada", "quebec", "québec", "montréal", "montreal", "toronto"],
    r: "🇨🇦 Le Canada fait partie des destinations d'études mentionnées dans le cahier des charges. Les établissements, formations, admissions, coûts et procédures de visa doivent être confirmés selon votre projet.",
  },
  {
    kw: ["belgique", "bruxelles", "liège", "liege"],
    r: "🇧🇪 La Belgique fait partie des destinations d'études mentionnées dans le cahier des charges. Les établissements, formations, admissions, coûts et procédures sont à confirmer selon votre projet.",
  },
  {
    kw: ["suisse", "genève", "geneve"],
    r: "🇨🇭 La Suisse fait partie des destinations d'études mentionnées dans le cahier des charges. Les établissements, formations, admissions, coûts et procédures sont à confirmer selon votre projet.",
  },
  {
    kw: ["italie", "italy", "rome", "milan"],
    r: "🇮🇹 L'Italie fait partie des destinations d'études mentionnées dans le cahier des charges. Les établissements, formations, admissions, coûts et procédures sont à confirmer selon votre projet.",
  },
  {
    kw: ["visa", "vls", "titre de séjour"],
    r: "🛂 Les services mentionnés comprennent l'assistance pour les visas études, tourisme et travail, la constitution du dossier, la prise de rendez-vous et la préparation à l'entretien. Les pièces et conditions varient selon la procédure et doivent être confirmées auprès de l'agence.",
  },
  {
    kw: ["document", "dossier", "papier", "pieces", "pièces", "releve", "relevé"],
    r: "📄 La liste des documents dépend du service, de la destination et de la procédure. Elle doit être confirmée par l'agence avant tout envoi. N'envoyez pas de document personnel ou financier dans ce chat.",
  },
  {
    kw: ["calendrier", "date", "deadline", "quand", "rentree", "rentrée", "candidature"],
    r: "📅 Les dates limites dépendent de l'établissement, de la destination et de la procédure. Consultez les sources officielles et demandez à l'agence les échéances applicables à votre projet.",
  },
  {
    kw: ["langue", "tcf", "delf", "ielts", "anglais", "français"],
    r: "🗣️ Les justificatifs et niveaux de langue requis dépendent de l'établissement et de la formation. Vérifiez les critères officiels et demandez à l'agence les exigences applicables à votre dossier.",
  },
  {
    kw: ["test", "eligibilite", "éligibilité", "eligible", "éligible", "profil"],
    r: "🎯 Le questionnaire Campus France recueille les critères indiqués dans le cahier des charges, mais ne délivre pas de verdict automatique tant que la grille d'évaluation n'est pas validée par l'agence : test-eligibilite.html\nLe questionnaire d'orientation prépare un récapitulatif à partager avec un conseiller : test-orientation.html",
  },
  {
    kw: ["logement", "hebergement", "hébergement", "residence", "résidence"],
    r: "🏠 Le cahier des charges mentionne le logement étudiant via Nexroom et une attestation d'hébergement pour le dossier de visa. Les disponibilités, tarifs et modalités sont à confirmer par l'agence.",
  },
  {
    kw: ["bourse", "financement", "argent", "budget", "cout", "coût", "frais"],
    r: "💰 Les services mentionnés comprennent l'AVI via Univers France Succès, des conseils sur les justificatifs de ressources et des informations sur les bourses. Les conditions et tarifs sont à confirmer auprès d'un conseiller.",
  },
  {
    kw: ["formation", "catalogue", "ecole", "école", "université", "universite", "master", "licence", "bts", "bachelor"],
    r: "🎓 Le catalogue officiel des formations et établissements partenaires est en attente des données à fournir par l'agence. La page sera complétée après validation : formations.html",
  },
  {
    kw: ["voyage", "billet", "avion", "hotel", "hôtel", "tourisme"],
    r: "✈️ Les services mentionnés comprennent les billets d'avion, les réservations d'hôtels, les séjours touristiques et les voyages d'affaires. Les visas affaires et visite familiale sont à confirmer par l'agence.",
  },
  {
    kw: ["rendez-vous", "rendez vous", "rdv", "appointment", "conseiller", "humain", "agent", "contact"],
    r:
      "📞 Très bien ! Pour parler à un conseiller humain :\n• Page contact : contact.html\n• Téléphone : +221 33 830 54 60\n• Email : " +
      NAFI_CONTACT_EMAIL +
      "\nOu via le formulaire de contact : contact.html",
  },
  {
    kw: ["tarif", "prix", "combien", "coute", "coûte", "paiement", "devis"],
    r: "🔒 Nafi ne communique pas de tarif. Contactez Einstein Services pour connaître les tarifs validés : contact.html",
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
        <button data-q="Tester mon éligibilité">🎯 Éligibilité</button>
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

/* Ouverture/fermeture : UNIQUEMENT au clic (jamais automatique) */
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
  const appendLine = (line) => {
    if (who !== "bot") {
      div.appendChild(document.createTextNode(line));
      return;
    }

    const linkPattern =
      /(test-eligibilite\.html|test-orientation\.html|formations\.html|destinations\.html|contact\.html)/g;
    let cursor = 0;
    for (const match of line.matchAll(linkPattern)) {
      div.appendChild(document.createTextNode(line.slice(cursor, match.index)));
      const link = document.createElement("a");
      link.href = match[0];
      link.textContent = NAFI_LINK_LABELS[match[0]];
      div.appendChild(link);
      cursor = match.index + match[0].length;
    }
    div.appendChild(document.createTextNode(line.slice(cursor)));
  };

  text.split("\n").forEach((line, i) => {
    if (i) div.appendChild(document.createElement("br"));
    appendLine(line);
  });
  nafiBody.appendChild(div);
  nafiBody.scrollTop = nafiBody.scrollHeight;
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
