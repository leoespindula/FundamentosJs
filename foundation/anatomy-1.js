// Function Declaration

function sayHello(){
    console.log('Hello')
}

sayHello()

function sayHelloTo(name){
    console.log('Hello ' + name)
    console.log(`Olá ${name}`)
}

sayHelloTo('Mike')

function returnHi(){
    return 'Olaa!'
}
let saudacao = returnHi()
console.log(saudacao)
console.log(returnHi())

function returnHiTo(name){
    return `Olá ${name}!`
}

console.log(returnHiTo('Jhon'))