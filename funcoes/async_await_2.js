function gerarNumerosEntre(min, max, numerosProibidos){
    if(min> max) [max, min] = [min, max]
    return new Promise ((resolve, reject )=> {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)){
            reject('Número repetido!')
        }else{
        resolve(aleatorio)
        }
    })
}

async function gerarMegaCena(qtdeNumeros, tentativas = 1){
    try{
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()){
        numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch(e) {
        if(tentativas > 100) {
            throw"Não deu certo"
        }else{
            return gerarMegaCena(qtdeNumeros, tentativas + 1)
        } 
    }   
}
// gerarNumerosEntre(1, 5, [1, 2, 4])
//     .then(console.log)
//     .catch(console.log)

gerarMegaCena(15)
    .then(console.log)
    .catch(console.log)