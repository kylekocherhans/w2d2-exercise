/*
Given a number, n, return an array containing n unique random numbers between 
1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

You can trust that this function will never be called with n < 0 or n > 10.

For example:

luckyNumbers(2)
returns (3, 7)
luckyNumbers(6)
returns (1, 7, 9, 6, 5, 2)
*/

function random(n) {
    let randomNums = [Math.floor(Math.random() * 10) + 1];
  
    for (let i = 1; i < n; i++) {
        while (true) {
            let num = Math.floor(Math.random() * 10) + 1;
            if (!randomNums.includes(num)) {
            randomNums.push(num);
            break;
            }
        }
    }
  
    return randomNums;
}
  
console.log(random(10));



// // Joely's solution
// function luckyNumbers(n) {
//     let possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     let luckyNumbers = [];
//     for (let i = 0; i < n; i++) {
//         let x = Math.floor(Math.random() * possibleNumbers.length);
//         luckyNumbers.push(possibleNumbers[x])
//         possibleNumbers.splice(x, 1)
//     }
//     return luckyNumbers
// }