function Produto (nome, preco, desc = 0.4) {
    this.nome = nome
    this.preco = preco
    this._desc = desc

    this.precoFinal = function() {
        return this.preco * (1 - this._desc)
    }
}

Produto.prototype.log = function(){
    console.log(`Nome: ${this.nome}, Preço: R$${this.preco}`)
}

Object.defineProperty(Produto.prototype, 'desc', {
    get: function() {
        return this._desc
    }
})

Object.defineProperty(Produto.prototype, 'descString', {
    get: function() {
        return `${this._desc * 100}% de desconto`
    },
    set: function(novoDesc){
        if(novoDesc >=0 && novoDesc <= 1){
            this._desc = novoDesc
        }
    }
})

const p1 = new Produto('caneta', 8.59)
console.log(p1.nome)
p1.log()

const p2 = new Produto('Geladeira', 2597.36)
console.log(p2.nome)
console.log(p2.preco)
console.log(p2.precoFinal())
console.log(p2.desc)
console.log(p2.descString)
