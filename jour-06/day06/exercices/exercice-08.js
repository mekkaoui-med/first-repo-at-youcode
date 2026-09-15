/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score).
 * Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day06/exercices/exercice-08.js
 */
"use strict";

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
const candidats = [
  {
    nom: "Mohamed",
    score: 85,
  },
  {
    nom: "Youssef",
    score: 72,
  },
  {
    nom: "Sara",
    score: 91000000000000,
  },
  {
    nom: "Amine",
    score: 68,
  },
];
function bestScore(arr) {
  let maxScor = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].score > maxScor.score) {
      maxScor = arr[i];
    }
  }
  return maxScor.nom;
}
console.log(bestScore(candidats));
