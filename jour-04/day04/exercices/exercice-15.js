/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * VÉRIFICATEUR D'ANAGRAMME
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vérifiez si "chien" et "niche" sont des anagrammes (elles contiennent exactement les mêmes lettres, même quantité).
 * Indice : vous pouvez les transformer en tableau, les trier, et les rejoindre.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day04/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let mot1 = "chien";
let mot2 = "niche";
let mot1Split = mot1.split("").sort().join("")
let mot2Split = mot2.split("").sort().join("")
console.log(mot1Split);
console.log(mot2Split);
if(mot1Split === mot2Split){
    console.log(true)
}else{
    console.log(false)
}
