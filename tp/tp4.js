const prompt = require("prompt-sync")({ sigint: true });

function genererMotDePasse(longueur) {
    const lettresMinuscules = "abcdefghijklmnopqrstuvwxyz";
    const lettresMajuscules = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const chiffres = "0123456789";
    const caracteres = lettresMinuscules + lettresMajuscules + chiffres;
    
    let motDePasse = "";
    for (let i = 0; i < longueur; i++) {
        const indexAleatoire = Math.floor(Math.random() * caracteres.length);
        motDePasse += caracteres[indexAleatoire];
    }
    return motDePasse;
}


const longueur = parseInt(prompt("Entrez la longueur du mot de passe : "));


if (longueur == null || longueur <= 0) {
    console.log("Veuillez entrer un nombre valide et supérieur à 0.");
} else {
    const motDePasse = genererMotDePasse(longueur);
    console.log("Votre mot de passe généré est : " + motDePasse);
}
