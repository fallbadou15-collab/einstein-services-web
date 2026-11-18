(() => {
  const isEnglish = document.documentElement.lang === "en";

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
