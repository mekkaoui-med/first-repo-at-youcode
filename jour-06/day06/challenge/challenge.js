/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · CHALLENGE
 * LE POKEDEX (ANNUAIRE DE DONNÉES)
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous devez gérer une mini-base de données d'utilisateurs.
 *
 * Consignes :
 * 1. Vous avez un tableau utilisateurs = [].
 * 2. Créez une fonction ajouterUtilisateur(nom, email) qui crée un objet
 * { id, nom, email } (générez un ID unique simple) et l'ajoute au tableau.
 * 3. Créez une fonction trouverParEmail(email) qui retourne l'objet utilisateur correspondant.
 * 4. Créez une fonction supprimerParId(id) qui supprime l'utilisateur du tableau.
 * 5. Créez une fonction afficherAnnuaire() qui affiche joliment la liste complète dans la console.
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day06/challenge/challenge.js
 */
"use strict";

// Découpe d'abord le problème en petites étapes.
// TODO: écris ta solution ici.
let utilisateurs = [];
let prochainId = 1;
function ajouterUtilisateur(nom, email) {
  const utilisateur = {
    id: prochainId,
    nom: nom,
    email: email,
  };

  utilisateurs.push(utilisateur);

  prochainId++;
}

function trouverParEmail(email) {
  for (let i = 0; i < utilisateurs.length; i++) {
    if (utilisateurs[i].email === email) {
      return utilisateurs[i];
    }
  }
  return 0;
}

function supprimerParId(id) {
  for (let i = 0; i < utilisateurs.length; i++) {
    if (utilisateurs[i].id === id) {
      utilisateurs.splice(i, 1);
      return;
    }
  }
}

function afficherAnnuaire() {
  for (let i = 0; i < utilisateurs.length; i++) {
    console.log(
      "id : " +
        utilisateurs[i].id +
        " | nome : " +
        utilisateurs[i].nom +
        " | email :" +
        utilisateurs[i].email
    );
  }
}
ajouterUtilisateur("Mohamed", "mohamed@gmail.com");
ajouterUtilisateur("Ali", "ali@gmail.com");
ajouterUtilisateur("Sara", "sara@gmail.com");

console.log(utilisateurs);
console.log(trouverParEmail("ali@gmail.com"));
afficherAnnuaire();