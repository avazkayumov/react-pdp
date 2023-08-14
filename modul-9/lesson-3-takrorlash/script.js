// function add(...numbers) {
//     let sum = 0
    
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i]
//     }
//     console.log(sum);
// }

// add(1,2)
// add(4,5,7,8)

Array.prototype.map2 = (numbers) => {
    let result = numbers.reduce((prevValue, currValue) => prevValue + currValue, 0)
    console.log(result);     
}

let a = [1,2,4,5,6]

a.map2(a)