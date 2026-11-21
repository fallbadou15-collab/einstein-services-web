(() => {
  const isEnglish = document.documentElement.lang === "en";
  const header = document.querySelector("header.navbar, header.u-navbar, header.site");

  if (header && !document.querySelector(".u-topbar")) {
    const topbar = document.createElement("div");
    topbar.className = "u-topbar";
    topbar.innerHTML = `
      <div class="u-topbar-inner">
        <div class="u-topbar-left">
          <a class="u-topbar-phone" href="tel:+221338305460">
            ${isEnglish ? "Call us" : "Appelez-nous"}: +221 33 830 54 60 / +221 78 792 73 73 / +221 78 733 81 81
          </a>
        </div>
        <div class="u-topbar-left">
          <nav class="u-topbar-socials" aria-label="${isEnglish ? "Social media" : "Réseaux sociaux"}">
            <a href="https://www.facebook.com/einsteinservicesvoyages1" aria-label="Facebook" target="_blank" rel="noopener"></a>
            <a href="https://www.instagram.com/einsteinservices360/" aria-label="Instagram" target="_blank" rel="noopener"></a>
            <a href="https://www.linkedin.com/company/einsteinservices" aria-label="LinkedIn" target="_blank" rel="noopener"></a>
            <a href="https://www.tiktok.com/@einsteinservices1" aria-label="TikTok" target="_blank" rel="noopener"></a>
          </nav>
        </div>
      </div>`;
    header.before(topbar);
  }

  document.querySelectorAll("[data-site-menu-toggle]").forEach((button) => {
    const menu = document.getElementById(button.getAttribute("aria-controls"));
    if (!menu) {
      throw new Error("The mobile menu button must reference an existing menu.");
    }

    const setOpen = (open) => {
      menu.classList.toggle("open", open);
      button.classList.toggle("is-open", open);
      button.setAttribute("aria-expanded", String(open));
      button.setAttribute(
        "aria-label",
        isEnglish
          ? open
            ? "Close menu"
            : "Open menu"
          : open
            ? "Fermer le menu"
            : "Ouvrir le menu",
      );
    };

    button.addEventListener("click", () => {
      setOpen(!menu.classList.contains("open"));
    });

    menu.addEventListener("click", (event) => {
      if (event.target instanceof Element && event.target.closest("a")) {
        setOpen(false);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menu.classList.contains("open")) {
        setOpen(false);
        button.focus();
      }
    });
  });
})();
