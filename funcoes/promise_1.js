let a = 1
console.log(a)

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

function primeiroElemento(array){
    return array[0]
}

function primeiraLetra(string){
    return string[0]
}

p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))
