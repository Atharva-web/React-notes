let arr = [
    {
        id: 1,
        name: "Atharva"
    },
    {
        id: 1,
        name: "Atharva"
    },
    {
        id: 1,
        name: "Atharva"
    }
]

let obj = {
    id: 2,
    name: "Aditya"
}

let arr2 = [
    ...arr, obj
]

console.log(arr2)