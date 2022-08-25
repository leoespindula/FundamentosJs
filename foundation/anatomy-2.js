// Anonimous function
 (function(a, b, c){
    return a + b + c
 })

// Function Expression
const sum = function (a, b) {
    return a + b
}

const resultado = sum (7, 59)
console.log(resultado)

const anotherSum = sum
console.log(anotherSum(7, 98))

let x = 3
console.log(x)

x = sum
console.log(x(11, 16)) 