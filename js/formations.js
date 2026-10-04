/* Official course data must be supplied and approved by the agency. */
const FORMATIONS = [];

const grid = document.getElementById("formationsGrid");
const filters = {
  pays: document.getElementById("fPays"),
  ville: document.getElementById("fVille"),
  niveau: document.getElementById("fNiveau"),
  domaine: document.getElementById("fDomaine"),
  langue: document.getElementById("fLangue"),
  rentree: document.getElementById("fRentree"),
  frais: document.getElementById("fFrais"),
};
const fReset = document.getElementById("fReset");
const fCount = document.getElementById("fCount");
const noResult = document.getElementById("noResult");

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function matchesFilter(value, filter) {
  return !filter.value || value === filter.value;
}

function formationCard(formation) {
  return `
    <article class="card formation-card">
      <div class="formation-top">
        <span class="tag">${escapeHtml(formation.niveau)}</span>
        <span class="tag tag-country">${escapeHtml(formation.pays)} — ${escapeHtml(formation.ville)}</span>
      </div>
      <h3>${escapeHtml(formation.titre)}</h3>
      <p class="formation-etab">${escapeHtml(formation.etab)}</p>
      <ul class="formation-facts">
        <li>📅 Rentrée : ${escapeHtml(formation.rentree)}</li>
        <li>⏱️ Durée : ${escapeHtml(formation.duree)}</li>
        <li>🗣️ Langue : ${escapeHtml(formation.langue)}</li>
        <li>💰 Frais : ${escapeHtml(formation.frais)}</li>
        <li>📌 Candidature avant : ${escapeHtml(formation.deadline)}</li>
      </ul>
      <details class="formation-details">
        <summary>Conditions d'admission &amp; débouchés</summary>
        <p><strong>Conditions :</strong> ${escapeHtml(formation.conditions)}</p>
        <p><strong>Débouchés :</strong> ${escapeHtml(formation.debouches)}</p>
      </details>
      <a class="btn btn-orange" href="contact.html?formation=${encodeURIComponent(formation.titre)}">Je candidate avec Einstein Services</a>
    </article>`;
}

function populateOptions(filter, key, label) {
  const options = [...new Set(FORMATIONS.map((formation) => formation[key]))]
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b, "fr"));

  filter.replaceChildren(new Option(label, ""));
  options.forEach((value) => filter.add(new Option(value, value)));
}

function render() {
  const selected = FORMATIONS.filter(
    (formation) =>
      matchesFilter(formation.pays, filters.pays) &&
      matchesFilter(formation.ville, filters.ville) &&
      matchesFilter(formation.niveau, filters.niveau) &&
      matchesFilter(formation.domaine, filters.domaine) &&
      (!filters.langue.value ||
        formation.langue
          .toLocaleLowerCase("fr")
          .includes(filters.langue.value.toLocaleLowerCase("fr"))) &&
      matchesFilter(formation.rentree, filters.rentree) &&
      matchesFilter(formation.frais, filters.frais),
  );

  grid.innerHTML = selected.map(formationCard).join("");
  grid.classList.add("visible");
  noResult.hidden = selected.length > 0;
  fCount.textContent = selected.length
    ? `${selected.length} formation${selected.length > 1 ? "s" : ""} correspondent à vos critères`
    : "";
}

Object.values(filters).forEach((filter) =>
  filter.addEventListener("change", render),
);

populateOptions(filters.ville, "ville", "Toutes les villes");
populateOptions(filters.rentree, "rentree", "Toutes les rentrées");
populateOptions(filters.frais, "frais", "Tous les frais");

fReset.addEventListener("click", () => {
  Object.values(filters).forEach((filter) => {
    filter.value = "";
  });
  render();
});

render();
