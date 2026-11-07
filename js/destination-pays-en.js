/* ===== Country destination card — data to be confirmed by the agency ===== */
const PAYS_DATA = {
  France: {
    flag: "img/flags/fr.svg",
    continent: "Europe",
    langues: "French",
    devise: "Euro (€)",
    intro:
      "The leading French-speaking destination, France offers public universities, grandes écoles and specialised schools recognised across Europe. Procedures are centralised via Campus France and Parcoursup depending on your profile.",
    facts: [
      [
        "🎓 System",
        "Bachelor's (Licence, 3 years), Master's (2 years), BTS, engineering and business schools",
      ],
      [
        "💰 Tuition fees",
        "Public universities: approx. €170 to €3,900/year; private schools higher",
      ],
      [
        "🏠 Cost of living",
        "Approx. €600 to €1,000/month depending on the city (Paris higher)",
      ],
      [
        "🗣️ Language",
        "French; some programmes available in English (TCF/DELF depending on the institution)",
      ],
      [
        "🛂 Visa",
        "VLS-TS 'student' via Campus France: interview and file preparation",
      ],
      [
        "💼 Working",
        "Allowed alongside studies within the current legal limit",
      ],
    ],
    steps: [
      "Choosing the programme and institution with an adviser",
      "Campus France / Parcoursup file depending on your level",
      "Campus France interview then admission",
      "Student visa application (VLS-TS)",
      "Housing search and departure preparation",
    ],
  },
  Canada: {
    flag: "img/flags/ca.svg",
    continent: "North America",
    langues: "French / English",
    devise: "Canadian dollar (CAD)",
    intro:
      "Canada combines quality education, bilingualism and post-study immigration prospects. Quebec offers many French-language programmes, notably in Montreal and Quebec City.",
    facts: [
      ["🎓 System", "Bachelor's (3-4 years), Master's, DEC/CEGEP in Quebec"],
      [
        "💰 Tuition fees",
        "Approx. CAD 8,000 to 30,000/year depending on province and programme",
      ],
      [
        "🏠 Cost of living",
        "Approx. CAD 800 to 1,500/month depending on the city",
      ],
      [
        "🗣️ Language",
        "French (Quebec) or English; TEF/IELTS tests depending on the programme",
      ],
      [
        "🛂 Visa",
        "Study permit + Quebec Acceptance Certificate (CAQ) for Quebec",
      ],
      ["💼 Working", "Permit included: part-time work during terms"],
    ],
    steps: [
      "Choosing the programme, province and budget",
      "Direct application to the institution",
      "Obtaining the acceptance letter",
      "CAQ (if Quebec) then study permit",
      "Financial proof and departure preparation",
    ],
  },
  Belgique: {
    flag: "img/flags/be.svg",
    continent: "Europe",
    langues: "French / Dutch",
    devise: "Euro (€)",
    intro:
      "Tuition fees among the most affordable in Western Europe and recognised universities (UCLouvain, ULB, KU Leuven…). Ideal for a controlled budget close to France.",
    facts: [
      [
        "🎓 System",
        "Bachelor's (3 years), Master's (1-2 years), university colleges",
      ],
      [
        "💰 Tuition fees",
        "Approx. €850 to €4,500/year depending on the community and status",
      ],
      ["🏠 Cost of living", "Approx. €700 to €1,000/month"],
      [
        "🗣️ Language",
        "French or Dutch depending on the institution; English programmes",
      ],
      ["🛂 Visa", "D 'studies' visa with certificate of enrolment"],
      ["💼 Working", "A student job is possible within the legal framework"],
    ],
    steps: [
      "Choosing the institution (French or Flemish community)",
      "Enrolment application and diploma equivalence",
      "Certificate of enrolment issued",
      "Student D visa application",
      "Housing and health insurance",
    ],
  },
  Suisse: {
    flag: "img/flags/ch.svg",
    continent: "Europe",
    langues: "French / German",
    devise: "Swiss franc (CHF)",
    intro:
      "Outstanding quality of education (EPFL, UNIL, UNIGE…) and student wages among the highest in Europe. High cost of living, but reasonable public university fees.",
    facts: [
      [
        "🎓 System",
        "Bachelor's (3 years), Master's (2 years), universities of applied sciences",
      ],
      [
        "💰 Tuition fees",
        "Approx. CHF 1,000 to 2,000/year for public universities",
      ],
      ["🏠 Cost of living", "Approx. CHF 1,200 to 2,000/month"],
      [
        "🗣️ Language",
        "French, German or English depending on the canton and programme",
      ],
      ["🛂 Visa", "B 'studies' residence permit from the canton"],
      [
        "💼 Working",
        "Allowed after a 6-month waiting period, within the legal limit",
      ],
    ],
    steps: [
      "Choosing the university and checking equivalences",
      "Admission file and fee payment",
      "Enrolment confirmation",
      "Visa and residence permit application",
      "Housing (early planning recommended)",
    ],
  },
  Italie: {
    flag: "img/flags/it.svg",
    continent: "Europe",
    langues: "Italian",
    devise: "Euro (€)",
    intro:
      "Historic universities and renowned design schools, with affordable public fees calculated on family income (DSU scholarship possible). An attractive destination for the budget.",
    facts: [
      [
        "🎓 System",
        "Laurea triennale (3 years), laurea magistrale (2 years), art academies",
      ],
      ["💰 Tuition fees", "Approx. €500 to €4,000/year, often income-indexed"],
      [
        "🏠 Cost of living",
        "Approx. €600 to €1,000/month depending on the city",
      ],
      [
        "🗣️ Language",
        "Italian; many English-language programmes (test required)",
      ],
      [
        "🛂 Visa",
        "Visto per motivi di studio via Universitaly (pre-enrolment)",
      ],
      ["💼 Working", "Student jobs possible within the legal limit"],
    ],
    steps: [
      "Pre-enrolment on Universitaly",
      "Italian language test (CILS/CELI) or English depending on the programme",
      "Admission and enrolment",
      "Student visa application",
      "Residence permit and housing on arrival",
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
    `Studying in ${pays === "Belgique" ? "Belgium" : pays === "Suisse" ? "Switzerland" : pays} — Einstein Services`
      .replace("in Canada", "in Canada")
      .replace("in France", "in France")
      .replace("in Belgique", "in Belgium")
      .replace("in Suisse", "in Switzerland")
      .replace("in Italie", "in Italy");
  els.headTitle.textContent = `${pays === "Belgique" ? "Belgium" : pays === "Suisse" ? "Switzerland" : pays} — Study destination | Einstein Services`;

  els.flag.src = data.flag;
  els.flag.alt = `Flag: ${pays}`;
  els.flag.hidden = false;
  els.name.textContent =
    pays === "Belgique"
      ? "Belgium"
      : pays === "Suisse"
        ? "Switzerland"
        : pays === "Italie"
          ? "Italy"
          : pays;
  els.meta.innerHTML = `<span class="dest-continent">${data.continent}</span> · 🗣️ ${data.langues} · 💱 ${data.devise}`;
  els.intro.textContent = data.intro;
  els.cta.href = `contact-en.html?destination=${encodeURIComponent(pays === "Belgique" ? "Belgium" : pays === "Suisse" ? "Switzerland" : pays === "Italie" ? "Italy" : pays)}`;

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
