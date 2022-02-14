const propertyName = 'name'
const index = 1
const firstName = "Andy"
const age = 33

const person = {
    [propertyName]: firstName,
    [`age${index}`]: age,
    sayHi() {
        console.log('Hi')
    },
}



console.log(person)
