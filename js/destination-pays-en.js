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
  Maroc: {
    flag: "img/flags/ma.svg",
    continent: "North Africa",
    langues: "Arabic / French",
    devise: "Moroccan dirham (MAD)",
    intro:
      "Study options include AMCI scholarships coordinated through Senegal's Direction des bourses, as well as direct applications to private institutions. Check current entry and residence requirements before applying.",
    facts: [
      ["🎓 Routes", "AMCI scholarship or direct application to an institution"],
      [
        "💰 Scholarships",
        "260 AMCI scholarships were announced for Senegal for 2026–27; verify the next call",
      ],
      [
        "🏠 Accommodation",
        "Costs vary by city and institution; confirm the budget with the school",
      ],
      ["🗣️ Language", "Arabic and French; some programmes use other languages"],
      [
        "🛂 Residence",
        "Check entry formalities and apply for a student residence card after arrival when required",
      ],
    ],
    steps: [
      "Check the latest AMCI call or choose an institution for direct admission",
      "Confirm eligibility and application deadlines",
      "Prepare diplomas, transcripts, passport and admission or scholarship documents",
      "Verify entry formalities with the Moroccan Embassy in Dakar",
      "Complete student residence procedures after arrival, if required",
    ],
  },
  Allemagne: {
    flag: "img/flags/de.svg",
    continent: "Europe",
    langues: "German / English",
    devise: "Euro (€)",
    intro:
      "German public universities often have low tuition, but admission depends on how your previous diploma is recognised. A blocked account may be required for the student visa.",
    facts: [
      ["🎓 System", "Direct admission or a Studienkolleg, depending on your diploma"],
      [
        "💰 Proof of funds",
        "The source guide lists €11,904 for a blocked account in 2026; verify the current amount",
      ],
      [
        "💶 Tuition fees",
        "Many public universities charge no general tuition; exceptions and semester fees apply",
      ],
      ["🗣️ Language", "German or English, depending on the programme"],
      ["🛂 Visa", "National student visa (type D)"],
      [
        "💼 Working",
        "Work limits apply to international students; confirm the current rules",
      ],
    ],
    steps: [
      "Check how your diploma is recognised in the anabin database",
      "Confirm whether you need a Studienkolleg or can apply directly",
      "Apply through uni-assist or directly to the university",
      "Meet the language requirements and obtain admission",
      "Arrange the required proof of funds and apply for a national student visa",
    ],
  },
  Turquie: {
    flag: "img/flags/tr.svg",
    continent: "Europe / Asia",
    langues: "Turkish / English",
    devise: "Turkish lira (TRY)",
    intro:
      "Applicants can pursue the Türkiye Scholarships programme or apply directly to a public or private university. Visa and residence requirements depend on the chosen route.",
    facts: [
      ["🎓 Routes", "Türkiye Scholarships or direct university admission"],
      [
        "💰 Scholarship",
        "The scholarship programme may cover tuition and living support; check the current call",
      ],
      [
        "🗣️ Language",
        "Turkish or English; French-language programmes are also available at some institutions",
      ],
      ["🛂 After admission", "Study visa, followed by a residence permit after arrival"],
    ],
    steps: [
      "Choose the scholarship route or apply directly to a university",
      "Prepare transcripts, diplomas, a motivation letter and recommendations",
      "Apply during the official scholarship window or the university's deadline",
      "Complete any interview or language requirements",
      "Apply for the study visa and then the residence permit",
    ],
  },
  Roumanie: {
    flag: "img/flags/ro.svg",
    continent: "Europe",
    langues: "Romanian / English / French",
    devise: "Romanian leu (RON)",
    intro:
      "Some Romanian universities offer programmes in English or French. The study acceptance letter issued through the Ministry of Education is a key part of the application process.",
    facts: [
      ["🎓 System", "Programmes in Romanian, English or French, depending on the institution"],
      [
        "💰 Tuition fees",
        "Fees are set by the programme and are generally payable in euros",
      ],
      [
        "🗣️ Language",
        "A preparatory Romanian-language year may be required for some programmes",
      ],
      [
        "🛂 Visa",
        "Obtain the study acceptance letter, then apply for a study visa",
      ],
      [
        "🎓 Scholarships",
        "Government scholarship calls and eligibility vary by year",
      ],
    ],
    steps: [
      "Choose a university and confirm its language of instruction",
      "Submit the application with certified translations where required",
      "Obtain the study acceptance letter through the Ministry of Education",
      "Pay tuition according to the institution's instructions",
      "Apply for the study visa and prepare for arrival",
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
  const countryNames = {
    Belgique: "Belgium",
    Suisse: "Switzerland",
    Italie: "Italy",
    Maroc: "Morocco",
    Allemagne: "Germany",
    Turquie: "Türkiye",
    Roumanie: "Romania",
  };
  const countryName = countryNames[pays] || pays;
  document.title = `Studying in ${countryName} — Einstein Services`;
  els.headTitle.textContent = `${countryName} — Study destination | Einstein Services`;

  els.flag.src = data.flag;
  els.flag.alt = `Flag: ${pays}`;
  els.flag.hidden = false;
  els.name.textContent = countryName;
  els.meta.innerHTML = `<span class="dest-continent">${data.continent}</span> · 🗣️ ${data.langues} · 💱 ${data.devise}`;
  els.intro.textContent = data.intro;
  els.cta.href = `contact-en.html?destination=${encodeURIComponent(countryName)}`;

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
