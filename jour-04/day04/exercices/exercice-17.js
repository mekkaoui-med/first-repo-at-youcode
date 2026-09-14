/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * LE CHIFFRE DE CÉSAR (CRYPTOGRAPHIE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction chiffrerCesar(texte, decalage) qui décale chaque lettre de l'alphabet.
 *  Par exemple, avec un décalage de 1, "ABC" devient "BCD".
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day04/exercices/exercice-17.js
 */
"use strict";

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
function chiffrerCesar(texte, decalage) {
  let textChiffrer = "";

  for (let i = 0; i < texte.length; i++) {
    let assciCode = texte.charCodeAt(i);

    if (assciCode >= 65 && assciCode <= 90) {
      assciCode = assciCode + decalage;

      if (assciCode > 90) {
        assciCode = assciCode - 26;
      }

      textChiffrer += String.fromCharCode(assciCode);
    } else if (assciCode >= 97 && assciCode <= 122) {
      assciCode = assciCode + decalage;

      if (assciCode > 122) {
        assciCode = assciCode - 26;
      }

      textChiffrer += String.fromCharCode(assciCode);
    } else {
      textChiffrer += texte[i];
    }
  }

  return textChiffrer;
}
let text = "ABCz";
console.log(chiffrerCesar(text, 1));
