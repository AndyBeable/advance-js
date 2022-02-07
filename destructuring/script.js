const array = ['A', 'B', 'C', 'D']
const person = {
    name: "Andy",
    age: 33,
    favouriteFood: 'Pizza',
    address: {
        street: '123 Main Street',
        city: 'London'
    }
}

// ARRAY DESTRUCTURING

const [first, second, ,fourth] = array
console.log('destructured', first)
console.log('destructured',second)
console.log('destructured',fourth)

function addAndMultiply(a, b) {
    return [a + b, a * b]
}

const [sum, product] = addAndMultiply(4, 5)
console.log(sum)
console.log(product)

const firstInArray = array[0]
const secondInArray = array[1]
console.log(firstInArray)
console.log(secondInArray)
