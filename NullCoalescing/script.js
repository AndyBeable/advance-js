function greet(firstName = 'Andy', lastName) {
    lastName = lastName ?? "Beable"
    console.log(`${firstName} ${lastName}`)
}

greet("Andy", null)
