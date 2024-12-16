export const Mouvement = Object.freeze({
    Haut: "haut",
    Bas: "bas",
    Gauche: "gauche",
    Droite: "droite"
});

class Robot {
    constructor() {
        this.name = "";  // Nom du robot
        this.position = [0, 0]; // [X, Y] -> gauche/droite, haut/bas
        this.positionNettoyees = []; // Historique des positions nettoyées
        this.dernierePosition = [0, 0]; // Dernière position enregistrée
        this.grille = []; // Initialisation de la grille
    }

    // Initialiser la grille
    initialiserGrille() {
        const taille = 7;  // Taille de la grille (de -3 à 3)
        let grille = [];
        
        // Créer une grille 7x7 initialisée avec des espaces
        for (let i = 0; i < taille; i++) {
            grille[i] = [];
            for (let j = 0; j < taille; j++) {
                grille[i][j] = " ";  // Initialiser chaque cellule avec un espace
            }
        }
        
        return grille;  // Renvoyer la grille créée
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getPosition() {
        return this.position;
    }

    setPosition(position) {
        this.position = position;
    }

    getGrille() {
        return this.grille;
    }

    setGrille(grille) {
        this.grille = grille;
    }

    /**
     * Déplace le robot dans la direction spécifiée
     */
    seDeplacer(direction) {
        console.log("Le robot ce déplace...")
        let oldPos = this.dernierePosition
        switch(direction) {
            case Mouvement.Haut:
                this.position[1]--;
                break;
            case Mouvement.Bas:
                this.position[1]++;
                break;
            case Mouvement.Gauche:
                this.position[0]--;
                break;
            case Mouvement.Droite:
                this.position[0]++;
                break;
            default:
                console.log("Mauvaise direction");
                return false;
        }

        console.log(this.getPosition())

        // Vérifier si la nouvelle position est valide
        if(this.checkPosition() === true) {
            // console.log(`Position : ${this.getPosition()} validée !`)
            console.log(`Le robot c'est déplacer de [${oldPos}] vers [${this.getPosition()}] `)
            this.setDernierePosition(this.position);
            return true;
        } else {
            console.log(`Position : ${this.getPosition()} invalide !`)
            this.reculer();
            console.log(this.getPosition())
            return false;
        }
    }

    /**
     * Vérifie si la position du robot est dans les limites autorisées (-3 à 3 pour X et Y)
     */
    checkPosition() {
        const [x, y] = this.getPosition();
        if (x >= 0 && x <= 6 && y >= 0 && y <= 6) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Enregistre la dernière position avant déplacement
     */
    setDernierePosition(position) {
        this.dernierePosition = position.slice(); // Créer une copie de la position
    }

    /**
     * Restaure la dernière position du robot
     */
    reculer() {
        this.setPosition(this.dernierePosition);
        console.log("Le robot a reculé à sa dernière position.");
        return this.getPosition();
    }

    /**
     * Nettoie la position actuelle du robot
     */
    nettoyer() {
        console.log("Position actuelle propre !");
        const [x, y] = this.position;
        this.grille[y][x] = "X";  // Marquer la position nettoyée sur la grille
        this.positionNettoyees.push(this.position.slice()); // Ajouter la position nettoyée
    }

    /**
     * Affiche la position du robot
     */
    afficherPosition() {
        console.log(`Position : \n Verticale : ${this.position[1]}, Horizontale : ${this.position[0]}`);
    }

    /**
     * Réinitialise la position du robot
     */
    reinitialiserPosition() {
        this.setPosition([0, 0]);
        return true;
    }

    /**
     * Retourne l'historique des positions nettoyées
     */
    historiqueNettoyage() {
        return this.positionNettoyees;
    }

    /**
     * Affiche la grille avec la position du robot
     */
    // Exemple d'update dans la méthode afficherGrille
    afficherGrille(grille) {
        let grilleHtml = '';
        for (let i = 0; i < grille.length; i++) {
            let ligne = '';
            for (let j = 0; j < grille[i].length; j++) {
                let positionRobot = this.getPosition();

                // Vérifier si la position du robot correspond à la cellule de la grille
                if (positionRobot[0] === j && positionRobot[1] === i) {
                    ligne += "<span class='cellule'>R</span>";  // Placer un "R" pour représenter le robot
                } else {
                    ligne += `<span class='cellule'>${grille[i][j]}</span>`;  // Ajouter le contenu de la cellule
                }
            }
            grilleHtml += ligne + "<br>"; // Ajouter un retour à la ligne après chaque ligne de la grille
        }
        
        // Afficher la grille dans l'élément HTML
        document.getElementById("grille-container").innerHTML = grilleHtml;
    }

}

export default Robot;
