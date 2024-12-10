const letters = "abcdefghijklmnopqrstuvwxyz"
const numbers = "1234567890"

const caracters = letters + letters.toUpperCase() + numbers


let password = ""

const caractersLength = caracters.length

let randomLetter = caracters.charAt( Math.round(Math.random() * caractersLength) )
password = password + randomLetter

randomLetter = caracters.charAt( Math.round(Math.random() * caractersLength) )
password = password + randomLetter

randomLetter = caracters.charAt( Math.round(Math.random() * caractersLength) )
password = password + randomLetter

randomLetter = caracters.charAt( Math.round(Math.random() * caractersLength) )
password = password + randomLetter

randomLetter = caracters.charAt( Math.round(Math.random() * caractersLength) )
password = password + randomLetter

randomLetter = caracters.charAt( Math.round(Math.random() * caractersLength) )
password = password + randomLetter

randomLetter = caracters.charAt( Math.round(Math.random() * caractersLength) )
password = password + randomLetter

randomLetter = caracters.charAt( Math.round(Math.random() * caractersLength) )
password = password + randomLetter

console.log(password)