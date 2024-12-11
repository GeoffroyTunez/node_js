const prompt = require("prompt-sync")({ sigint: true });

const tabMots = [
    "poisson",
    "pain",
    "voiture",
    "avion"
];
const motChoisi = tabMots[Math.floor(Math.random() * tabMots.length)];


const tableauLettres = motChoisi.split('');
let listeLettre = [];
let nbTour = 0;
let trouver = false;

function checkLettre(lettre, listeLettre) {
    if (listeLettre.indexOf(lettre) === -1) {
        listeLettre.push(lettre);
        nbTour++;
    } else {
        console.log("Lettre déjà jouée !");
    }
}

function displayMot(listeLettre) {
    let motAffiche = '';
    for (let i = 0; i < tableauLettres.length; i++) {
        if (listeLettre.indexOf(tableauLettres[i]) === -1) {
            motAffiche += "_";
        } else {
            motAffiche += tableauLettres[i];
        }
    }
    console.log(motAffiche);
}

console.log("Le mot est en minuscule uniquement ! ");
while(!trouver || !perdu){
    if(nbTour === 13 ){
        perdu = true
        break
    }else{

    
        console.log(`Vous êtes à ${x} tentative sur 13`);
        
        const lettre = prompt("Veuillez proposer une lettre ou le mot complet: ");
        
        if (lettre.length !== 1) {
            // Si l'utilisateur propose le mot complet
            if (lettre === motChoisi) {
                trouver = true;
                console.log("Félicitations! Vous avez trouvé le mot.");
                break; // Terminer le jeu immédiatement
            } else {
                console.log("Le mot proposé est incorrect !");
            }
            continue;
        }
        
        checkLettre(lettre, listeLettre);
        displayMot(listeLettre);
        console.log("Liste des lettres déjà jouées : " + listeLettre);
        
        
        trouver = tableauLettres.every(letter => listeLettre.includes(letter));
        
        if (trouver) {
            console.log("Félicitations! Vous avez trouvé le mot.");
            break; 
        }
    }
}

if (!trouver) {
    console.log("Dommage! Vous n'avez pas trouvé le mot. Le mot était: " + motChoisi);
}
