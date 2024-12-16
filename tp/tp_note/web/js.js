import Robot, { Mouvement } from './robot.js';

const temps_attente = 10
// Initialiser la grille avec 7x7 cases
function initialiserGrille() {
    const taille = 7;
    let grille = [];

    for (let i = 0; i < taille; i++) {
        grille[i] = [];
        for (let j = 0; j < taille; j++) {
            grille[i][j] = " ";  // Initialiser chaque cellule avec un espace vide
        }
    }

    return grille;
}

// Mettre à jour l'affichage de la grille dans le DOM

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
 function commencerNettoyage() {
    // Boucle de nettoyage en zig-zag
    for (let y = 0; y < 6; y++) {
        monRobot.checkEnergie()
        // Nettoyage de chaque case de gauche à droite
        for (let i = 0; i < 7; i++) {
            monRobot.checkEnergie()
            monRobot.nettoyer();
            monRobot.seDeplacer(Mouvement.Bas,false);

            // Assurez-vous que le robot ne dépasse pas les limites
            if (monRobot.getPosition()[1] >= 7) {
                break;
            }

            monRobot.afficherGrille(monRobot.getGrille(), monRobot);  // Afficher la grille après chaque mouvement
            // await delay(temps_attente);  // Attendre 1 seconde
        }

        // Déplacer le robot d'une case à droite à la fin de chaque ligne
        monRobot.seDeplacer(Mouvement.Droite,false);

        monRobot.afficherGrille(monRobot.getGrille(), monRobot);  // Afficher la grille après chaque mouvement

        // Nettoyer de bas en haut (pour le retour)
        for (let i = 7; i > 0; i--) {
            monRobot.checkEnergie()
            monRobot.seDeplacer(Mouvement.Haut,false);

            // Assurez-vous que le robot ne dépasse pas les limites
            if (monRobot.getPosition()[1] <= 0) {
                break;
            }

            monRobot.afficherGrille(monRobot.getGrille(), monRobot);  // Afficher la grille après chaque mouvement
            // await delay(temps_attente);  // Attendre 1 seconde
        }

        console.log(monRobot.getPosition());
        monRobot.afficherGrille(monRobot.getGrille(), monRobot);  // Afficher la grille après chaque mouvement
        // await delay(temps_attente);  // Attendre 1 seconde
    }
    for (let i = 0; i < 6; i++) {
        monRobot.checkEnergie()
        monRobot.nettoyer();
        monRobot.seDeplacer(Mouvement.Bas,false);

        monRobot.afficherGrille(monRobot.getGrille(), monRobot);  // Afficher la grille après chaque mouvement
        // await delay(temps_attente);  // Attendre 1 seconde
    }

    console.log(monRobot.getPosition());
    monRobot.afficherGrille(monRobot.getGrille(), monRobot);  // Afficher après la fin

    document.getElementById("paraf-fin").style.display = "block"
    console.log(`Energie a la fin du nettoyage : ${monRobot.getEnergie()}`)
    console.log("Nombre total de recharge : " + monRobot.getNbRecharge())
}

// Initialiser le robot et la grille
let monRobot = new Robot();
monRobot.setName("Robo1");
let grille = initialiserGrille();
monRobot.setGrille(grille);

// Afficher la grille initiale avec le robot
monRobot.afficherGrille(grille, monRobot);
const button_start = document.getElementById("demarrer-nettoyage")

button_start.addEventListener("click", function() {
    button_start.style.display = "none"
    commencerNettoyage();
});