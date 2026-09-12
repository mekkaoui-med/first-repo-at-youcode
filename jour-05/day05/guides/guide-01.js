/**
 * JOUR 05 — GUIDE 01
 * Accès et Modification
 *
 * OBJECTIF
 * Créez un tableau fruits = ["Pomme", "Banane", "Orange"]. Changez "Banane" par "Mangue" et affichez le dernier élément du tableau.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

// TODO: écris ta solution ici.
let fruits = ["Pomme", "Banane", "Orange"];
let target = "Banane";
let change = "Mangue"
for (let i = 0 ; i < fruits.length;i++){
    if(fruits[i] === target){
        fruits[i] = change
    }
}
console.log(fruits)