/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 11 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * ÉCHANTILLONNAGE (SLICE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * À partir d'un grand tableau de 100 éléments, utilisez .slice() pour extraire les 10 premiers (la première page).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-11
 * ▶️ Commande : node day05/exercices/exercice-11.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let names = [
  "Emma", "Liam", "Olivia", "Noah", "Ava", "Ethan", "Sophia", "Mason", "Isabella", "William",
  "Mia", "James", "Charlotte", "Benjamin", "Amelia", "Lucas", "Harper", "Henry", "Evelyn", "Alexander",
  "Abigail", "Michael", "Emily", "Daniel", "Elizabeth", "Jacob", "Sofia", "Logan", "Avery", "Jackson",
  "Ella", "Sebastian", "Scarlett", "Jack", "Grace", "Owen", "Chloe", "Samuel", "Victoria", "Matthew",
  "Riley", "Joseph", "Aria", "Levi", "Lily", "Mateo", "Aurora", "David", "Zoey", "John",
  "Penelope", "Wyatt", "Lillian", "Carter", "Addison", "Julian", "Layla", "Luke", "Natalie", "Grayson",
  "Camila", "Isaac", "Hannah", "Gabriel", "Brooklyn", "Anthony", "Samantha", "Dylan", "Nora", "Leo",
  "Leah", "Lincoln", "Savannah", "Joshua", "Audrey", "Christopher", "Claire", "Andrew", "Eleanor", "Theodore",
  "Skylar", "Caleb", "Ellie", "Ryan", "Stella", "Asher", "Hazel", "Nathan", "Violet", "Adrian",
  "Aubrey", "Christian", "Mila", "Jaxon", "Anna", "Aaron", "Caroline", "Charles", "Nova", "Josiah"
];
let newName = names.slice(0,10);
console.log(newName)