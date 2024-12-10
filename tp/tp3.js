const prompt = require("prompt-sync")({ sigint: true });

const phrase = prompt("Veulliez rentré un phrase.");

console.log("La phrase : " + (phrase.toUpperCase()));

if(phrase.includes("JavaScript")){
    console.log("JavaScript est présent dans la phrase!");
}