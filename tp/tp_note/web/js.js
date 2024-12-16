import Robot, { Mouvement } from './robot.js';

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
function afficherGrille(grille, robot) {
    const container = document.getElementById("grille-container");
    container.innerHTML = '';  // Vider le conteneur avant de redessiner la grille

    for (let i = 0; i < grille.length; i++) {
        for (let j = 0; j < grille[i].length; j++) {
            const cellule = document.createElement("div");
            cellule.classList.add("cellule");

            // Marquer la case nettoyée
            if (grille[i][j] === "X") {
                cellule.classList.add("nettoyee");
            }

            // Marquer la position du robot
            const positionRobot = robot.getPosition();
            if (positionRobot[0] === j && positionRobot[1] === i) {
                cellule.classList.add("robot");
                cellule.textContent = "R";  // Afficher "R" pour le robot
            }

            // Ajouter la cellule dans la grille
            container.appendChild(cellule);
        }
    }
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function commencerNettoyage() {
    // Boucle de nettoyage en zig-zag
    for (let y = 0; y < 7; y++) {
        // Nettoyage de chaque case de gauche à droite
        for (let i = 0; i < 8; i++) {
            monRobot.nettoyer();
            monRobot.seDeplacer(Mouvement.Bas);

            // Assurez-vous que le robot ne dépasse pas les limites
            if (monRobot.getPosition()[1] >= 7) {
                break;
            }

            afficherGrille(monRobot.getGrille(), monRobot);  // Afficher la grille après chaque mouvement
            await delay(500);  // Attendre 1 seconde
        }

        // Déplacer le robot d'une case à droite à la fin de chaque ligne
        monRobot.seDeplacer(Mouvement.Droite);

        afficherGrille(monRobot.getGrille(), monRobot);  // Afficher la grille après chaque mouvement

        // Nettoyer de bas en haut (pour le retour)
        for (let i = 7; i > 0; i--) {
            monRobot.seDeplacer(Mouvement.Haut);

            // Assurez-vous que le robot ne dépasse pas les limites
            if (monRobot.getPosition()[1] <= 0) {
                break;
            }

            afficherGrille(monRobot.getGrille(), monRobot);  // Afficher la grille après chaque mouvement
            await delay(500);  // Attendre 1 seconde
        }

        console.log(monRobot.getPosition());
        afficherGrille(monRobot.getGrille(), monRobot);  // Afficher la grille après chaque mouvement
        await delay(500);  // Attendre 1 seconde
    }

    // Continuer à nettoyer après avoir terminé la première boucle (vers le bas)
   

    console.log(monRobot.getPosition());
    afficherGrille(monRobot.getGrille(), monRobot);  // Afficher après la fin
}

// Initialiser le robot et la grille
let monRobot = new Robot();
monRobot.setName("Robo1");
let grille = initialiserGrille();
monRobot.setGrille(grille);

// Afficher la grille initiale avec le robot
afficherGrille(grille, monRobot);

document.getElementById("demarrer-nettoyage").addEventListener("click", function() {
    commencerNettoyage();
});