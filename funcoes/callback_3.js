const nums = [1, 2, 3, 4, 5]
const dobro = n => n * 2 
console.log(nums.map(dobro))
const teste = (n, i) => n * 2 + i
console.log(nums.map(teste))

const nomes = ['Ana', 'José', 'Pedro', 'Matheus', 'Tobias']
const primeiraLetra = texto => texto[0]
console.log(nomes.map(primeiraLetra))

const carrinho = [
     {nome:'Caneta', qtde: 10, preco: 7.99},
     {nome:'Impressora', qtde: 1, preco: 649.50},
     {nome:'Caderno', qtde: 4, preco: 27.10},
     {nome:'Lapis', qtde: 3, preco: 5.82},
     {nome:'Tesoura', qtde: 5, preco: 19.20}
]

// const getNome = item=> item.nome
// console.log(carrinho.map(getNome))

// const getTotal = item => item.qtde * item.preco
// const totais = carrinho.map(getTotal)
// console.log(totais)

Array.prototype.meuMap = function(fn){
    const novoArray = []
    for(let i = 0; i < this.length; i ++){
        const result = fn(this[i], i, this)
        novoArray.push(`===>${result}`)      
    }
    return novoArray
}

const getNome = item=> item.nome
console.log(carrinho.meuMap(getNome))

const getTotal = item => item.qtde * item.preco
const totais = carrinho.meuMap(getTotal)
console.log(totais)