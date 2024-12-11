class Robot{
    constructor() {
        this.nom = "";  // Nom du robot, mais sans spécification de type
        this.position = [0, 0]; // [X, Y] -> gauche/droite, haut/bas
    }

    getNome(){
        return this.nom
    }

    setNome(nom){
        this.nom = nom
    }

    getPosition(){
        return this.position
    }

    setPosition(position){
        this.position = position;
    }

    /**
     * 
     */
    seDeplacer(direction) {
        if(direction === "haut"){
            this.position[1]++
            return true
        }else if(direction === "bas"){
            this.position[1]--
            return true
        }else if(direction === "gauche"){
            this.position[0]--
            return true
        }else if(direction === "droite"){
            this.position[0]++
            return true
        }else{
            console.log("Mauvaise direction")
            return false
        }

    }

    /**
     * 
     */
    nettoyer() {
        console.log("Position acutelle propre ! ")
    }

    /**
     * 
     */
    afficherPosition() {
        console.log(`Position : \n Verticale : ${this.position[0]}, Horizontale : ${this.position[1]} `)
    }

    /**
     * 
     */
    reinitialiserPosition() {
        this.setPosition([0,0])
        return true
    }

}