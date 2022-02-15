const Andy = {
    name: 'Andy',
    age: 33,
    address: {
        street: '123 Main St',
        city: 'London'
    },
    // sayHi() {
    //     console.log('Hi')
    // },
    hobbies: ['Running', "Eating"]
}

// function printStreet(person) {
//     console.log(person?.address?.street)
// }

// printStreet(Andy)

// function sayHi(person) {
//     person?.sayHi?.()
// }
// sayHi(Andy)


function printHobbyOne(person) {
    console.log(person?.hobbies?.[0])
}
printHobbyOne(Andy)
