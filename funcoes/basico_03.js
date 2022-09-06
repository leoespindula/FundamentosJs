// arrow function 
const saudacao = () => console.log('Olá, seja bem vindo!!!')
saudacao()

const saudacaoNome = nome => `Olá ${nome}, seja bem vindo(a)!!!`
console.log(saudacaoNome('Maria'))

const somar = (...numeros) => {
    console.log(Array.isArray(numeros))
    let total = 0
    for(let n of numeros){
        total += n
    }
    return total
}

console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
console.log(somar(1, 2, 3, 4))

const potencia = base => exp => Math.pow(base, exp)

console.log(potencia(2)(8))

//this 
Array.prototype.log = function() {
    console.log('Opaaa!!!')
}

const numeros = [1, 2, 3]
numeros.log()