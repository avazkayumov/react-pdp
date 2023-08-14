// function counter(num) {

//     if (num == 0) {
//         return
//     }
//     console.log(num)
//     counter(num - 2)
// }
// counter(10)


// function getFibonacci(num) {
//     if (num === 1) return 1;
//     if (num === 0) return 0;
//     else return getFibonacci(num - 1) + getFibonacci(num - 2)

// }
// let ans = getFibonacci(10)
// console.log(ans)


// function getDivision(a, b) {
//   if (a < b) return 0
//   else {
//     return getDivision(a - b, b) + 1; // a = 16 - 8,  b = 8, +1 = sum
//   }
// }
// console.log(getDivision(16, 8));


// function getMultiply(num1, num2) {
//     if (num2 === 1) return num1;
//     return num1 + getMultiply(num1, num2 - 1)
// }
// console.log(getMultiply(2,2))


// function qoldiqTopish(a, b) {
//   if (a < b) return 0
//   else {
//     return getDivision(a - b, b);
//   }
// }
// console.log(qoldiqTopish(15, 4));





//------------------------------
//CONSTUCTOR FUNCTION

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getInfo = function (city) {
  console.log(this.name + " is " + this.age + " years old he lives in " + city);
};

Person.prototype.setName = function (name) {
  this.name = name;
  console.log(this);
};

let mike = new Person("Bob", 20);
mike.getInfo("Tashkent");
mike.setName("Nodir");
