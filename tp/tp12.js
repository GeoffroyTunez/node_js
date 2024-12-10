const prompt = require("prompt-sync")({ sigint: true });

function getFullName(firstName, lastName) {
    firstName = capitalize(firstName);
    lastName = capitalize(lastName);
    return firstName + " " + lastName;
}

function capitalize(string) {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
    firstName = prompt("Nom : ")
    lastName = prompt("Prenom :")

console.log(getFullName(firstName, lastName));
