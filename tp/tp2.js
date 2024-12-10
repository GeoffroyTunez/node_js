const prompt = require("prompt-sync")({ sigint: true });

const variable = prompt("Quelle est votre âge ? ");

const variableInt = parseInt(variable);

if (isNaN(variableInt) || variableInt < 0) {
    console.log("Veuillez entrer un nombre valide.");
    exit
}

if (variableInt >= 18) {
    console.log("Vous êtes majeur.");
} else {
    console.log("Vous êtes mineur.");
}
