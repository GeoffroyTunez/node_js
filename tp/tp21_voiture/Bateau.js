class Bateau extends Vehicule{
    constructor(){
        this.nom = ""
        this.marque = ""
        this.nbVoile = 0
    }

    setNbVoile(nb){
        this.nbVoile = nb
    }

    getNbVoile(){
        return this.nbVoile
    }
}