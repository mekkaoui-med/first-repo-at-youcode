/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 13 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FORMATAGE MONÉTAIRE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction formater(montant) qui prend 1234567 (Number ou String) et retourne "1 234 567 MAD".
 * (Vous pouvez chercher comment utiliser les regex pour insérer des espaces, ou utiliser les boucles/slice).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-13
 * ▶️ Commande : node day04/exercices/exercice-13.js
 */
"use strict";

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
function formater(montant) {
  let texte = String(montant);
  let resultat = "";

  while (texte.length > 3) {
    let bloc = texte.slice(texte.length - 3);
    resultat = " " + bloc + resultat;
    texte = texte.slice(0, texte.length - 3);
  }
  resultat = texte + resultat;
  return resultat + " MAD";
}
console.log(formater(1234567));
