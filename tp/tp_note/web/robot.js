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
        this.energie = 100; // 100%
        this.positionAvantChargement= [0,0]
        this.nbRecharge =0
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

             // GETTER ET SETTER 

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

    getEnergie(){
        return this.energie
    }

    setEnergie(nb){
        this.energie = nb
    }

    setNbRecharge(nb){
        this.nbRecharge = nb
    }

    getNbRecharge(){
        return this.nbRecharge
    }

    setPostionAvantChargement(pos){
        this.positionAvantChargement = pos
        console.log("Nouvelle positon d'avant chargement : " + this.getPostionAvantChargement())
    }

    getPostionAvantChargement(){
        return this.positionAvantChargement
    }

            // FIN    GETTER ET SETTER 


    perteEnergie(){
        this.energie = (this.getEnergie() - 1)
    }

    checkEnergie(){
        console.log("*Check energie...")
        if(this.getEnergie() <= 22 ){
            console.log("*Energie insuffisante")
            this.setPostionAvantChargement(this.getPosition()) 
            console.log(`*** Enregistrement de la position... (${this.getPostionAvantChargement()})`)
            this.retourneAuChargeur()
        }
        console.log("*Energie suffisante")
    }

    retourneAuChargeur(){
        console.log('    Retour au chargeur')
        let x = this.getPosition().at(0)
        let y = this.getPosition().at(1)

        for(y; y != 0; y--){
            this.seDeplacer(Mouvement.Haut,true)
            this.afficherGrille(this.grille,this)
        }
        for(x; x != 0; x--){
            this.seDeplacer(Mouvement.Gauche,true)
            this.afficherGrille(this.grille,this)
        }
        console.log("Arrivé ")
        if (this.getPosition()[0] === 0 && this.getPosition()[1] === 0) {
            this.chargementDeLaBatterie()
            console.log(this.getPostionAvantChargement())
            die("test")
            this.seDeplacerVersCoordonnée(this.getPostionAvantChargement())
        }

    }

    chargementDeLaBatterie(){
        console.log("Arriver a la station de recharge ...")
        this.setEnergie(20)
        while(this.getEnergie() !== 100){
            this.setEnergie(this.getEnergie() + 10)
            console.log(`Chargement... ${this.getEnergie()}`)
            this.setNbRecharge = this.getNbRecharge +1
        }
    }

    /**
     * Déplace le robot dans la direction spécifiée
     */
    seDeplacer(direction,skip) {
        console.log("--------------------------------")
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

        console.log("position : " + this.getPosition())

        // Vérifier si la nouvelle position est valide

            if(this.checkPosition() === true) {
                // console.log(`Position : ${this.getPosition()} validée !`)
                console.log(`Le robot c'est déplacer de [${oldPos}] vers [${this.getPosition()}] `)
                this.setDernierePosition(this.position);
                this.perteEnergie()
                return true;
            } else {
                console.log(`Position : ${this.getPosition()} invalide !`)
                this.reculer();
                console.log(this.getPosition())
                this.perteEnergie()
                
                return false;
            }
    }

    seDeplacerVersCoordonnée(pos) {
        let directionX = pos[0]; // Accéder directement à l'élément 0
        let directionY = pos[1]; // Accéder directement à l'élément 1
        console.log(`x = ${directionX} | y = ${directionY}`);  // Vérifiez la valeur
    
        // Ajout d'un test pour confirmer la position reçue
        if (typeof directionX === 'undefined' || typeof directionY === 'undefined') {
            console.error("Erreur: la position passée est invalide");
            return;
        }
    
        // Déplacement en X
        for (let x = this.getPosition()[0]; x !== directionX; x += directionX > this.getPosition()[0] ? 1 : -1) {
            this.seDeplacer(directionX > this.getPosition()[0] ? Mouvement.Droite : Mouvement.Gauche);
        }
    
        // Déplacement en Y
        for (let y = this.getPosition()[1]; y !== directionY; y += directionY > this.getPosition()[1] ? 1 : -1) {
            this.seDeplacer(directionY > this.getPosition()[1] ? Mouvement.Bas : Mouvement.Haut);
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
        this.perteEnergie()

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
        this.perteEnergie()

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
    afficherGrille(grille, robot) {
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

}

export default Robot;
