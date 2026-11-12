/* ===== Chatbot Nafi — Einstein Services ===== */
/* Assistant virtuel 24h/24 (cahier des charges §09) :
   - répond aux questions fréquentes (destinations, démarches, calendrier, documents)
   - qualifie les prospects (niveau, projet, destination)
   - oriente vers le test d'éligibilité ou la prise de rendez-vous
   - transfère vers un conseiller humain (page contact)
   Règle : Nafi ne communique AUCUN tarif — il redirige vers un conseiller. */

const NAFI_CONTACT_EMAIL = "contact@einstein-services.com";
const NAFI_IS_ENGLISH = document.documentElement.lang === "en";
const NAFI_LINK_LABELS = {
  "test-eligibilite.html": NAFI_IS_ENGLISH ? "Take the eligibility test" : "Faire le test d'éligibilité",
  "test-orientation.html": NAFI_IS_ENGLISH ? "Take the guidance test" : "Faire le test d'orientation",
  "formations.html": NAFI_IS_ENGLISH ? "Browse programmes" : "Voir le catalogue des formations",
  "destinations.html": NAFI_IS_ENGLISH ? "Explore destinations" : "Découvrir les destinations",
  "service-admissions.html": NAFI_IS_ENGLISH ? "View admissions information" : "Voir les informations sur les admissions",
  "contact.html": NAFI_IS_ENGLISH ? "Open the contact page" : "Ouvrir la page contact",
};

if (
  !document.body.hasAttribute("data-no-floating-whatsapp") &&
  !document.querySelector(".u-whatsapp, .site-whatsapp")
) {
  const whatsappLink = document.createElement("a");
  whatsappLink.className = "site-whatsapp";
  whatsappLink.href =
    NAFI_IS_ENGLISH
      ? "https://wa.me/221787927373?text=Hello%20Einstein%20Services%2C%20I%20would%20like%20some%20information"
      : "https://wa.me/221787927373?text=Bonjour%20Einstein%20Services%2C%20je%20souhaite%20des%20informations";
  whatsappLink.target = "_blank";
  whatsappLink.rel = "noopener";
  whatsappLink.setAttribute(
    "aria-label",
    NAFI_IS_ENGLISH
      ? "Contact Einstein Services on WhatsApp"
      : "Contacter Einstein Services sur WhatsApp",
  );
  whatsappLink.innerHTML = "<span aria-hidden=\"true\">WA</span>";
  document.body.appendChild(whatsappLink);
}

const siteFooter =
  document.querySelector(".u-footer") ||
  document.querySelector("footer.footer") ||
  Array.from(document.querySelectorAll("footer")).pop();
if (siteFooter && !siteFooter.querySelector(".footer-about-link")) {
  const aboutLink = document.createElement("a");
  aboutLink.className = "footer-about-link";
  aboutLink.href = NAFI_IS_ENGLISH ? "agence-en.html" : "agence.html";
  aboutLink.textContent = NAFI_IS_ENGLISH ? "About us" : "À propos";

  const linksContainer =
    siteFooter.querySelector(".footer-links") ||
    siteFooter.querySelector(".u-footer-bottom .u-container") ||
    siteFooter.querySelector(".footer-inner") ||
    siteFooter;
  if (linksContainer.classList.contains("footer-links")) {
    linksContainer.appendChild(document.createTextNode(" · "));
  } else if (linksContainer.querySelector("a")) {
    linksContainer.appendChild(document.createTextNode(" · "));
  }
  linksContainer.appendChild(aboutLink);
}
if (siteFooter && !siteFooter.querySelector(".site-credit")) {
  const creditContainer =
    siteFooter.querySelector(".u-footer-bottom .u-container") ||
    siteFooter.querySelector(".footer-inner") ||
    siteFooter;
  const credit = document.createElement("p");
  credit.className = "site-credit";
  credit.textContent = NAFI_IS_ENGLISH
    ? "Website designed by SUNU DIGITAL"
    : "Site réalisé par SUNU DIGITAL";
  creditContainer.appendChild(credit);
}

/* ---------- Moteur de réponses ---------- */
const NAFI_REPLIES = [
  {
    kw: ["l1", "l2", "l3", "master 1", "master 2", "bts 1", "bts 2", "dut 1", "dut 2", "disep", "terminale", "bachelier 2026", "bachelier 2027", "bac 2027", "documents admission", "documents a fournir", "liste de documents", "checklist"],
    r: "📄 Les visuels de la page admissions détaillent les documents pour la terminale, le bac 2026 (entrée en L1), la L3, les Masters 1 et 2, le BTS 2 et le DUT 2. Les listes pour la L2, le BTS 1, le DUT 1 et le DISEP ne sont pas encore détaillées. Pour les bacheliers 2027, les critères d'éligibilité sont affichés, mais la liste des documents reste à confirmer par l'agence : service-admissions.html\nNe partagez pas de documents personnels ou financiers dans ce chat.",
  },
  {
    kw: ["bonjour", "salut", "hello", "bonsoir", "coucou", "hi", "good morning", "good evening"],
    r: "Bonjour et bienvenue chez Einstein Services ! 😊 Je suis Nafi, votre assistante virtuelle. Comment puis-je vous aider ? Tapez « menu » pour voir tout ce que je peux faire.",
  },
  {
    kw: ["menu", "aide", "option", "choix", "help", "options"],
    r: "Voici ce que je peux faire pour vous :\n1️⃣ Destinations d'études\n2️⃣ Démarches & documents (Campus France, visa…)\n3️⃣ Calendrier des candidatures\n4️⃣ Tester mon éligibilité\n5️⃣ Prendre rendez-vous\n6️⃣ Parler à un conseiller\n\nTapez simplement un mot-clé, par exemple « Canada », « visa » ou « rendez-vous ».",
  },
  {
    kw: ["destination", "destinations", "pays", "études à l'étranger", "etudes a l'etranger", "study abroad", "study destinations"],
    r: "🌍 Nous accompagnons les projets d'études en France, au Canada, en Belgique, en Suisse et en Italie.\nConsultez les informations et démarches par pays : destinations.html\nQuel pays vous intéresse ?",
  },
  {
    kw: ["france", "campus france", "parcoursup", "etudes en france", "study in france"],
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
    kw: ["visa", "vls", "titre de séjour", "residence permit"],
    r: "🛂 Les services mentionnés comprennent l'assistance pour les visas études, tourisme et travail, la constitution du dossier, la prise de rendez-vous et la préparation à l'entretien. Les pièces et conditions varient selon la procédure et doivent être confirmées auprès de l'agence.",
  },
  {
    kw: ["document", "dossier", "papier", "pieces", "pièces", "releve", "relevé", "documents", "paperwork", "transcript"],
    r: "📄 Les listes de documents actuellement publiées sont sur la page admissions : service-admissions.html. Les pièces dépendent aussi du parcours et de la procédure. Confirmez votre liste auprès de l'agence avant tout envoi. Ne partagez pas de document personnel ou financier dans ce chat.",
  },
  {
    kw: ["calendrier", "date", "deadline", "quand", "rentree", "rentrée", "candidature", "application deadline", "when"],
    r: "📅 Les dates limites dépendent de l'établissement, de la destination et de la procédure. Consultez les sources officielles et demandez à l'agence les échéances applicables à votre projet.",
  },
  {
    kw: ["langue", "tcf", "delf", "ielts", "anglais", "français", "language", "english"],
    r: "🗣️ Les justificatifs et niveaux de langue requis dépendent de l'établissement et de la formation. Vérifiez les critères officiels et demandez à l'agence les exigences applicables à votre dossier.",
  },
  {
    kw: ["test", "eligibilite", "éligibilité", "eligible", "éligible", "profil"],
    r: "🎯 Le questionnaire Campus France recueille les critères indiqués dans le cahier des charges, mais ne délivre pas de verdict automatique tant que la grille d'évaluation n'est pas validée par l'agence : test-eligibilite.html\nLe questionnaire d'orientation prépare un récapitulatif à partager avec un conseiller : test-orientation.html",
  },
  {
    kw: ["logement", "hebergement", "hébergement", "residence", "résidence", "housing", "accommodation"],
    r: "🏠 Le cahier des charges mentionne le logement étudiant via Nexroom et une attestation d'hébergement pour le dossier de visa. Les disponibilités, tarifs et modalités sont à confirmer par l'agence.",
  },
  {
    kw: ["bourse", "financement", "argent", "budget", "cout", "coût", "frais", "scholarship", "funding"],
    r: "💰 Les services mentionnés comprennent l'AVI via Univers France Succès, des conseils sur les justificatifs de ressources et des informations sur les bourses. Les conditions et tarifs sont à confirmer auprès d'un conseiller.",
  },
  {
    kw: ["formation", "catalogue", "ecole", "école", "université", "universite", "master", "licence", "bts", "bachelor", "programme", "degree"],
    r: "🎓 Le catalogue officiel des formations et établissements partenaires est en attente des données à fournir par l'agence. La page sera complétée après validation : formations.html",
  },
  {
    kw: ["voyage", "billet", "avion", "hotel", "hôtel", "tourisme", "flight", "travel"],
    r: "✈️ Les services mentionnés comprennent les billets d'avion, les réservations d'hôtels, les séjours touristiques et les voyages d'affaires. Les visas affaires et visite familiale sont à confirmer par l'agence.",
  },
  {
    kw: ["rendez-vous", "rendez vous", "rdv", "appointment", "conseiller", "humain", "agent", "contact", "speak to someone", "advisor"],
    r:
      "📞 Très bien ! Pour parler à un conseiller humain :\n• Page contact : contact.html\n• Téléphone : +221 33 830 54 60\n• Email : " +
      NAFI_CONTACT_EMAIL +
      "\nOu via le formulaire de contact : contact.html",
  },
  {
    kw: ["tarif", "prix", "combien", "coute", "coûte", "paiement", "devis", "price", "cost", "fee", "fees"],
    r: "🔒 Nafi ne communique pas de tarif. Contactez Einstein Services pour connaître les tarifs validés : contact.html",
  },
  {
    kw: ["merci", "super", "parfait", "top", "cool", "thank you", "thanks"],
    r: "Avec plaisir ! 😊 N'hésitez pas si vous avez d'autres questions. Bonne préparation de votre projet d'études !",
  },
  {
    kw: ["adresse", "où", "ou etes", "localisation", "bureau", "yoff", "address", "location", "office"],
    r: "📍 Nous sommes à Yoff (Dakar, Sénégal) : Route de l'Aéroport, près de la Senelec.\nTéléphones : +221 33 830 54 60 • +221 78 792 73 73 • +221 78 733 81 81",
  },
  {
    kw: ["qui es", "nafi", "robot", "humain", "personne", "who are you", "assistant"],
    r: "Je suis Nafi 🤖, l'assistante virtuelle d'Einstein Services, disponible 24h/24 ! Je réponds aux questions courantes et je vous mets en relation avec un conseiller humain dès que nécessaire.",
  },
];
const NAFI_FALLBACK =
  NAFI_IS_ENGLISH
    ? "I'm not sure I understood 🤔 Try a keyword such as “France”, “visa”, “documents”, “deadlines”, “housing” or “appointment”, or type “menu”."
    : "Je ne suis pas sûre d'avoir bien compris 🤔 Essayez un mot-clé comme « France », « visa », « documents », « calendrier », « logement », « formation » ou « rendez-vous ». Ou tapez « menu » pour voir les options.";
const NAFI_ENGLISH_REPLIES = [
  "📄 The admissions page lists documents for final-year students, 2026 high-school graduates (starting L1), L3, Master's 1 and 2, BTS 2 and DUT 2. Lists for L2, BTS 1, DUT 1 and DISEP are not yet provided. The 2027 high-school graduate eligibility criteria are available, but their document list still needs confirmation from the agency: service-admissions.html\nDo not share personal or financial documents in this chat.",
  "Hello and welcome to Einstein Services! 😊 I'm Nafi, your virtual assistant. How can I help? Type “menu” to see what I can do.",
  "Here are some ways I can help:\n1️⃣ Study destinations\n2️⃣ Applications and documents\n3️⃣ Application timelines\n4️⃣ Eligibility test\n5️⃣ Appointments\n6️⃣ Speak to an advisor\n\nTry a keyword such as “Canada”, “visa” or “appointment”.",
  "🌍 Einstein Services supports study projects in France, Canada, Belgium, Switzerland and Italy.\nExplore destinations here: destinations.html\nWhich country interests you?",
  "🇫🇷 France is one of the destinations supported by Einstein Services. Applications may involve Parcoursup or Campus France (“Études en France”). The eligibility questionnaire is indicative; the agency should confirm the applicable criteria: test-eligibilite.html",
  "🇨🇦 Canada is one of the study destinations mentioned by Einstein Services. Institutions, programmes, admissions and visa requirements should be confirmed for your project.",
  "🇧🇪 Belgium is one of the study destinations mentioned by Einstein Services. Institutions, programmes, admissions and procedures should be confirmed for your project.",
  "🇨🇭 Switzerland is one of the study destinations mentioned by Einstein Services. Institutions, programmes, admissions and procedures should be confirmed for your project.",
  "🇮🇹 Italy is one of the study destinations mentioned by Einstein Services. Institutions, programmes, admissions and procedures should be confirmed for your project.",
  "🛂 Support is available for study, tourism and work visa applications, including preparing an application, booking appointments and interview preparation. Requirements vary and should be confirmed with the agency.",
  "📄 Current document checklists are on the admissions page: service-admissions.html. Requirements also depend on your programme and procedure. Confirm your checklist with the agency before sending anything. Do not share personal or financial documents in this chat.",
  "📅 Deadlines depend on the institution, destination and procedure. Check official sources and ask the agency which dates apply to your project.",
  "🗣️ Language tests and levels depend on the institution and programme. Check official criteria and ask the agency which requirements apply to your application.",
  "🎯 The Campus France questionnaire collects information but does not provide an automatic eligibility decision. The agency should confirm the assessment criteria: test-eligibilite.html\nThe guidance questionnaire prepares a summary to share with an advisor: test-orientation.html",
  "🏠 Student accommodation support and accommodation certificates for visa applications are mentioned among the services. Availability, prices and arrangements should be confirmed with the agency.",
  "💰 Services include AVI support, advice about proof of funds and scholarship information. Conditions and prices should be confirmed with an advisor.",
  "🎓 The official catalogue of programmes and partner institutions is awaiting information from the agency. See the programmes page: formations.html",
  "✈️ Services include flight bookings, hotel reservations, tourist stays and business travel. Confirm availability and arrangements with the agency.",
  "📞 To speak with a human advisor:\n• Contact page: contact.html\n• Phone: +221 33 830 54 60\n• Email: " + NAFI_CONTACT_EMAIL,
  "🔒 Nafi does not provide prices. Contact Einstein Services for confirmed rates: contact.html",
  "You're welcome! 😊 Let me know if you have another question. Good luck with your study plans!",
  "📍 Our office is in Yoff, Dakar, Senegal: Airport Road, near Senelec.\nPhone: +221 33 830 54 60 • +221 78 792 73 73 • +221 78 733 81 81",
  "I'm Nafi 🤖, Einstein Services' virtual assistant. I can answer common questions and direct you to a human advisor when needed.",
];

/* ---------- Interface ---------- */
const NAFI_HTML = `
<div id="nafiWidget" aria-live="polite">
  <div class="nafi-panel" id="nafiPanel" role="dialog" aria-label="${NAFI_IS_ENGLISH ? "Chat with Nafi" : "Discussion avec Nafi"}" hidden>
    <div class="nafi-head">
      <div class="nafi-avatar">🤖</div>
      <div>
        <strong>Nafi</strong>
        <small>${NAFI_IS_ENGLISH ? "Einstein Services assistant — online" : "Assistante Einstein Services — en ligne"}</small>
      </div>
      <button class="nafi-close" id="nafiClose" aria-label="${NAFI_IS_ENGLISH ? "Close" : "Fermer"}">✕</button>
    </div>
    <div class="nafi-body" id="nafiBody">
      <div class="nafi-msg bot">${NAFI_IS_ENGLISH ? "Hello! 👋 I'm <strong>Nafi</strong>, Einstein Services' virtual assistant. How can I help?" : "Bonjour ! 👋 Je suis <strong>Nafi</strong>, l'assistante virtuelle d'Einstein Services. Comment puis-je vous aider ?"}</div>
      <div class="nafi-quick">
        <button data-q="${NAFI_IS_ENGLISH ? "Study destinations" : "Destinations d'études"}">🌍 ${NAFI_IS_ENGLISH ? "Destinations" : "Destinations"}</button>
        <button data-q="${NAFI_IS_ENGLISH ? "Documents and applications" : "Documents et démarches"}">📄 ${NAFI_IS_ENGLISH ? "Applications" : "Démarches"}</button>
        <button data-q="${NAFI_IS_ENGLISH ? "Eligibility test" : "Tester mon éligibilité"}">🎯 ${NAFI_IS_ENGLISH ? "Eligibility" : "Éligibilité"}</button>
        <button data-q="${NAFI_IS_ENGLISH ? "Speak to an advisor" : "Parler à un conseiller"}">💬 ${NAFI_IS_ENGLISH ? "Advisor" : "Conseiller"}</button>
      </div>
    </div>
    <form class="nafi-input" id="nafiForm">
      <input id="nafiText" type="text" placeholder="${NAFI_IS_ENGLISH ? "Type your question…" : "Écrivez votre question…"}" aria-label="${NAFI_IS_ENGLISH ? "Your question" : "Votre question"}" autocomplete="off" />
      <button type="submit" aria-label="${NAFI_IS_ENGLISH ? "Send" : "Envoyer"}">➤</button>
    </form>
  </div>
  <button class="nafi-toggle" id="nafiToggle" aria-label="${NAFI_IS_ENGLISH ? "Open chat with Nafi" : "Ouvrir le chat avec Nafi"}" aria-expanded="false" aria-controls="nafiPanel">
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
  nafiToggle.setAttribute("aria-expanded", String(!nafiPanel.hidden));
  nafiToggle.classList.toggle("hidden", !nafiPanel.hidden);
  if (!nafiPanel.hidden) nafiText.focus();
});
nafiClose.addEventListener("click", () => {
  nafiPanel.hidden = true;
  nafiToggle.classList.remove("hidden");
  nafiToggle.setAttribute("aria-expanded", "false");
  nafiToggle.focus();
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
      /(test-eligibilite\.html|test-orientation\.html|formations\.html|destinations\.html|service-admissions\.html|contact\.html)/g;
    let cursor = 0;
    for (const match of line.matchAll(linkPattern)) {
      div.appendChild(document.createTextNode(line.slice(cursor, match.index)));
      const link = document.createElement("a");
      link.href = NAFI_IS_ENGLISH
        ? match[0].replace(".html", "-en.html")
        : match[0];
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
  const normalize = (value) =>
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  const q = ` ${normalize(question)} `;
  const asksForDocuments =
    /\b(documents?|dossier|paperwork|checklist|transcript)\b/.test(q);
  const mentionsStudyLevel =
    /\b(l1|l2|l3|master 1|master 2|bts 1|bts 2|dut 1|dut 2|disep|terminale|bachelier 2026|bachelier 2027|bac 2027)\b/.test(q);
  const hit = NAFI_REPLIES
    .map((reply, index) => {
      const baseScore = reply.kw.reduce((total, keyword) => {
        const normalizedKeyword = normalize(keyword);
        return q.includes(` ${normalizedKeyword} `)
          ? total + 1 + normalizedKeyword.split(" ").length * 2 + normalizedKeyword.length / 100
          : total;
      }, 0);
      const score =
        baseScore + (index === 0 && asksForDocuments && mentionsStudyLevel ? 10 : 0);
      return { reply, index, score };
    })
    .filter((match) => match.score > 0)
    .sort((a, b) => b.score - a.score || a.index - b.index)[0];
  setTimeout(
    () => {
      if (!hit) {
        nafiAdd(NAFI_FALLBACK, "bot");
        return;
      }
      nafiAdd(
        NAFI_IS_ENGLISH ? NAFI_ENGLISH_REPLIES[hit.index] : hit.reply.r,
        "bot",
      );
    },
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
