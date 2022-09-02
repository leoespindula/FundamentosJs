const numbers = [1, 2, 3, 4, 5, 6]

const numbersV2 = numbers.map(function (el){
    return el * 2
})

console.log(numbers)
console.log(numbersV2)

const students = [
    {name:'Jake', score: 6.4},
    {name:'Susan', score: 4.9},
    {name:'Emma', score: 7.8},
    {name:'Peter', score: 9.4},
]

const getScore = el => el.score

console.log(students.map(getScore))

console.log(students.map(getScore)
                    .map(Math.ceil)
)

console.log(students.map(getScore)
                    .map(Math.floor)
)