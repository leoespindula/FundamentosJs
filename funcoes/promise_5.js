// function funcionarOuNao(valor, chanceErro){
//     return new Promise((resolve, reject) => {
//         if(Math.random() < chanceErro){
//             reject('Ocorreu um erro!')
//         } else{
//             resolve(valor)
//         }
//     })
// }

// funcionarOuNao('Testando...', 0.5)
//     .then(v => console.log(`Valor: ${v}`))
//     .catch(err => console.log(`Erro: ${err}`))
//     .then(() => console.log('Fim!'))

function erroOuNao(valor, chanceErro){
    return new Promise((resolve, reject) => {
        try{
            con.log('temp')
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e){
            resolve(valor)
        }
    })
}

erroOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),
        err=> console.log(`Erro Esp.:${err}`)
    )
    .then(()=> console.log('Quase Fim!'))
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim!'))