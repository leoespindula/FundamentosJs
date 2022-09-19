class Produto{

    constructor(nome, preco, desc){
        this.nome = nome
        this.preco = preco
        this.desc = desc
    }

    get nome() {
        return `Produto: ${this._nome}`
    }
    set nome(novoNome){
        this._nome = novoNome.toUpperCase()
    }

    get precoFinal(){
        return this.preco * (1 - this.desc)
    }  
}

const p1 = new Produto('caneta', 8.59)
console.log(p1.nome)

const p2 = new Produto('Geladeira', 2597.36, 0.8)
console.log(p2.nome)
console.log(p2.preco)
console.log(p2.precoFinal)
