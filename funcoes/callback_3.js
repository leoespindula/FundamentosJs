const nums = [1, 2, 3, 4, 5]
const dobro = n => n * 2 
console.log(nums.map(dobro))
const teste = (n, i) => n * 2 + i
console.log(nums.map(teste))

const nomes = ['Ana', 'José', 'Pedro', 'Matheus', 'Tobias']
const primeiraLetra = texto => texto[0]
console.log(nomes.map(primeiraLetra))
