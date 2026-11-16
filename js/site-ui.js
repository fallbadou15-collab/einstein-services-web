(() => {
  const footer = document.querySelector(".u-footer, footer.footer") ||
    Array.from(document.querySelectorAll("footer")).pop();
  const isEnglish = document.documentElement.lang === "en";

  if (footer && !footer.querySelector(".partners-footer")) {
    const partners = [
      { name: "Univers France Succès", src: "partenaires/ufs-logo.png" },
      {
        name: "Studely",
        src: "partenaires/WhatsApp Image 2026-11-15 at 02.59.10.jpeg",
      },
      {
        name: "Nexroom",
        src: "partenaires/WhatsApp Image 2026-11-15 at 02.59.11.jpeg",
      },
      {
        name: "Senfrance",
        src: "partenaires/WhatsApp Image 2026-11-15 at 03.03.12.jpeg",
      },
      {
        name: "Mondial France Gold",
        src: "partenaires/WhatsApp Image 2026-11-15 at 03.07.08.jpeg",
      },
      {
        name: "Safe House",
        src: "partenaires/WhatsApp Image 2026-11-15 at 03.11.09.jpeg",
      },
      {
        name: "NSIA Assurances Vie",
        src: "partenaires/WhatsApp Image 2026-11-15 at 03.13.48.jpeg",
      },
      {
        name: "Galileo Global Education",
        src: "partenaires/WhatsApp Image 2026-11-15 at 03.18.04.jpeg",
      },
      {
        name: "ESG Finance",
        src: "partenaires/WhatsApp Image 2026-11-15 at 03.21.55.jpeg",
      },
      {
        name: "emlyon business school",
        src: "partenaires/WhatsApp Image 2026-11-15 at 03.21.55 (1).jpeg",
      },
      {
        name: "ESARC",
        src: "partenaires/WhatsApp Image 2026-11-15 at 03.25.18.jpeg",
      },
      {
        name: "Paris School of Business",
        src: "partenaires/WhatsApp Image 2026-11-15 at 03.25.26.jpeg",
      },
      {
        name: "Collège LaSalle Montréal",
        src: "partenaires/WhatsApp Image 2026-11-15 at 03.29.59.jpeg",
      },
    ];

    const section = document.createElement("section");
    section.className = "partners-footer";
    section.setAttribute("aria-labelledby", "partners-footer-title");

    const heading = document.createElement("h2");
    heading.id = "partners-footer-title";
    heading.textContent = isEnglish ? "Our partners" : "Nos partenaires";
    section.appendChild(heading);

    const list = document.createElement("ul");
    list.className = "partners-footer-list";
    partners.forEach(({ name, src }) => {
      const item = document.createElement("li");
      const image = document.createElement("img");
      image.src = src;
      image.alt = name;
      image.loading = "lazy";
      image.decoding = "async";
      item.appendChild(image);
      list.appendChild(item);
    });
    section.appendChild(list);

    const grid = footer.querySelector(".u-footer-grid");
    const footerBottom = footer.querySelector(".u-footer-bottom");
    const inner = footer.querySelector(".footer-inner");
    const insertBefore = grid || footerBottom ||
      (inner && (inner.querySelector(".footer-socials") ||
        inner.querySelector(".footer-links")));

    if (insertBefore) {
      insertBefore.insertAdjacentElement("beforebegin", section);
    } else {
      footer.appendChild(section);
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
    if (burger.classList.contains("site-menu-toggle")) {
      burger.addEventListener("click", () => {
        menu.classList.toggle("open");
      });
      menu.addEventListener("click", (event) => {
        if (event.target instanceof Element && event.target.closest("a")) {
          menu.classList.remove("open");
        }
      });
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menu.classList.contains("open")) {
          menu.classList.remove("open");
          burger.focus();
        }
      });
    }

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

  let previousScrollY = window.scrollY;
  let previousDirection = 0;
  let accumulatedScroll = 0;
  const scrollThreshold = 6;

  window.addEventListener(
    "scroll",
    () => {
      const currentScrollY = Math.max(0, window.scrollY);
      const direction =
        currentScrollY > previousScrollY
          ? 1
          : currentScrollY < previousScrollY
            ? -1
            : 0;

      if (currentScrollY <= 20) {
        navBars.forEach((navBar) => navBar.classList.remove("scroll-hidden"));
        previousScrollY = currentScrollY;
        previousDirection = 0;
        accumulatedScroll = 0;
        return;
      }

      if (!direction) return;
      if (direction !== previousDirection) accumulatedScroll = 0;
      accumulatedScroll += Math.abs(currentScrollY - previousScrollY);
      previousDirection = direction;
      previousScrollY = currentScrollY;

      if (accumulatedScroll < scrollThreshold) return;
      accumulatedScroll = 0;

      if (direction > 0) {
        const menuIsOpen = navMenus.some((menu) =>
          menu.classList.contains("open"),
        );
        if (!menuIsOpen) {
          navBars.forEach((navBar) => navBar.classList.add("scroll-hidden"));
        }
      } else {
        navBars.forEach((navBar) => navBar.classList.remove("scroll-hidden"));
      }
    },
    { passive: true },
  );
})();
