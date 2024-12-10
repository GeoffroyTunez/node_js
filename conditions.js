
const age = Math.round(Math.random() * 40)

console.log(age)

if (age > 18) {
  console.log("Vous êtes majeur.")
} else {
  console.log("Vous êtes mineur.")
}

if (age > 18 && age < 40) {
  console.log("Entre 18 et 40")
}

if ( !(age < 18) || age > 40) {
  console.log("Inférieur à 18 ou supérieur à 40")
}


if ( age !== 18 ){
  console.log("Age n'est pas 18")
}

if (18 === "18") {
  console.log("true")
}







