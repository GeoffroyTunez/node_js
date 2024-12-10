// Écrivez un programme qui :
// Demande à l’utilisateur une phrase.
// Affiche la longueur de cette phrase.
// Convertit la phrase en majuscules et l’affiche.
// Vérifie si le mot "JavaScript" est présent dans la phrase.
const prompt = require("prompt-sync")({ sigint : true})


const sentence = prompt("Entrez une phrase : ")

console.log(sentence.toUpperCase())
console.log(sentence.includes("JavaScript"))
