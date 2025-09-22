// Session 3 : Homework Assignment
// 1. Write a function that takes two numbers and returns their product.

function multiplyNumbers(a, b) {
    console.log(`a is of DataType: "${typeof a}" and has value: "${a}"`);
    console.log(`b is of DataType: "${typeof b}" and has value: "${b}"`);
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Invalid input: Both arguments must be numbers.');
    }
    return a * b;
}
console.log("The product of 3 and 7 is: " + multiplyNumbers(3, 7));
//console.log("The product of 5 and 'test' is: " + multiplyNumbers(5, 'test'));

// 2. Create an arrow function to check if a string is longer than 5 characters.

const isStringLongerThan5 = (str) => str.length > 5;
console.log(`Is "Hello" longer than 5 characters? : ${isStringLongerThan5("Hello")}`); // false
console.log(`Is "Hello, World!" longer than 5 characters? : ${isStringLongerThan5("Hello, World!")}`); // true


// 3. Use try ... catch to handle an invalid input scneario (e.g., non-numeric input).

try {
    console.log("The product of 5 and 'test' is: " + multiplyNumbers(5, 'test'));
} catch (error) {
    console.error("Error occurred: " + error.message);
}   


// 4. To submit your homework, from the menu bar select Project > Share, then select "Get Short URL". Copy this link and