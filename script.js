
// ES5 Map Callback
// function double(arr) {
//     return arr.map(function(val) {
//         return val * 2;
//     });
// }


// ES2015 Arrow Functions Shorthand
//      Refactor the above code to use two arrow functions. Turn it into a one-liner
const double = (arr) => arr.map((val) => val * 2);

// Refator the following function to use arrow functions:
//      Replace ALL functions with arrow functions:
// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//         return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//         return square % 2 === 0;
//     })
//     return evens;
// }

// My way of writing it which uses blocks instead of being written on one line
const squareAndFindEvens = (numbers) => {
    let squares = numbers.map((num) => num ** 2);
    let evens = squares.filter((square) => square % 2 === 0);
    return evens;
}
// Also another way of writing it
// const squareAndFindEvens = (numbers) => numbers.map((val) => val ** 2).filter((square) => square % 2 === 0);
let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log(`This is nums array: ${nums}`);
console.log(`This is the squareAndFindEvens function in action ${squareAndFindEvens(nums)}`);