function greet(firstName, lastName, {salutation, suffix }) {
    console.log(`${salutation} ${suffix} ${firstName} ${lastName}`)
}
greet("Andy", 'Beable', { suffix: 'Sir', salutation: "Hi"})
