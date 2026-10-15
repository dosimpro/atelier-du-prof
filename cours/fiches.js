/* Registre des FICHES REÇUES (documents envoyés par l'enseignant).
   Chaque nouveau fichier reçoit le numéro suivant (jamais réutilisé) et un titre.
   Images : cours/sources/fiche-<NNN>-p<page>.jpg
   `cours` = id de la séance tirée de cette fiche (vide si pas encore transformée). */
window.FICHES = [
  {
    num: 1,
    titre: "Les formules d’ouverture : « Un bûcheron honnête »",
    recu: "2026-10-15",
    niveau: "2AM",
    activite: "Vocabulaire",
    format: "Photos (2 pages)",
    pages: [
      { src:"cours/sources/fiche-001-p1.jpg", legende:"Page 1 : en-tête, support, observation, analyse" },
      { src:"cours/sources/fiche-001-p2.jpg", legende:"Page 2 : fixation et phase d’évaluation" }
    ],
    cours: "formules-ouverture"
  }
];
