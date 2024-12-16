import Robot, { Mouvement } from './robot.js'; 

let monRobot = new Robot();
monRobot.setName("Robo1");
monRobot.setGrille(monRobot.initialiserGrille())

// Afficher la grille avec la position initiale du robot
monRobot.afficherGrille(monRobot.getGrille());

console.clear();
console.log(`Démarrage avec... ${monRobot.getName()}`);

// Fonction pour introduire un délai (en utilisant une promesse)
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function commencerNettoyage() {
    // Boucle de nettoyage en zig-zag
    for (let y = 0; y < 6; y++) {
        // Nettoyage de chaque case de gauche à droite
        for (let i = 0; i < 7; i++) {
            monRobot.nettoyer();
            monRobot.seDeplacer(Mouvement.Bas);
            monRobot.afficherGrille(monRobot.getGrille());  // Afficher la grille après chaque mouvement
            await delay(1000);  // Attendre 1 seconde
        }

        // Déplacer le robot d'une case à droite à la fin de chaque ligne
        monRobot.seDeplacer(Mouvement.Droite);

        // Nettoyer de bas en haut (pour le retour)
        for (let i = 6; i > 0; i--) {
            monRobot.seDeplacer(Mouvement.Haut);
        }

        console.log(monRobot.getPosition());
        monRobot.afficherGrille(monRobot.getGrille());
    }

    // Continuer à nettoyer après avoir terminé la première boucle (vers le bas)
    for (let i = 0; i < 6; i++) {
        monRobot.nettoyer();
        monRobot.seDeplacer(Mouvement.Bas);
        monRobot.afficherGrille(monRobot.getGrille());  // Afficher après chaque déplacement
    }

    console.log(monRobot.getPosition());
    monRobot.afficherGrille(monRobot.getGrille());
}

// Lancer le nettoyage
commencerNettoyage();
