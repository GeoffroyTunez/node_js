class Livre {
    constructor() {
        this.nom = "";
        this.auteur = "";
        this.nbPage = 0;
    }

    setNom(nom) {
        this.nom = nom;
    }

    getNom() {
        return this.nom;
    }

    setAuteur(auteur) {
        this.auteur = auteur;
    }

    getAuteur() {
        return this.auteur;
    }

    setNbPage(nb) {
        this.nbPage = nb;
    }

    getNbPage() {
        return this.nbPage;
    }
}

class Bibliotheque {
    constructor() {
        this.listeLivre = [];
        this.nom = "";
    }

    AjouterLivre(livre) {
        if (this.listeLivre.findIndex(l => l.getNom() === livre.getNom()) === -1) {
            this.listeLivre.push(livre);
            return true;
        } else {
            console.log("Ce livre se trouve déjà dans la bibliothèque");
        }
        return false;
    }

    rechercherLivre(nomLivre) {
        const livreTrouve = this.listeLivre.find(livre => livre.getNom() === nomLivre);
        if (livreTrouve) {
            console.log("Livre trouvé dans la bibliothèque");
            return true;
        } else {
            console.log("Livre non trouvé dans la bibliothèque");
            return false;
        }
    }

    setNom(nom) {
        this.nom = nom;
    }

    getNom() {
        return this.nom;
    }
}


let bibliotheque1 = new Bibliotheque();
bibliotheque1.setNom("Test");

let livre1 = new Livre();
livre1.setNom("Test");
livre1.setAuteur("Jean");
livre1.setNbPage(10);



bibliotheque1.AjouterLivre(livre1);


bibliotheque1.rechercherLivre(livre1.getNom());
