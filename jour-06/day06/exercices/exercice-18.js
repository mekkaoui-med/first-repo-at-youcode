/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * COMPARAISON D'OBJETS (DEEP EQUAL CONCEPT)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction sontIdentiques(obj1, obj2) qui vérifie si deux objets littéraux (sans objets imbriqués)
 * ont exactement les mêmes clés et les mêmes valeurs.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day06/exercices/exercice-18.js
 */
"use strict";

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

const user1 = {
  nom: "Mohamed",
};

const user2 = {
  nom: "Mohamed",
};
function sontIdentiques(obj1, obj2) {
  const keyObj1 = Object.keys(obj1);
  const keyObj2 = Object.keys(obj2);

  if (keyObj1.length !== keyObj2.length) {
    return false;
  }
  for (let i = 0; i < keyObj1.length; i++) {
    let key = keyObj1[i];
    if (!(key in obj2)) {
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true
}
console.log(sontIdentiques(user1, user2));
