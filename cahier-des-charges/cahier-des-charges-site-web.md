# Cahier des charges — mission de l’agence web

## Einstein Services — site institutionnel et d’accompagnement

| Information | Détail |
|---|---|
| Client | Einstein Services, Yoff, Dakar, Sénégal |
| Objet | Prestations attendues, étapes, livrables, validation et évolutions du site existant |
| Version | 1.0 |
| Date | 25 novembre 2026 |
| Statut | Base de travail à valider et à joindre au devis/contrat de l’agence |
| Base de rédaction | Revue des pages, scripts et documents disponibles dans le dépôt du site |

> Les mentions **À valider par l’agence** désignent des décisions ou informations que le prestataire ne doit pas inventer. Les montants, calendriers, critères d’admission, informations légales et engagements de partenaires doivent être confirmés avant publication.

## 1. Objet et contexte

Ce document précise les travaux, étapes, livrables, validations et modalités de modification après livraison. Il contient une estimation de facturation indicative calculée pour le périmètre décrit. Le prestataire doit confirmer le prix final, le calendrier, les taxes applicables, la durée de garantie, les modalités de paiement et les conditions de maintenance dans son devis avant de le transmettre au client.

Le site existe déjà. Le mandat de base consiste donc à **auditer, corriger, harmoniser, compléter, tester et livrer l’existant**. Toute fonction qui nécessite une nouvelle infrastructure ou qui n’est pas clairement incluse au devis doit être décrite, chiffrée et approuvée séparément avant le début des travaux.

### Objectifs

1. Présenter clairement l’agence, ses services, ses partenaires et ses destinations.
2. Transformer les visites en demandes de contact qualifiées et faciles à traiter par l’équipe.
3. Rendre les informations publiées fiables, datées et maintenables.
4. Offrir une expérience cohérente, rapide, accessible et utilisable sur téléphone.
5. Protéger les visiteurs et leurs données, et clarifier les limites des tests et conseils en ligne.
6. Préparer une évolution vers un outil d’administration ou un espace client sans la confondre avec le site statique actuellement déployé.

## 2. Périmètre du mandat

### Inclus dans la reprise prioritaire

- Audit de toutes les pages du site et de leurs versions anglaises.
- Harmonisation de l’identité visuelle, des menus, pieds de page, coordonnées et appels à l’action.
- Révision des contenus incomplets, périmés, contradictoires ou laissés en attente.
- Vérification des formulaires, questionnaires, liens WhatsApp, navigation, langue et liens internes.
- Mise à jour des pages légales et des informations de confidentialité, après validation par le client.
- Contrôle technique, référencement naturel, accessibilité, affichage mobile et mise en production.
- Documentation de livraison et formation courte à la mise à jour des contenus statiques.

### Évolutions à chiffrer à part

- Système de gestion de contenu (CMS) et interface d’administration.
- Réception des formulaires sur un serveur, gestion commerciale/CRM, courriels automatiques.
- Prise de rendez-vous avec calendrier connecté.
- Gestion de comptes, dépôt de documents ou espace sécurisé de suivi étudiant.
- Gestion de catalogue en base de données et publication autonome par le client.
- Chatbot connecté à des services externes ou à une base de connaissances administrable.

Ces évolutions ne doivent pas être présentées comme déjà incluses dans un site HTML statique. Leur coût, hébergement, maintenance, traitement des données et niveau de sécurité doivent être précisés dans une proposition séparée.

## 3. Constat de départ

Les éléments ci-dessous sont des constats de la revue du dépôt, et non une certification du site actuellement en ligne.

| Domaine | État observé | Conséquence / travail demandé |
|---|---|---|
| Architecture | Site essentiellement constitué de pages HTML, CSS et JavaScript statiques ; publication configurée comme site statique. | Documenter ce qui peut être modifié dans la version actuelle et chiffrer séparément toute fonction serveur. |
| Contenus | Plusieurs pages existent déjà : agence, services, dix fiches de services, destinations, établissements, formations, tarifs, guides, actualités, témoignages, AVI, contact et questionnaires. | Éviter une refonte inutile ; faire l’inventaire et garder les contenus validés. |
| Coordonnées et domaine | Le code emploie `einstein-services.com` et `contact@einstein-services.com`, alors que le document de cadrage antérieur mentionne `einsteinservicesvoyages.com` et une autre adresse. | Faire confirmer le domaine officiel, les adresses e-mail, les téléphones et les liens officiels avant harmonisation. |
| Navigation | Plusieurs modèles de navigation et de pied de page coexistent. Certaines pages ont une présentation différente des pages principales. | Définir un modèle commun et vérifier chaque lien et chaque menu mobile. |
| Français / anglais | Plusieurs pages sont traduites, mais le niveau de complétude et la correspondance des contenus doivent être vérifiés page par page. | Livrer un tableau de correspondance FR/EN et ne pas afficher de lien anglais vers une page absente ou non traduite. |
| Formulaires | Les formulaires observés préparent principalement un message WhatsApp ; l’utilisateur doit encore l’envoyer. Le site statique ne montre pas de réception centralisée des demandes. | Rendre le fonctionnement explicite, tester le passage vers WhatsApp et faire valider si une réception par e-mail ou CRM est requise. |
| Test d’orientation | Le résultat actuel est un récapitulatif des réponses à transmettre à un conseiller, et non une recommandation calculée à partir d’un catalogue. | Présenter ce résultat honnêtement ou faire concevoir et valider une véritable méthode de recommandation. |
| Test d’éligibilité | Des critères et des repères datés sont affichés ; les conditions varient selon le pays et certaines valeurs restent à confirmer. | Faire valider les règles, les sources et la date de révision par pays ; afficher un avertissement clair. |
| Chatbot Nafi | Un moteur de réponses prédéfinies par mots-clés est présent. Les réponses et liens doivent être contrôlés. Aucun espace d’administration des conversations n’est établi par le site statique. | Mettre à jour et tester les réponses ; ne pas promettre un enregistrement ni une intelligence conversationnelle non réalisés. |
| Informations à compléter | Des pages affichent encore « à confirmer », « à préciser » ou des listes non finalisées, notamment sur certains services, documents, tarifs et calendrier. | Remplacer ces mentions par une information validée ou retirer la promesse concernée avant mise en production. |
| Mentions légales et confidentialité | Les pages existantes indiquent encore que certaines informations doivent être complétées ou validées. | Obtenir les informations du client et faire relire les textes par un conseil compétent avant publication. |
| Actualités et documents | Des pages éditoriales et des copies de pages figurent dans le dépôt, en plus des pages principales. | Déterminer les pages de référence, éviter les doublons indexables et vérifier les liens des brochures et documents. |

## 4. Publics et parcours prioritaires

### Publics

- Lycéens, bacheliers et étudiants sénégalais ou ouest-africains.
- Parents et responsables financiers souhaitant comprendre les démarches, coûts et risques.
- Étudiants déjà engagés dans un parcours d’admission.
- Personnes recherchant des services de visa, billetterie, hébergement, hôtel ou assurance.
- Établissements et partenaires souhaitant contacter l’agence.

### Parcours à rendre simples

1. **Découvrir l’agence** → comprendre son rôle, son équipe, ses références et ses coordonnées.
2. **Explorer un projet d’études** → choisir une destination → lire les étapes, documents et échéances → contacter un conseiller.
3. **Comparer les services et frais** → distinguer honoraires de l’agence et frais officiels → demander un devis.
4. **Préparer son profil** → utiliser un questionnaire clairement présenté comme indicatif → choisir de transmettre soi-même ses réponses.
5. **Trouver une formation ou un établissement** → consulter des informations validées → demander un accompagnement.
6. **Contacter l’équipe** → choisir le téléphone, e-mail, WhatsApp ou le rendez-vous, avec des attentes de réponse clairement annoncées.

## 5. Arborescence et règles éditoriales

Le prestataire dressera un inventaire exhaustif des URL avant toute suppression ou redirection. L’arborescence cible doit au minimum couvrir :

- Accueil et présentation de l’agence.
- Services et fiches détaillées : orientation, admissions, visa, financement/AVI, logement, billetterie, hôtels, assurance, incubation et accueil à l’arrivée.
- Destinations et fiches pays.
- Établissements et formations.
- Tarifs et frais officiels.
- Test d’orientation et test d’éligibilité.
- Partenaires et témoignages.
- Actualités, blog et guides — l’agence devra confirmer s’il s’agit d’une seule rubrique éditoriale ou de rubriques distinctes.
- Contact et prise de rendez-vous.
- Mentions légales et politique de confidentialité ; politique de cookies si des traceurs soumis à consentement sont utilisés.

### Règles de contenu

- Une page doit avoir un objectif principal et un appel à l’action cohérent.
- Pour chaque service : description, public visé, périmètre exact de l’accompagnement, étapes, liste de documents, limites, questions fréquentes et contact.
- Pour chaque destination : procédure, critères, calendrier, coûts, documents, liens officiels et date de dernière vérification.
- Distinguer visuellement et dans le texte **les honoraires Einstein Services** des **frais fixés par des organismes tiers**.
- Tout prix, quota, date, chiffre de réussite, nom de partenaire, avis client ou logo doit être justifié et approuvé par le client.
- Utiliser un avertissement daté pour les informations susceptibles d’évoluer ; prévoir qui les vérifie et à quelle fréquence.
- Ne pas publier de documents administratifs privés, de numéros d’immatriculation ou d’informations confidentielles contraires aux consignes de l’agence.
- Corriger les erreurs de langue, doublons, liens provisoires, texte de démonstration et formulations susceptibles de garantir une admission, un visa ou un financement.

## 6. Exigences fonctionnelles

### 6.1 Navigation et cohérence globale

- Mettre en place un même modèle d’en-tête, de navigation et de pied de page sur **toutes les pages incluses dans le mandat**, en français comme en anglais. Aucune page ne doit être oubliée ou se retrouver sans pied de page.
- Faire valider par le client la liste des rubriques, libellés, liens et coordonnées avant l’intégration.
- Centraliser ces éléments dans un gabarit partagé, une inclusion commune ou une solution équivalente présentée au client, afin qu’une correction puisse être répercutée de façon cohérente sur tout le site.
- Conserver le contenu propre à chaque page et son affichage. Ne pas remplacer globalement les éléments de pages par une manipulation qui masque, supprime ou déplace du contenu.
- Vérifier visuellement et fonctionnellement le menu et le pied de page sur chaque modèle de page, sur ordinateur et téléphone. La recette doit confirmer qu’ils restent visibles, complets, cohérents et sans chevauchement avec le contenu.
- Le menu mobile doit s’ouvrir, se fermer au clavier et au toucher, annoncer son état et ne masquer aucun contenu utile.
- Chaque page doit indiquer clairement la langue et proposer une version traduite uniquement si elle existe.
- Les liens de navigation, logos, boutons, numéros de téléphone, adresses e-mail, réseaux sociaux et liens de téléchargement doivent fonctionner.
- Les appels à l’action doivent conduire à une page ou une action identifiable ; aucune destination vide ou factice.
- Éviter les scripts partagés qui supposent la présence d’éléments absents sur certaines pages.

### 6.2 Contact et demandes

- Le client valide les coordonnées à utiliser, le numéro WhatsApp principal, les boîtes de réception et les plages de réponse.
- Les formulaires indiquent les champs obligatoires, leur finalité et la suite donnée après validation.
- Contrôler les formats de courriel et de téléphone, la validation des champs et les erreurs compréhensibles.
- Si WhatsApp reste le canal d’envoi : expliquer que le visiteur doit confirmer l’envoi dans WhatsApp ; ouvrir un message correctement encodé sans prétendre que la demande a déjà été reçue.
- Si le client exige une transmission automatique ou un historique des prospects : fournir une solution serveur/CRM chiffrée et documentée, avec anti-spam, contrôle des accès, durée de conservation et procédure en cas d’échec.
- Après un envoi ou une redirection, afficher un état exact : « message préparé », « WhatsApp ouvert » ou « demande reçue », selon ce qui s’est réellement produit.
- Le calendrier de rendez-vous ne sera intégré qu’après choix de l’outil, des disponibilités, des fuseaux horaires et des modalités de confirmation.

### 6.3 Tests en ligne

- Le test d’orientation doit soit rester un formulaire de préparation de rendez-vous/récapitulatif, soit fournir des recommandations selon une méthode documentée et validée. Ne pas présenter un simple résumé comme un résultat personnalisé.
- Le test d’éligibilité doit préciser la destination évaluée, la date de validité, les critères, les limites, la source de référence et le caractère indicatif du résultat.
- Ajouter une mention visible : **« Résultat indicatif uniquement. Il ne constitue ni une décision officielle ni une garantie d’admission, de visa ou de financement. Vérifiez les critères auprès des organismes compétents et d’un conseiller. »**
- Toute grille de notation, seuil, règle d’éligibilité ou estimation financière doit être fournie et signée/validée par l’agence avant programmation.
- Les réponses ne doivent pas être conservées ni transmises à l’insu de l’utilisateur. Si une transmission est proposée, en expliquer le destinataire et demander une action explicite.
- Le résultat doit rester lisible sur mobile et être utilisable au clavier et avec un lecteur d’écran.

### 6.4 Formations, établissements, destinations et actualités

- L’agence fournit les données de référence, leurs sources, droits d’utilisation et fréquence de mise à jour.
- Chaque fiche de formation/établissement indique les critères qui sont confirmés par la source et ceux qui doivent être vérifiés auprès de l’établissement.
- Les filtres et recherches doivent fonctionner, afficher un état « aucun résultat » et être utilisables sur téléphone.
- Les informations périmées doivent être archivées ou signalées comme historiques, pas laissées comme actuelles.
- Les actualités et guides affichent l’auteur ou l’organisme source, la date de publication et la date de vérification lorsque nécessaire.
- Si les mises à jour autonomes sont exigées, chiffrer et proposer un CMS ; ne pas présenter la modification manuelle des fichiers comme une administration en ligne.

### 6.5 Chatbot Nafi

- Maintenir une distinction claire entre assistant automatisé et conseiller humain.
- Vérifier les réponses FR/EN, les liens, les numéros et les informations de procédure.
- Le chatbot ne publie aucun tarif si telle est la règle commerciale convenue ; il dirige vers l’équipe.
- Il ne demande pas de passeport, de relevés bancaires ni d’autres documents sensibles dans la conversation.
- Les messages ne sont enregistrés que si un stockage et une information de confidentialité explicites sont mis en place.
- Les demandes hors périmètre, incertaines ou urgentes sont dirigées vers un conseiller.
- Toute connexion à une IA externe, à un CRM ou à une base de connaissances est une évolution distincte, avec estimation des coûts, des transferts de données et des risques.

## 7. Design, ergonomie et accessibilité

- Respecter l’identité visuelle officielle : logo, couleurs, polices, illustrations et ton de marque fournis par l’agence.
- Harmoniser les composants et styles aujourd’hui différents entre les pages principales et certaines pages éditoriales.
- Concevoir en priorité pour les mobiles, puis vérifier les tablettes et ordinateurs.
- Tester les largeurs de référence : 360 px, 390 px, 768 px, 1024 px et 1440 px, ainsi que l’agrandissement du texte.
- Prévoir des contrastes suffisants, des textes alternatifs utiles, des titres hiérarchisés, des libellés de formulaires, un focus clavier visible et une navigation sans souris.
- Respecter les préférences de réduction des animations ; éviter les effets qui empêchent la lecture ou la navigation.
- Cible d’accessibilité : WCAG 2.2 niveau AA, avec rapport des non-conformités détectées et corrections incluses dans le périmètre convenu.
- Les images doivent être optimisées, dimensionnées, compressées et accompagnées de textes alternatifs adaptés. Utiliser uniquement des ressources possédées, autorisées ou correctement licenciées.

## 8. Exigences techniques et qualité

### Compatibilité et performance

- Tester les versions récentes de Chrome, Edge, Firefox et Safari, ainsi que les navigateurs mobiles Android et iOS.
- Vérifier les pages sur une connexion mobile ordinaire et optimiser les images, polices, scripts et feuilles de style.
- Objectifs indicatifs Core Web Vitals sur les pages représentatives : LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1. Les résultats réels dépendent de l’hébergement et des outils tiers.
- Éviter les dépendances externes non nécessaires ; maintenir une solution de repli lisible si un service tiers ne charge pas.
- Tester les erreurs JavaScript, ressources manquantes, liens cassés, formulaires, ancres, téléchargement des brochures et chemins FR/EN.

### Hébergement, sécurité et sauvegardes

- Confirmer le domaine et l’hébergeur réellement utilisés, puis vérifier HTTPS, certificat, redirections et renouvellement.
- Le prestataire remet une liste des services tiers, scripts externes et bibliothèques chargés par le site.
- Réduire les scripts tiers et appliquer les en-têtes HTTP appropriés lorsque la configuration de l’hébergeur le permet.
- Protéger l’accès aux dépôts, comptes d’hébergement, DNS et outils de mesure ; utiliser des comptes nominatifs et l’authentification multifacteur lorsqu’elle est disponible.
- Mettre en place et documenter la sauvegarde des sources, fichiers et configurations ainsi que la procédure de restauration.
- Les formulaires destinés à recueillir des données personnelles ne doivent pas être connectés à un stockage non chiffré ou accessible publiquement.
- Si un espace client ou un dépôt de pièces est commandé : définir authentification, autorisations, journalisation, chiffrement, conservation, suppression, sauvegarde et gestion des incidents avant développement.
- La conformité juridique et la sécurité d’un service externe sont à confirmer contractuellement ; une page HTTPS seule ne suffit pas à démontrer la sécurité ou la conformité.

## 9. Référencement et mesure

- Choisir une seule origine officielle (domaine et variante avec/sans `www`) et rediriger proprement les variantes.
- Vérifier les balises title, descriptions, URL canoniques, titres H1, liens internes, attributs `hreflang`, sitemap, `robots.txt` et codes HTTP.
- Corriger les métadonnées et données structurées pour qu’elles reflètent les coordonnées et services confirmés, sans déclarations non vérifiées.
- Éviter l’indexation des copies, brouillons, pages de test et versions en double.
- Préserver les URL déjà référencées ; toute URL supprimée doit être redirigée vers la page pertinente, ou renvoyer un statut approprié.
- Configurer les outils de mesure d’audience uniquement après décision du client sur l’outil, le consentement, les finalités et les données collectées.
- Livrer un contrôle des liens entrants/sortants et des pages les plus importantes après mise en ligne.

## 10. Données personnelles, cookies et mentions légales

- L’agence fournit les informations juridiques exactes à publier et valide le responsable de traitement, les finalités, destinataires, durées de conservation, droits et contacts.
- Faire vérifier la politique de confidentialité et les mentions applicables au Sénégal et, si nécessaire, aux utilisateurs de l’Union européenne par une personne compétente.
- Faire l’inventaire réel des cookies, du stockage local, de Google Maps, des polices, outils statistiques, WhatsApp et autres services tiers.
- Si un consentement est nécessaire, le refus doit être aussi accessible que l’acceptation ; les traceurs concernés ne sont pas déposés avant le choix applicable.
- Ne pas affirmer qu’un formulaire est enregistré, envoyé ou supprimé si le fonctionnement technique ne le garantit pas.
- Les informations légales et données sensibles non destinées au public restent confidentielles.

## 11. Éléments à fournir et décisions de l’agence

La réalisation des contenus dépend de la remise et de la validation des éléments ci-dessous.

### Identité et contact

- Nom commercial et dénomination juridique à afficher.
- Domaine canonique, adresse e-mail principale et adresses de service à conserver.
- Numéros de téléphone/WhatsApp, adresse physique, horaires et personne responsable des réponses.
- Logo maître, variantes, couleurs, polices et droits d’utilisation.
- Réseaux sociaux officiels et règles de marque.

### Contenus et offre commerciale

- Présentation officielle de l’agence, équipe, fonctions et chiffres vérifiables.
- Liste définitive des services, périmètres, étapes, pièces demandées et limites.
- Pays effectivement desservis et procédure actuelle par pays.
- Liste des formations et établissements, conditions, sources et date de vérification.
- Tarifs d’accompagnement, modalités de devis/paiement/remboursement, et distinction des frais de tiers.
- Dates, quotas et critères valides pour chaque campagne.
- Informations validées sur l’AVI, l’assurance, les partenaires, le logement et l’accueil.
- Photos, témoignages et logos avec autorisations écrites et consentements requis.
- Brochures, vidéos et documents PDF définitifs.

### Décisions fonctionnelles

- Le site reste-t-il statique pour la première livraison ?
- Les demandes sont-elles envoyées uniquement par WhatsApp ou doivent-elles être reçues par e-mail/CRM ?
- Quel outil de rendez-vous utiliser, avec quelles disponibilités ?
- Le catalogue et les actualités doivent-ils être administrables par l’équipe ?
- Quelles langues sont garanties pour chaque rubrique ?
- Le test d’orientation doit-il rester un récapitulatif ou proposer des recommandations définies ?
- Quelles règles et quelles sources officielles valident le test d’éligibilité ?
- Le chatbot doit-il conserver des conversations ? Si oui, pendant combien de temps et qui y accède ?
- Quel outil d’analyse d’audience et quel niveau de mesure sont souhaités ?

## 12. Phasage recommandé

### Étapes de travail et validations obligatoires

| Étape | Travail attendu de l’agence | Livrable / validation du client |
|---|---|---|
| 1. Lancement et audit | Réunion de démarrage, inventaire des pages et accès nécessaires, sauvegarde de l’existant, repérage des défauts et des informations manquantes. | Rapport d’audit, liste des décisions attendues et périmètre détaillé. Le client confirme les priorités avant la réalisation. |
| 2. Cadrage et préparation | Confirmer l’arborescence, les contenus, les coordonnées, le comportement des formulaires, les modèles de pages et les navigateurs de référence. Remettre un devis et un calendrier par étape. | Approbation écrite du périmètre, du devis et du calendrier. Les contenus commerciaux et légaux sont fournis ou validés par le client. |
| 3. Maquettes et organisation | Présenter les modèles de pages et le fonctionnement commun de la navigation et du pied de page, y compris sur mobile et dans les deux langues. | Le client valide les maquettes ou l’aperçu avant l’intégration générale. Les corrections demandées à cette étape sont consignées. |
| 4. Réalisation | Corriger et intégrer les pages convenues sur une version de travail/test, sans modifier directement le site public. Conserver les sources et l’historique des changements. | Démonstration de la version de test et liste de ce qui a été réalisé ou reste en attente. |
| 5. Recette et corrections | Tester les critères de la section 16, corriger les défauts relevant du périmètre, puis fournir un rapport de recette. | Le client examine la version de test, transmet ses réserves par écrit et signe l’acceptation ou le procès-verbal de réserves. |
| 6. Mise en ligne et transfert | Après autorisation écrite, sauvegarder la version en ligne, publier la version acceptée et vérifier le site après publication. Transférer les sources, accès et documents. | Confirmation de mise en ligne, remise des livrables et accès, puis validation finale du client. |

L’agence indique dans son devis les dates ou durées prévues pour chaque étape, le délai de réponse attendu du client pour ses validations, les dépendances liées aux contenus et les conséquences d’un retard. Aucun délai fixe n’est présumé par le présent cahier des charges.

### Estimation de facturation proposée par le prestataire

**Prix conseillé pour la phase 1 : 2 500 000 FCFA (XOF)**, hors taxes éventuellement applicables selon le statut du prestataire. Il s’agit d’un forfait de départ estimé pour environ 120 à 150 heures de travail, à confirmer après validation de l’audit et des contenus.

Cette estimation repose sur les hypothèses suivantes : reprise des 65 fichiers HTML existants (55 à la racine du site et 10 dans `docs`), réutilisation de la structure existante, corrections et harmonisation plutôt qu’une refonte complète, contenus et traductions fournis/validés par le client, deux cycles de retours sur les maquettes. La rédaction complète, la traduction professionnelle, le CMS, le CRM, l’espace client et toute nouvelle infrastructure sont exclus et doivent être chiffrés à part.

| Poste facturé | Montant indicatif |
|---|---:|
| Audit, inventaire et cadrage | 250 000 FCFA |
| Modèle commun de navigation, en-tête et pied de page sur le périmètre | 550 000 FCFA |
| Harmonisation des pages et ajustements d’affichage mobile/ordinateur | 450 000 FCFA |
| Corrections des contenus fournis, langues, liens et coordonnées | 350 000 FCFA |
| Vérification des formulaires, questionnaires, chatbot et parcours de contact | 300 000 FCFA |
| Référencement technique, accessibilité et performance | 250 000 FCFA |
| Recette, corrections incluses, mise en ligne, documentation et transfert | 350 000 FCFA |
| **Total forfaitaire indicatif phase 1** | **2 500 000 FCFA** |

Le devis final doit confirmer si le total est hors taxes ou toutes taxes comprises selon la situation fiscale du prestataire. Il doit également préciser sa durée de validité, les livrables inclus, les exclusions et le nombre de cycles de correction compris. Aucun travail supplémentaire n’est engagé sans accord écrit.

**Échéancier de paiement proposé :** 40 % au démarrage (1 000 000 FCFA), 40 % à la livraison de la version de test (1 000 000 FCFA), puis 20 % après recette et mise en ligne (500 000 FCFA). Cet échéancier est à confirmer dans le devis signé.

**Modifications après livraison :** tarif de référence proposé de **20 000 FCFA par heure**, avec une heure minimum pour une petite intervention. Une nouvelle page, une nouvelle fonction ou une évolution importante doit faire l’objet d’un devis forfaitaire séparé avant réalisation. Les corrections de défauts couverts par la garantie ne sont pas facturées comme des évolutions.

**Maintenance facultative proposée :** **100 000 FCFA par mois** pour jusqu’à quatre heures de mises à jour et de support courant. Les heures supplémentaires sont facturées au tarif ci-dessus. L’hébergement, le nom de domaine, les licences, les interventions urgentes et les nouvelles fonctionnalités sont exclus de ce forfait et doivent être convenus séparément.

Les dépenses récurrentes (domaine, hébergement, licences et services tiers) sont indiquées à part, avec leur périodicité, leur coût réel et le titulaire du compte qui en assure le renouvellement. Toute fonction de phase 2 doit avoir son propre prix et ne peut être ajoutée sans accord écrit du client.

### Phase 0 — Cadrage et validation des contenus

1. Inventorier les pages, documents, URL, composants, scripts et services externes.
2. Confirmer domaine, coordonnées, langues, priorités commerciales et arborescence.
3. Remettre au client une liste des contenus manquants, contradictoires ou périmés.
4. Obtenir l’approbation des mentions légales, tarifs, dates et critères avant de les intégrer.

**Jalon de validation :** arborescence, coordonnées, offre et contenus prioritaires approuvés par Einstein Services.

### Phase 1 — Corrections et mise en qualité du site existant

1. Harmoniser l’en-tête, les menus, les pieds de page, les coordonnées et les appels à l’action.
2. Corriger les contenus provisoires, doublons, erreurs, liens et écarts de traduction validés.
3. Fiabiliser le comportement des formulaires WhatsApp et expliquer le parcours d’envoi.
4. Revoir les pages services, tarifs, destinations, formations et contact.
5. Clarifier la portée des tests et mettre à jour le chatbot scripté.
6. Compléter les pages légales avec les seules données approuvées.
7. Corriger les métadonnées et vérifier les exigences responsive, accessibilité, performance et SEO.
8. Effectuer la recette, corriger les défauts bloquants et publier après accord écrit.

### Phase 2 — Outils métier à chiffrer séparément

- Administration/CMS des pages, actualités, partenaires, formations et documents.
- Réception centralisée, affectation, suivi et export des demandes.
- Agenda de rendez-vous connecté.
- Espace client sécurisé pour les dossiers et pièces justificatives.
- Historique et administration du chatbot, seulement si une conservation des échanges est justifiée et encadrée.

Chaque fonction de phase 2 devra faire l’objet d’un périmètre, d’une maquette, d’une estimation, d’une analyse de données/sécurité et d’une recette propres.

## 13. Livrables exigés du prestataire

Le prix du mandat doit couvrir les livrables ci-dessous qui sont inclus dans la phase 1. Le devis précise explicitement tout élément exclu ou facturé séparément.

1. Inventaire des pages et rapport d’audit de départ.
2. Liste des défauts, risques, contenus manquants et décisions attendues du client.
3. Maquettes ou aperçus des modèles de page concernés et preuve de leur validation avant intégration.
4. Site corrigé et sources à jour, dans un format exploitable par le client ou un autre prestataire.
5. Tableau des pages et correspondances français/anglais.
6. Liste des liens, formulaires, services tiers, bibliothèques et outils d’analyse.
7. Rapport de recette : pages, navigateurs/appareils testés, défauts détectés et corrections effectuées.
8. Rapport succinct de performance et d’accessibilité avec limites connues.
9. Procédures de déploiement, de sauvegarde/restauration et de mise à jour des contenus.
10. Inventaire des comptes, DNS, hébergement et accès remis au client de manière sécurisée. Les comptes principaux doivent être au nom ou sous le contrôle du client.
11. Formation de prise en main si des contenus éditables ou outils d’administration sont livrés.
12. Proposition séparée et chiffrée pour toute évolution de phase 2.
13. Confirmation écrite des éléments remis, des réserves restantes et de la date de livraison.

## 14. Modifications demandées après la mise en ligne

Après la livraison, toute demande doit suivre la procédure ci-dessous afin que le client connaisse le coût, le délai et l’impact avant d’engager une dépense.

- **Demande écrite du client :** préciser la page ou fonction concernée, le problème ou besoin, le résultat souhaité, le texte ou les médias à intégrer et, si possible, la priorité.
- **Qualification par l’agence :** indiquer si la demande correspond à un défaut par rapport au cahier des charges accepté, à une mise à jour de contenu, ou à une nouvelle évolution hors périmètre.
- **Analyse préalable :** pour une évolution, l’agence décrit la solution proposée, les pages et systèmes touchés, les risques/dépendances, le délai, le coût, les frais récurrents éventuels et les critères de validation.
- **Approbation avant travaux :** l’agence transmet un devis ou avenant écrit. Elle ne commence pas une évolution payante et ne dépasse pas le périmètre convenu sans acceptation écrite du client.
- **Réalisation et contrôle :** l’agence sauvegarde les éléments concernés, réalise le changement sur une version de test, vérifie les pages liées et les affichages mobile/ordinateur, puis fournit un aperçu au client.
- **Validation et publication :** le client approuve le résultat par écrit ou transmet ses réserves. Après approbation, l’agence publie le changement dans les conditions convenues, vérifie le site en ligne et met à jour la documentation concernée.
- **Traçabilité :** conserver la demande, le devis accepté, les validations, la date de publication et la liste des fichiers/fonctions modifiés.

Un défaut qui empêche de respecter une exigence déjà acceptée est traité selon les conditions de garantie et de recette convenues, et ne doit pas être présenté automatiquement comme une nouvelle fonctionnalité payante. Une évolution du besoin, un ajout de page ou de fonction, une refonte, une traduction nouvelle ou un changement demandé après validation est chiffré selon la procédure ci-dessus. Le devis initial doit préciser le traitement des simples corrections de contenu.

## 15. Garantie, support et maintenance

L’agence doit préciser dans son devis ou contrat, sans laisser ces points implicites :

- la durée de garantie après la mise en ligne et sa date de départ ;
- les corrections couvertes et les cas exclus de la garantie ;
- le canal de contact pour signaler un incident et les informations à fournir ;
- les délais de prise en charge annoncés, s’il y en a, selon la gravité de l’incident ;
- les conditions et tarifs du support après la garantie ;
- si une maintenance préventive ou évolutive est proposée, sa fréquence, son contenu, son prix et ses limites ;
- les coûts récurrents d’hébergement, de domaine, de licences et de services tiers, ainsi que la personne responsable de leur renouvellement ;
- les responsabilités de sauvegarde, de restauration et de traitement d’une panne ou d’un incident de sécurité.

Aucun support permanent, délai de réponse garanti, hébergement ou entretien gratuit n’est présumé si cela n’est pas écrit dans l’offre acceptée. Le client doit pouvoir choisir une intervention ponctuelle ou un contrat de maintenance distinct.

## 16. Recette et critères d’acceptation

La livraison de la phase 1 est acceptée lorsque les critères suivants sont remplis :

- Toutes les pages du périmètre sont accessibles et reliées depuis une navigation cohérente.
- Toutes les pages incluses disposent du même en-tête, de la même navigation et du même pied de page convenus, dans les deux langues disponibles, sans perte de contenu ni défaut d’affichage.
- Les URL officielles, coordonnées et liens de contact correspondent aux éléments écrits et validés par le client.
- Aucune page livrée ne contient de texte de démonstration, de lien cassé connu, de partenaire non autorisé ou de donnée inventée.
- Les versions anglaises disponibles correspondent à leur page française et les liens linguistiques ne mènent pas à une page inexistante.
- Les formulaires ont été testés sur téléphone et ordinateur ; leurs messages, validations et confirmations correspondent à leur fonctionnement réel.
- Les tests d’orientation et d’éligibilité indiquent leurs limites et ne promettent aucun résultat officiel.
- Le menu, les boutons, les filtres, les liens internes, les brochures, les téléchargements et le chatbot ont passé les tests de navigation convenus.
- Aucun défaut bloquant d’affichage ou de navigation n’est observé sur les dimensions et navigateurs de référence.
- Le clavier permet d’accéder aux commandes principales et les images informatives possèdent un texte alternatif approprié.
- Les pages importantes ne présentent pas d’erreur JavaScript bloquante ni de ressource locale manquante dans les tests de recette.
- Les redirections et pages canoniques correspondent au domaine final approuvé.
- Le client a validé par écrit les contenus commerciaux, informations juridiques et paramètres de mise en production.
- Les sources, accès, documentation et sauvegardes prévues au contrat ont été remis au client.

Les parties conviennent dans le devis du délai donné au client pour la recette et du mode de validation. Toute réserve est inscrite dans un procès-verbal avec son niveau de gravité, son responsable et son échéance. Une réserve bloquante empêche l’acceptation finale jusqu’à sa correction ou jusqu’à un accord écrit entre les parties.

## 17. Répartition des responsabilités

| Einstein Services | Prestataire / agence web |
|---|---|
| Fournir les informations officielles, valider les textes, tarifs, critères, calendriers, coordonnées et partenaires. | Auditer l’existant, signaler les incohérences et ne pas compléter les informations manquantes par supposition. |
| Obtenir les autorisations de publication des photos, témoignages, marques et logos. | Intégrer les médias autorisés et optimiser leur poids et leur affichage. |
| Valider le traitement souhaité des demandes, rendez-vous, questionnaires et conversations. | Implémenter uniquement le flux convenu et en expliquer exactement le fonctionnement. |
| Désigner un interlocuteur pour la validation des pages et tests. | Réaliser les tests convenus, corriger les défauts relevant du périmètre et remettre les livrables. |
| Faire valider les textes juridiques par un conseil compétent. | Appliquer les textes et choix approuvés ; ne pas se substituer au conseil juridique. |
| Confirmer les comptes, accès et outils qui doivent rester sous le contrôle du client. | Transférer les sources, droits d’accès et documentation sans conserver de dépendance exclusive. |

## 18. Hors périmètre sans accord écrit

- Garantie d’obtention d’un visa, d’une admission, d’une bourse ou d’un logement.
- Création et actualisation des critères officiels sans sources fournies et validation de l’agence.
- Production de contenus, traductions certifiées, photographies ou avis non fournis/validés.
- Outil CRM, service d’envoi d’e-mails, calendrier payant, CMS, application mobile ou espace étudiant non chiffré dans le devis.
- Hébergement, licences, coûts d’API, abonnement tiers ou maintenance récurrente non mentionnés au contrat.
- Avis juridique, audit de conformité réglementaire ou certification de sécurité.

## 19. Approbation

Le présent cahier des charges fixe la base du mandat. Il doit être complété par le devis, le calendrier, les conditions de garantie/maintenance et les validations de contenus. Les parties indiquent ci-dessous si elles approuvent ce document comme référence du mandat. Toute modification ultérieure du périmètre doit être estimée et validée par écrit selon la section 14.

| Pour Einstein Services | Pour le prestataire |
|---|---|
| Nom : ______________________________ | Nom : ______________________________ |
| Fonction : __________________________ | Société : ___________________________ |
| Date : ______________________________ | Date : ______________________________ |
| Signature : __________________________ | Signature : __________________________ |
