/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * GÉNÉRATEUR DE SLUG SEO
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * En développement web, une URL amicale (Slug) transforme le titre d'un article en texte propre.
 * Transformez "Les 10 secrets de JavaScript !" en "les-10-secrets-de-javascript".
 * Règles : Tout en minuscules, remplacez les espaces par des tirets, supprimez les caractères de ponctuation (!, ?, etc.).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day04/exercices/exercice-20.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let title = "Les 10 secrets de JavaScript!";
let lowerTitle = title.toLocaleLowerCase()
// let titleSplit = lowerTitle.split("");
let slug = ""
for(let i =0 ; i< lowerTitle.length;i++){
        if(lowerTitle[i] ===" " ){
            slug +="-"
        }else if (lowerTitle[i] === "!" || lowerTitle[i] === "?" || 
            lowerTitle[i] === "(" || lowerTitle[i] === ")"){
                continue;
        }else{
            slug+= lowerTitle[i]
        }
}
console.log(slug)