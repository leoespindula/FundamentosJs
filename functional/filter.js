const numbers = [1, 2, 3, 4, 5, 6]

const greaterThanZero = el => el >0
const greaterThanFour = el => el >4
const even = el => el % 2 === 0

console.log(numbers.filter(greaterThanZero))
console.log(numbers.filter(greaterThanFour))
console.log(numbers.filter(el => el >2))
console.log(numbers.filter(even))


const students = [
    {name:'Jake', score: 6.4},
    {name:'Susan', score: 4.9},
    {name:'Emma', score: 7.8},
    {name:'Peter', score: 9.4},
]

const greatStudent = student => student.score >=9

console.log (students.filter(greatStudent))
console.log(students)