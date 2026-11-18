(() => {
  if (!document.querySelector("#country-flags-style")) {
    const style = document.createElement("style");
    style.id = "country-flags-style";
    style.textContent = `
      .country-with-flag { white-space: nowrap; }
      .country-with-flag img.country-flag {
        display: inline-block;
        width: 20px;
        height: 14px;
        margin-right: 6px;
        vertical-align: -1px;
        border-radius: 2px;
        object-fit: cover;
        box-shadow: 0 1px 2px rgba(20, 86, 138, 0.18);
      }
    `;
    document.head.append(style);
  }

  const countries = [
    { names: ["France"], flag: "🇫🇷" },
    { names: ["Canada"], flag: "🇨🇦" },
    { names: ["Belgique", "Belgium"], flag: "🇧🇪" },
    { names: ["Suisse", "Switzerland"], flag: "🇨🇭" },
    { names: ["Italie", "Italy"], flag: "🇮🇹" },
    { names: ["Maroc", "Morocco"], flag: "🇲🇦" },
    { names: ["Allemagne", "Germany"], flag: "🇩🇪" },
    { names: ["Turquie", "Turkey", "Türkiye"], flag: "🇹🇷" },
    { names: ["Roumanie", "Romania"], flag: "🇷🇴" },
    { names: ["Sénégal", "Senegal"], flag: "🇸🇳" },
  ];

  const names = countries
    .flatMap(({ names: countryNames }) => countryNames)
    .sort((a, b) => b.length - a.length);
  const escapedNames = names.map((name) =>
    name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );
  const pattern = new RegExp(`\\b(${escapedNames.join("|")})\\b`, "giu");
  const flags = new Map(
    countries.flatMap(({ names: countryNames, flag }) =>
      countryNames.map((name) => [name.toLocaleLowerCase(), flag]),
    ),
  );
  const flagImages = new Map([
    ["🇫🇷", "img/flags/fr.svg"],
    ["🇨🇦", "img/flags/ca.svg"],
    ["🇧🇪", "img/flags/be.svg"],
    ["🇨🇭", "img/flags/ch.svg"],
    ["🇮🇹", "img/flags/it.svg"],
    ["🇲🇦", "img/flags/ma.svg"],
    ["🇩🇪", "img/flags/de.svg"],
    ["🇹🇷", "img/flags/tr.svg"],
    ["🇷🇴", "img/flags/ro.svg"],
    ["🇸🇳", "img/flags/sn.svg"],
  ]);

  function addFlags(root) {
    if (!root) return;

    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          if (!node.parentElement) return NodeFilter.FILTER_REJECT;
          if (node.parentElement.closest(
            "script, style, textarea, option, .country-with-flag, .lang-switch, .country, .card, article, .dest-card, .destination-card",
          )) {
            return NodeFilter.FILTER_REJECT;
          }
          pattern.lastIndex = 0;
          return pattern.test(node.nodeValue)
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_REJECT;
        },
      },
    );

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
      pattern.lastIndex = 0;
      const text = node.nodeValue;
      const fragment = document.createDocumentFragment();
      let lastIndex = 0;
      let match;
      let changed = false;

      while ((match = pattern.exec(text)) !== null) {
        const beforeMatch = text.slice(0, match.index);
        if (/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]\s*$/.test(beforeMatch)) {
          continue;
        }

        changed = true;
        if (match.index > lastIndex) {
          fragment.append(document.createTextNode(text.slice(lastIndex, match.index)));
        }

        const name = match[0];
        const span = document.createElement("span");
        span.className = "country-with-flag";
        const flag =
          flags.get(name.toLocaleLowerCase()) ||
          flags.get(name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase()) ||
          "";
        const image = document.createElement("img");
        image.className = "country-flag";
        image.src = flagImages.get(flag) || "";
        image.alt = "";
        image.setAttribute("aria-hidden", "true");
        span.append(image, document.createTextNode(name));
        fragment.append(span);
        lastIndex = match.index + name.length;
      }

      if (changed) {
        if (lastIndex < text.length) {
          fragment.append(document.createTextNode(text.slice(lastIndex)));
        }
        node.replaceWith(fragment);
      }
    });
  }

  addFlags(document.body);

  let updateQueued = false;
  const observer = new MutationObserver((mutations) => {
    if (updateQueued) return;
    updateQueued = true;
    queueMicrotask(() => {
      updateQueued = false;
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) addFlags(node);
          if (node.nodeType === Node.TEXT_NODE) addFlags(node.parentElement);
        });
      });
    });
  });

  observer.observe(document.body, { childList: true, characterData: true, subtree: true });
})();
