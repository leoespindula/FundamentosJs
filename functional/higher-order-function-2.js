function finalPrice(tax, price){
    return price *(1 + tax)
}

console.log(finalPrice(0.0875, 25.1))
console.log(finalPrice(0.0875, 21.171))
console.log(finalPrice(0.0875, 107.9))

console.log()

function priceFinal (tax) {
    return function(price){
        return price * (1 + tax)
    }
}

const nycFinalPrice = priceFinal(0.0995)

console.log(nycFinalPrice(25.1))
console.log(nycFinalPrice(21.171))
console.log(nycFinalPrice(107.9))

console.log()

const brasilPrice = priceFinal(0.75)

console.log(brasilPrice(25.1))
console.log(brasilPrice(21.171))
console.log(brasilPrice(107.9))