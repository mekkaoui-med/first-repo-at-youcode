/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * DEEP COPY VS SHALLOW COPY
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez un objet contenant un autre objet imbriqué. Clonez-le avec le Spread operator (...).
 * Montrez (avec console.log) que modifier l'objet imbriqué dans la copie modifie AUSSI l'original.
 * Expliquez pourquoi en commentaire, et donnez la solution moderne (ex: structuredClone ou JSON parse/stringify).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day06/exercices/exercice-20.js
 */
"use strict";

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
const entreprise = {
  nom: "TechCorp",
  adresse: {
    ville: "Nador",
    pays: "Maroc",
  },
};

// Clone avec le Spread operator
const copie = { ...entreprise };

console.log("Original avant modification :", entreprise);
console.log("Copie avant modification :", copie);

// Modification de l'objet imbriqué dans la copie
copie.adresse.ville = "Casablanca";

console.log("Copie après modification :", copie);
console.log("Original après modification :", entreprise);

/*
Pourquoi l'original est aussi modifié ?

Le Spread operator (...) fait seulement une copie superficielle
(shallow copy).

L'objet principal est copié, mais l'objet imbriqué "adresse"
n'est pas réellement copié.

Les deux objets utilisent donc la même référence pour "adresse".

Pour créer une vraie copie profonde (deep copy), on peut utiliser :

1. structuredClone()
*/
const copieProfonde = structuredClone(entreprise);

copieProfonde.adresse.ville = "Rabat";

console.log("Copie profonde :", copieProfonde);
console.log("Original :", entreprise);

/*
2. Autre solution possible :

const copieProfonde = JSON.parse(JSON.stringify(entreprise));

Cette méthode fonctionne pour des données JSON simples,
mais structuredClone() est généralement la solution moderne.
*/
