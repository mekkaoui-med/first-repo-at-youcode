/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE DE DONNÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Dans le même tableau de candidats, écrivez une fonction qui retourne un nouveau tableau contenant uniquement
 * les candidats ayant un score >= 10.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day06/exercices/exercice-09.js
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
    score: 7,
  },
  {
    nom: "Sara",
    score: 0,
  },
  {
    nom: "Amine",
    score: 68,
  },
];
function Scor(arr) {
  let rest = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].score >= 10) {
      rest.push(arr[i].nom);
    }
  }
  return rest;
}
console.log(Scor(candidats));
