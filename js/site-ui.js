(() => {
  const fileName = window.location.pathname.split("/").pop() || "index.html";
  const isEnglish = document.documentElement.lang === "en" || fileName.endsWith("-en.html");

  if (!document.querySelector(".lang-switch")) {
    const frenchPage = isEnglish
      ? (fileName === "index-en.html" ? "index.html" : fileName.replace("-en.html", ".html"))
      : fileName;
    const englishPage = isEnglish
      ? fileName
      : (fileName === "index.html" ? "index-en.html" : fileName.replace(".html", "-en.html"));

    const switcher = document.createElement("div");
    switcher.className = "lang-switch";
    switcher.setAttribute("aria-label", isEnglish ? "Language switch" : "Choix de la langue");
    switcher.innerHTML = `
      <a href="${frenchPage}" class="lang-opt${isEnglish ? "" : " active"}" hreflang="fr" title="Français" aria-label="Français">
        <img src="img/flags/fr.svg" alt="Français" width="22" height="16">
      </a>
      <a href="${englishPage}" class="lang-opt${isEnglish ? " active" : ""}" hreflang="en" title="English" aria-label="English">
        <img src="img/flags/gb.svg" alt="English" width="22" height="16">
      </a>`;

    const inner = document.querySelector(".nav-inner, .u-nav-inner, header.site .wrap");
    if (inner) {
      const burger = inner.querySelector("#burger, .u-burger, .burger, .site-menu-toggle");
      if (burger) inner.insertBefore(switcher, burger);
      else inner.appendChild(switcher);
    }

    if (!document.querySelector('link[rel="stylesheet"][href="css/site-ui.css"]')) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "css/site-ui.css";
      document.head.appendChild(stylesheet);
    }
  }

  const navBars = Array.from(
    document.querySelectorAll(".navbar, .u-navbar, header.site"),
  );
  const navMenus = [];

  navBars.forEach((navBar) => {
    const menu = navBar.querySelector(
      "#navLinks, .u-nav-links, #destinationMenu",
    );
    const burger = navBar.querySelector(
      "#burger, .u-burger, #destinationMenuToggle",
    );
    if (!menu || !burger) return;

    navMenus.push(menu);
    burger.setAttribute("aria-controls", menu.id);
    const updateBurger = () => {
      const isOpen = menu.classList.contains("open");
      burger.classList.toggle("is-open", isOpen);
      burger.setAttribute("aria-expanded", String(isOpen));
      burger.setAttribute(
        "aria-label",
        isEnglish
          ? isOpen
            ? "Close menu"
            : "Open menu"
          : isOpen
            ? "Fermer le menu"
            : "Ouvrir le menu",
      );
    };

    updateBurger();
    new MutationObserver(updateBurger).observe(menu, {
      attributes: true,
      attributeFilter: ["class"],
    });
  });

  navBars.forEach((navBar) => navBar.classList.remove("scroll-hidden"));
})();
