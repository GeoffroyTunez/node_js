// Créez un script qui :
// Demande l’âge de l’utilisateur.
// Affiche :
// "Vous êtes mineur." si l'âge est inférieur à 18.
// "Vous êtes majeur." si l'âge est égal ou supérieur à 18.
// Ajoutez une vérification si l’utilisateur n’a pas entré un nombre valide.
const prompt = require("prompt-sync")({ sigint : true})
const age = parseInt( prompt("Age : ") )

if ( isNaN(age) ) {
  console.log("Le prompt n'est pas un nombre")
}

if (age < 18) {
  console.log("Vous êtes mineur")
} else {
  console.log("Vous êtes majeur")
}

