import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const voidElements = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

const routes = [
  { key: "agency", fr: "agence.html", en: "agence-en.html" },
  { key: "services", fr: "services.html", en: "services-en.html" },
  {
    key: "destinations",
    fr: "destinations.html",
    en: "destinations-en.html",
  },
  { key: "courses", fr: "formations.html", en: "formations-en.html" },
  { key: "testimonials", fr: "temoignages.html", en: "temoignages-en.html" },
  { key: "avi", fr: "avi.html", en: "avi-en.html" },
  { key: "fees", fr: "tarifs.html", en: "tarifs-en.html" },
  {
    key: "eligibility",
    fr: "test-eligibilite.html",
    en: "test-eligibilite-en.html",
  },
  { key: "contact", fr: "contact.html", en: "contact-en.html" },
];

function getDirectBodyBlocks(html, wantedTags, fileName) {
  const tokenPattern =
    /<!--[\s\S]*?-->|<![^>]*>|<\/?([a-z][\w:-]*)\b[^>]*>/gi;
  const stack = [];
  const openBlocks = [];
  const blocks = new Map(wantedTags.map((tag) => [tag, []]));
  let match;

  while ((match = tokenPattern.exec(html))) {
    const token = match[0];
    if (token.startsWith("<!--") || token.startsWith("<!")) continue;

    const tag = match[1].toLowerCase();
    const isClosing = token.startsWith("</");

    if (isClosing) {
      const stackIndex = stack.lastIndexOf(tag);
      if (stackIndex < 0) continue;

      if (blocks.has(tag)) {
        let openBlockIndex = -1;
        for (let index = openBlocks.length - 1; index >= 0; index -= 1) {
          if (
            openBlocks[index].tag === tag &&
            openBlocks[index].depth === stackIndex
          ) {
            openBlockIndex = index;
            break;
          }
        }
        if (openBlockIndex >= 0) {
          const [block] = openBlocks.splice(openBlockIndex, 1);
          blocks.get(tag).push({
            start: block.start,
            end: tokenPattern.lastIndex,
          });
        }
      }

      stack.length = stackIndex;
      continue;
    }

    const bodyIndex = stack.lastIndexOf("body");
    const isBodyChild = bodyIndex >= 0 && stack.length === bodyIndex + 1;
    if (isBodyChild && blocks.has(tag)) {
      openBlocks.push({ tag, start: match.index, depth: stack.length });
    }

    if (voidElements.has(tag) || /\/\s*>$/.test(token)) continue;
    stack.push(tag);

    if (tag === "script" || tag === "style") {
      const closePattern = new RegExp(`<\\/${tag}\\s*>`, "gi");
      closePattern.lastIndex = tokenPattern.lastIndex;
      const closeMatch = closePattern.exec(html);
      if (!closeMatch) {
        throw new Error(`Unclosed <${tag}> element in ${fileName}`);
      }
      stack.pop();
      tokenPattern.lastIndex = closePattern.lastIndex;
    }
  }

  for (const tag of wantedTags) {
    const found = blocks.get(tag);
    if (found.length !== 1) {
      throw new Error(
        `Expected one direct <${tag}> in ${fileName}, found ${found.length}`,
      );
    }
  }

  return Object.fromEntries(
    wantedTags.map((tag) => [tag, blocks.get(tag)[0]]),
  );
}

function activeRoute(fileName) {
  if (/^agence(?:-en)?\.html$/.test(fileName)) return "agency";
  if (/^(?:services|service-.+)(?:-en)?\.html$/.test(fileName)) {
    return "services";
  }
  if (/^(?:destinations|destination-pays)(?:-en)?\.html$/.test(fileName)) {
    return "destinations";
  }
  if (/^formations(?:-en)?\.html$/.test(fileName)) return "courses";
  if (/^temoignages(?:-en)?\.html$/.test(fileName)) return "testimonials";
  if (/^avi(?:-en)?\.html$/.test(fileName)) return "avi";
  if (/^tarifs(?:-en)?\.html$/.test(fileName)) return "fees";
  if (/^test-(?:eligibilite|orientation)(?:-en)?\.html$/.test(fileName)) {
    return "eligibility";
  }
  if (/^contact(?:-en)?\.html$/.test(fileName)) return "contact";
  return null;
}

function languageLinks(fileName, isEnglish, availableFiles) {
  const englishName = isEnglish
    ? fileName
    : fileName.replace(/\.html$/, "-en.html");
  const frenchName = isEnglish
    ? fileName.replace(/-en\.html$/, ".html")
    : fileName;
  const englishHref = availableFiles.has(englishName)
    ? englishName
    : "index-en.html";
  const frenchHref = availableFiles.has(frenchName) ? frenchName : "index.html";

  return `
        <div class="lang-switch" aria-label="${isEnglish ? "Language switch" : "Choix de la langue"}">
          <a href="${frenchHref}" class="lang-opt${isEnglish ? "" : " active"}" hreflang="fr" lang="fr" title="Français" aria-label="Français">
            <img src="img/flags/fr.svg" alt="Français" width="22" height="16" />
          </a>
          <a href="${englishHref}" class="lang-opt${isEnglish ? " active" : ""}" hreflang="en" lang="en" title="English" aria-label="English">
            <img src="img/flags/gb.svg" alt="English" width="22" height="16" />
          </a>
        </div>`;
}

function renderHeader(fileName, isEnglish, activeKey, availableFiles) {
  const homePage = isEnglish ? "index-en.html" : "index.html";
  const navLabel = isEnglish ? "Main menu" : "Menu principal";
  const contactLabel = isEnglish ? "Contact us" : "Nous contacter";
  const links = routes
    .map((route) => {
      const href = isEnglish ? route.en : route.fr;
      const labels = {
        agency: isEnglish ? "Agency" : "L'agence",
        services: isEnglish ? "Services" : "Services",
        destinations: isEnglish ? "Destinations" : "Destinations",
        courses: isEnglish ? "Courses" : "Formations",
        testimonials: isEnglish ? "Testimonials" : "Témoignages",
        avi: "AVI",
        fees: isEnglish ? "Fees" : "Tarifs",
        eligibility: isEnglish ? "Eligibility test" : "Test d'éligibilité",
        contact: contactLabel,
      };
      const active = route.key === activeKey;
      const classes = [
        route.key === "contact" ? "btn btn-orange nav-cta" : "",
        active ? "active" : "",
      ]
        .filter(Boolean)
        .join(" ");
      const attributes = [
        classes ? ` class="${classes}"` : "",
        active ? ' aria-current="page"' : "",
      ].join("");

      return `          <a href="${href}"${attributes}>${labels[route.key]}</a>`;
    })
    .join("\n");

  return `<header class="navbar">
      <div class="container nav-inner">
        <a href="${homePage}" class="logo" aria-label="${isEnglish ? "Einstein Services home" : "Accueil Einstein Services"}">
          <img src="img/logo.svg" alt="Einstein Services" class="logo-img" />
        </a>
        <nav class="nav-links" id="navLinks" aria-label="${navLabel}">
${links}
        </nav>${languageLinks(fileName, isEnglish, availableFiles)}
        <button type="button" class="burger" id="burger" data-site-menu-toggle aria-controls="navLinks" aria-expanded="false" aria-label="${isEnglish ? "Open menu" : "Ouvrir le menu"}">
          <span></span>
        </button>
      </div>
    </header>`;
}

function renderFooter(isEnglish) {
  const homePage = isEnglish ? "index-en.html" : "index.html";
  const links = isEnglish
    ? [
        ["Agency", "agence-en.html"],
        ["Services", "services-en.html"],
        ["Destinations", "destinations-en.html"],
        ["Courses", "formations-en.html"],
        ["Testimonials", "temoignages-en.html"],
        ["AVI", "avi-en.html"],
        ["Fees", "tarifs-en.html"],
        ["Eligibility test", "test-eligibilite-en.html"],
        ["Contact", "contact-en.html"],
      ]
    : [
        ["L'agence", "agence.html"],
        ["Services", "services.html"],
        ["Destinations", "destinations.html"],
        ["Formations", "formations.html"],
        ["Témoignages", "temoignages.html"],
        ["AVI", "avi.html"],
        ["Tarifs", "tarifs.html"],
        ["Test d'éligibilité", "test-eligibilite.html"],
        ["Contact", "contact.html"],
      ];
  const quickLinks = links
    .map(([label, href]) => `            <li><a href="${href}">${label}</a></li>`)
    .join("\n");

  return `<footer class="site-footer">
      <div class="site-footer-inner">
        <section class="site-footer-brand" aria-label="${isEnglish ? "About Einstein Services" : "À propos d'Einstein Services"}">
          <a class="site-footer-logo" href="${homePage}">
            <img src="img/logo-light.svg" alt="Einstein Services" />
          </a>
          <p>${isEnglish
            ? "Einstein Services supports students with international study plans, from choosing a course to preparing for departure."
            : "Einstein Services accompagne les étudiants dans leurs projets d'études à l'étranger, de l'orientation aux démarches avant le départ."}</p>
          <div class="site-footer-socials" aria-label="${isEnglish ? "Follow us" : "Suivez-nous"}">
            <a href="https://www.facebook.com/einsteinservicesvoyages1" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com/einsteinservices360/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/company/einsteinservices" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.tiktok.com/@einsteinservices1" target="_blank" rel="noopener noreferrer">TikTok</a>
          </div>
        </section>
        <section class="site-footer-column">
          <h2>${isEnglish ? "Quick links" : "Liens rapides"}</h2>
          <ul>
${quickLinks}
          </ul>
        </section>
        <section class="site-footer-column">
          <h2>${isEnglish ? "Contact" : "Contact"}</h2>
          <ul>
            <li><a href="mailto:contact@einstein-services.com">contact@einstein-services.com</a></li>
            <li><a href="tel:+221338305460">+221 33 830 54 60</a></li>
            <li><a href="tel:+221787927373">+221 78 792 73 73</a></li>
            <li><a href="tel:+221787338181">+221 78 733 81 81</a></li>
            <li>${isEnglish
              ? "Airport Road, Dakar 12000, Senegal"
              : "Route de l'Aéroport, Dakar 12000, Sénégal"}</li>
          </ul>
        </section>
        <section class="site-footer-column">
          <h2>${isEnglish ? "Legal" : "Informations légales"}</h2>
          <ul>
            <li><a href="${isEnglish ? "mentions-legales-en.html" : "mentions-legales.html"}">${isEnglish ? "Legal notice" : "Mentions légales"}</a></li>
            <li><a href="${isEnglish ? "politique-confidentialite-en.html" : "politique-confidentialite.html"}">${isEnglish ? "Privacy policy" : "Politique de confidentialité"}</a></li>
          </ul>
        </section>
      </div>
      <div class="site-footer-bottom">
        <p>© ${new Date().getFullYear()} Einstein Services. ${isEnglish ? "All rights reserved." : "Tous droits réservés."}</p>
      </div>
    </footer>`;
}

async function main() {
  const entries = await readdir(root, { withFileTypes: true });
  const fileNames = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".html"))
    .map((entry) => entry.name)
    .sort();
  const availableFiles = new Set(fileNames);
  const changes = [];

  for (const fileName of fileNames) {
    const filePath = path.join(root, fileName);
    const original = await readFile(filePath, "utf8");
    const blocks = getDirectBodyBlocks(
      original,
      ["header", "footer"],
      fileName,
    );
    const isEnglish = fileName.endsWith("-en.html");
    const header = renderHeader(
      fileName,
      isEnglish,
      activeRoute(fileName),
      availableFiles,
    );
    const footer = renderFooter(isEnglish);
    const replacements = [
      { ...blocks.header, value: header },
      { ...blocks.footer, value: footer },
    ].sort((a, b) => b.start - a.start);
    let updated = original;

    for (const replacement of replacements) {
      updated =
        updated.slice(0, replacement.start) +
        replacement.value +
        updated.slice(replacement.end);
    }
    changes.push({ filePath, fileName, original, updated });
  }

  for (const { filePath, fileName, original, updated } of changes) {
    if (original !== updated) {
      await writeFile(filePath, updated, "utf8");
      console.log(`Updated shared header/footer: ${fileName}`);
    }
  }

  console.log(`Checked ${changes.length} root HTML pages.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
