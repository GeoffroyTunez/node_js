class Robot{
    constructor() {
        this.nom = "";  // Nom du robot, mais sans spécification de type
        this.position = [0, 0]; // [X, Y] -> gauche/droite, haut/bas
        this.positionNettoyees = []
        this.dernierePosition = [0,0]
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

    getDernierePosition(){
        return this.this.dernierePosition
    }

    setDernierePosition(dernierePosition){
        this.dernierePosition = this.dernierePosition;
    }


    /**
     * 
     */
    seDeplacer(direction) {
        if(direction === "haut"){
            this.setDernierePosition(this.position)
            this.position[1]++
            return true
        }else if(direction === "bas"){
            this.setDernierePosition(this.position)
            this.position[1]--
            return true
        }else if(direction === "gauche"){
            this.setDernierePosition(this.position)
            this.position[0]--
            return true
        }else if(direction === "droite"){
            this.setDernierePosition(this.position)
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
        this.positionNettoyees.push(this.position)
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

    historiqueNettoyage(){
        return this.historiqueNettoyage
    }

    reculer(){
        this.setPosition(this.dernierePosition)
        return this.getPosition
    }




}