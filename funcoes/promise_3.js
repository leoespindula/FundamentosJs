function gerarNumeroEntre(min, max) {
    if(min > max){
        let a = [min, max]
        [max, min] = [min, max]
    }
    return new Promise(resolve =>{
        const aleatorio = parseInt(Math.random() * (max - min + 1))+ min
        resolve(aleatorio)
    })
}

gerarNumeroEntre(10, 30)
    .then(num => num * 10)
    .then(numx10 => `O numero gerado foi ${numx10}`)
    .then(console.log)