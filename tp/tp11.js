const prompt = require("prompt-sync")({ sigint: true });

function calculateTotal(price, taxRate) {
    if (!taxRate) { 
        taxRate = 0.2; 
    }

    return price + (price * taxRate);
}

const price = parseFloat(prompt("Montant du prix : "));
if (isNaN(price) || price <= 0) {
    console.log("Veuillez entrer un montant de prix valide.");
    process.exit(1);
}

let taxRate = prompt("Montant de la taxe (par défaut 20%) : ");
if (taxRate === "") {
    taxRate = null;
} else {
    taxRate = parseFloat(taxRate);
    if (isNaN(taxRate) || taxRate < 0) {
        console.log("Veuillez entrer un taux de taxe valide.");
        process.exit(1);
    }
}

const total = calculateTotal(price, taxRate);

console.log("Total après taxe : " + total.toFixed(2));
