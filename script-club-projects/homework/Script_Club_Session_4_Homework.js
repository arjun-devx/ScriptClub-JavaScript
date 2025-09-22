// Session 4 : Homework Assignment
// 1. Create an array of 5 numbers and write a function to calculate their sum using reduce.
let numbersArray = [1, 2, 3, 4, 5];

function sumOfArray(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
console.log(`The sum of the array [${numbersArray}] is: ${sumOfArray(numbersArray)}`);
console.log(`\n`);


// 2. Use map to create a new array with each number squared.

let squaredArray = numbersArray.map(num => num * num);
console.log(`The squared array is: [${squaredArray}]`);
console.log(`\n`);


// 3. Filter the array to include only numbers greater than 10.

let filteredArray = squaredArray.filter(num => num > 10);
console.log(`The filtered array (numbers greater than 10) is: [${filteredArray}]`);
console.log(`\n`);



// 4. To submit your homework, from the menu bar select Project > Share, then select "Get Short URL". Copy this link and