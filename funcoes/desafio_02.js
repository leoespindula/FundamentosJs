const carrinho = [
    {nome:'Caneta', qtde: 10, preco: 7.99, fragil: true},
    {nome:'Impressora', qtde: 1, preco: 649.50, fragil: true},
    {nome:'Caderno', qtde: 4, preco: 27.10, fragil: false},
    {nome:'Lapis', qtde: 3, preco: 5.82, fragil: true},
    {nome:'Tesoura', qtde: 1, preco: 19.20, fragil: false},
]

// filter, map, reduce

// 1.fragil: true
// 2.qtde * preco -> total
// 3.media totais

const media = carrinho.filter(item => item.fragil)