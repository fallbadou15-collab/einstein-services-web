const servicePage = document.querySelector("[data-service-id]");

if (servicePage) {
  const serviceId = servicePage.dataset.serviceId;

  fetch("services.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Impossible de charger les détails du service (${response.status}).`);
      }
      return response.text();
    })
    .then((html) => {
      const source = new DOMParser().parseFromString(html, "text/html");
      const article = source.getElementById(serviceId);

      if (!article || !article.classList.contains("service-detail")) {
        throw new Error(`Le service "${serviceId}" est introuvable dans services.html.`);
      }

      servicePage.replaceChildren(article.cloneNode(true));
    })
    .catch((error) => {
      const message = document.createElement("p");
      message.className = "disclaimer";
      message.setAttribute("role", "alert");
      message.textContent =
        "Les détails de ce service ne sont pas disponibles pour le moment. Vous pouvez consulter la page des services ou nous contacter.";
      servicePage.replaceChildren(message);
      console.error("Erreur de chargement de la page de service :", error);
    });
}
