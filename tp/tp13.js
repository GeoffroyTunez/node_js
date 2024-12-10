const puissance = (a,b) => Math.pow(a,b)
const rest = (a,b) => a % b

function calculerAvance(number1, number2, operation){
    return operation(number1,number2)
}

console.log(calculerAvance(2,3, puissance))
console.log(calculerAvance(2,3, rest))