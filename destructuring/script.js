const array = ['A', 'B', 'C', 'D']
// ARRAY DESTRUCTURING

const [first, second, ,fourth] = array
// console.log('destructured', first)
// console.log('destructured',second)
// console.log('destructured',fourth)

function addAndMultiply(a, b) {
    return [a + b, a * b]
}

// const [sum, product] = addAndMultiply(4, 5)
// console.log(sum)
// console.log(product)

const firstInArray = array[0]
const secondInArray = array[1]
// console.log(firstInArray)
// console.log(secondInArray)

// OBJECT DESTRUCTURING
const person = {
    name: "Andy",
    age: 33,
    favouriteFood: 'Pizza',
    address: {
        street: '123 Main Street',
        city: 'London',
        zipcode: '555'
    }
}

// const {name: firstName, age, favouriteFood, address} = person
// const {address: { street, city, zipcode = '12345' }}  = person
// console.log(firstName)
// console.log(age)
// console.log(address)
// console.log(street)
// console.log(city)
// console.log(zipcode)
// const name = person.name
// const age = person.age
// console.log(name)
// console.log(age)


// USE CASE - if you want to get multiple properties from an object
// const {
//     age,
//     name,
//     favouriteFood,
//     address: {
//         steet
//     }
// } = person

// function addAndMultiply(a, b) {
//     return {sum: a + b, product: a * b}
// }
//
// const {sum, product} = addAndMultiply(2, 3)
// console.log('sum', sum, 'product', product);

// EXERCISE
//
// function nameToFirstAndLast(fullName) {
//     const [firstName, lastName] =  fullName.split(' ')
//     return {
//         firstName: firstName,
//         lastName: lastName
//     }
// }
//
// const { firstName, lastName } = nameToFirstAndLast("Andy Beable") // obj destructure
// // const [ firstName, lastName ] = nameToFirstAndLast("Andy Beable") //  array destructure
// console.log(firstName)
// console.log(lastName)

// Using destrucutring as parameters to a function

// function addAndMultiply(options) {
//     const a = options.a;
//     const b = options.b
//     return [a + b, a * b]
// }
//
// const [sum, product] = addAndMultiply({a: 2, b: 3})
// console.log(sum, product)


// Same function as above but using destructuring
// function addAndMultiply(options) {
//     const {a, b} = options
//     return [a + b, a * b]
// }
//
// const [sum, product] = addAndMultiply({a: 2, b: 3})
// console.log(sum, product)

// Now destructuring in the parameters

function addAndMultiply({a, b = 4}) { // using default values for b
    return [a + b, a * b]
}

const [sum, product] = addAndMultiply({a: 2})
console.log(sum, product)
