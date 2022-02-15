// const user = {
//     name: 'Andy',
// }
//
// const map = new Map ([
//   [1, 'A'],[2, 'B'],[3, 'C'],[4, 'D'],
// ])
//
// console.log(map.get(1))
// console.log(map.set(5, 'E'))
// console.log(map.has(6))
// console.log(map)
// map.delete(1)
// console.log(map)
// map.clear()

// const obj =  {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4
// }

// Object.entries(obj).forEach(([key, value]) => {
//     console.log(key, value)
// })

// map.forEach((value, key) => {
//     console.log(value, key)
// })
//
// console.log(map.size)

// const items = [
//     {
//         id: 1,
//         name: 'Test 1',
//         description: 'Desc 1'
//     },
//     {
//         id: 2,
//         name: 'Test 2',
//         description: 'Desc 2'
//     },
//     {
//         id: 3,
//         name: 'Test 3',
//         description: 'Desc 3'
//     }
// ]

const items2 = new Map ([
    [1, {
        id: 1,
        name: 'Test 1',
        description: 'Desc 1'
    }],
    [2,{
        id: 2,
        name: 'Test 2',
        description: 'Desc 2'
    }],
    [3, {
        id: 3,
        name: 'Test 3',
        description: 'Desc 3'
    }]
])

function getItem(id) {
   return items2.get(id)
}

console.log(getItem(2))
