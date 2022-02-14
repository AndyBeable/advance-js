const array = ["A", "B", "C", "D"]
const numberArray = [2, 3, 4]
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

function sum(multiplier,...numbers) {
    console.log('multiplier', multiplier)
    console.log('numbers', numbers)
    return multiplier * numbers.reduce((sum, number) => sum + number, 0)
}
// sum(20,2, 4,3)
// console.log(sum(10, 2, 4))

sum(...numberArray) // using spread

function concatName(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
}

const names = ['Andy', 'Beable']
concatName(...names)
