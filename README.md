# UMass Global 14.2 Exercise Arrow Functions
## ES5 Map Callback
```js
function double(arr) {
    return arr.map(function(val) {
        return val * 2;
    });
}
```
### ES2015 Arrow Functions Shorthand
Replace ALL functions with arrow functions:

This was my implementation
```js
/* Write an ES2015 Version */

const double = (arr) => arr.map((val) => val * 2);
```
## Refactor the following function to use arrow functions:
### Replace ALL functions with arrow functions:
```js
function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}
```

This was my implementation
```js
// My way of writing it which uses blocks instead of being written on one line
const squareAndFindEvens = (numbers) => {
    let squares = numbers.map((num) => num ** 2);
    let evens = squares.filter((square) => square % 2 === 0);
    return evens;
}

```
I ran this program using the test case *nums*

```js
let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log(`This is nums array: ${nums}`);
console.log(`This is the squareAndFindEvens function in action ${squareAndFindEvens(nums)}`);

// output: [ 4, 16, 36, 64, 100, 144, 196, 256, 324, 400 ]
```
