function countDown(number) {
    // display the number
    console.log(number);

    // decrease the number value
    const newNumber = number - 1;

    // base case
    if (newNumber > 0) {
        countDown(newNumber);
    }
}
countDown(10);


// function recurse() {
//     if(condition) {
//         recurse();
//     }
//     else {
//         // stop calling recurse()
//     }
// }

recurse();







function recurse() {
    // function code
    recurse();
    // function code
}

recurse();



10
9
8
7
6
5
4 
3 
2 
1





