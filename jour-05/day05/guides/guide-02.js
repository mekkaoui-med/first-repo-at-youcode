/**
 * JOUR 05 — GUIDE 02
 * Parcourir avec for...of
 *
 * OBJECTIF
 * Vous avez notes = [12, 15, 8, 19]. Calculez la moyenne des notes en parcourant le tableau.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

// TODO: écris ta solution ici.
let notes = [12, 15, 8, 19];
let moyenne = 0;
let somme = 0;
for (let i = 0 ; i < notes.length; i++){
    somme += notes[i]
}
moyenne = somme / notes.length;
console.log(somme)
console.log(moyenne)