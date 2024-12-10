// Écrivez un programme qui :
// Demande à l'utilisateur d'entrer deux nombres.
// Affiche le résultat des opérations : addition, soustraction, multiplication et division.
const prompt = require("prompt-sync")({ sigint : true})

const nombre1 = parseInt( prompt("Nombre 1 : ") ) 
const nombre2 = parseInt( prompt("Nombre 2 : ") )

console.log(`Addition : ${nombre1 + nombre2}`)
console.log("soustraction : ", nombre1 - nombre2)
console.log("multiplication : ", nombre1 * nombre2)
console.log("division : ", nombre1 / nombre2)
