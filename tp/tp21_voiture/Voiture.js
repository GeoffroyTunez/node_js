class Voiture extends Vehicule{
    constructor(){
        this.nom = ""
        this.marque = ""
        this.nbChevaux = 0
    }

    setNbChevaux(nb){
        this.nbChevaux = nb
    }

    getNbChevaux(){
        return this.nbChevaux
    }

    klaxonner(){
        console.log("HOOOONNNKKK")
    }
}