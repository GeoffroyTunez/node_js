const prompt = require("prompt-sync")({ sigint: true });


const nombre = Math.floor(Math.random() * 100) + 1;
let trouver = false;
let tentative = 0;

console.log("Vous avez 5 essais pour deviner le chiffre qui a été généré !");

while (!trouver && tentative < 5) {
    tentative++;
    const valeurUtil = parseInt(prompt(`Essai ${tentative} - Entrez un chiffre entre 1 et 100 : `));

    if (isNaN(valeurUtil) || valeurUtil < 1 || valeurUtil > 100) {
        console.log("Veuillez entrer un nombre valide entre 1 et 100.");
        tentative--;
        continue;
    }

    if (valeurUtil === nombre) {
        trouver = true;
    } else if (valeurUtil > nombre) {
        console.log("Le nombre est plus petit !");
    } else {
        console.log("Le nombre est plus grand !");
    }
}

if (trouver) {
    console.log(`Bravo ! Vous avez trouvé le nombre ${nombre} en ${tentative} tentative(s) !`);
} else {
    console.log(`Désolé, vous avez utilisé vos 5 essais. Le nombre était : ${nombre}.`);
}
