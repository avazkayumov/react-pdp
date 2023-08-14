const arr = ["1", "2", "3", "tort", "5", "HELLO"]

let numbers = arr.filter(Number)
let result = numbers.map(num => console.log(Number(num)))