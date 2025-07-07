// Session 1 : Homework Assignment
console.log(`https://repl.nighthauk.com/?x=id/8MVBZJVQM \n`)

// 1. Write a program to declare variables of different data types.
console.log(`Hi Ryan/Josh, Thanks for the awesome session. \n Arjun Sharma is submitting the Homework Assignment 1 \n`);

var variableString1 = 'Hello, World! from "Arjun"'; // String Data Type Example1
console.log("variableString1  is of DataType: " + '"' + typeof variableString1 + '"' + " and variableString1 has value: " + '"' + variableString1 + '"');

var variableString2 = "This is a string Example from 'Arjun'"; // String Data Type Example2
console.log(`variableString2  is of DataType: "${typeof variableString1}" and variableString2 has value: "${variableString2}"`);

const variableNumber = 100; // Number Data Type
console.log(`variableNumber is of DataType: "${typeof variableNumber}" and variableNumber has value: "${variableNumber}"`);

var variableBoolean = false; // Boolean Data Type
console.log(`variableBoolean is of DataType: "${typeof variableBoolean}" and variableBoolean has value: "${variableBoolean}"`);

let variableArray = [10, 20, 30]; // Array 
console.log("variableArray is of DataType: " + '"' + typeof variableArray + '"' + " and variableArray has value: " + '"' + variableArray + '"');

var variableObject = { key: "value" }; // Object Data Type
console.log("variableObject is of DataType: " + '"' + typeof variableObject + '"' + " and variableObject has value: " + '"' + JSON.stringify(variableObject) + '"');

let variableNull = null; // Null Data Type
console.log("variableNull is of Data Type: " + '"' + typeof variableNull + '"' + " and variableNull has value: " + '"' + variableNull + '"');

var variableUndefined; // Undefined Data Type
console.log(`variableUndefined is of DataType: "${typeof variableUndefined}" and variableUndefined has value: "${variableUndefined}"`);


console.log(`\n`);

// 2. Perform basic arithmetic functions (e.g., calculate the total and average of three numbers).

//declaring variables for numbers and using let, var, and const 
var num1 = 101;
var num2 = 102;
var num3 = 103;
let num4 = 104;
let num5 = 105;
let num6 = 106;
const num7 = 107;
const num8 = 108;
const num9 = 109;

let total = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9; // Calculate total

let average = total / 9; // Calculating the average of above numbers 

console.log(`The total of the numbers is: ${total}`);
console.log(`The average of the numbers is: ${average}`);  


// 3. Log results to the console and experiment with different outputs.

console.log(`\n`);
console.warn("This is how the JS console.warn works");
console.error('This is how the JS console.error works');
console.info('This is how the JS console.info works');
console.log(`This is how the JS console.log works`);
console.log(`\n`);

// Experimenting with different outputs
console.log(`Experimenting with different outputs:`);
console.log(`Addition: ${num1}, ${num2}, ${num3}, ${num4}, ${num5} is: ${num1 + num2 + num3 + num4 + num5}`);
console.log(`Average: (${num1} + ${num2} + ${num3} + ${num4} + ${num5}) / 5 is: ${(num1 + num2 + num3 + num4 + num5) / 5}`);
console.log(`Subtraction: ${num6} - ${num4} is: ${num6 - num4}`);
console.log(`Multiplication: ${num5} * ${num6} is: ${num5 * num6}`);
console.log(`Division: ${num9} / ${num8} is: ${(num9 / num8)}`); // Using toFixed to limit decimal
console.log(`Modulus: ${num8} % ${num5} is: ${num8 % num5}`); // Modulus operation  
console.log(`\n`);

console.log(`is ${num1} == ${num2} -> ${num1 == num2}`);
console.log(`is ${num1} != ${num2} -> ${num1 != num2}`);
console.log(`is ${num1} > ${num2} -> ${num1 > num2}`);
console.log(`is ${num1} < ${num2} -> ${num1 < num2}`);
console.log(`is ${num1} >= ${num2} -> ${num1 >= num2}`);
console.log(`is ${num1} <= ${num2} -> ${num1 <= num2}`);

var expression1 = num6 == num7; // Comparison expressions
var expression2 = num8 < num9; // Logical expressions
console.log(expression1 || expression2); // Logical OR operation
console.log(expression1 && expression2); // Logical AND operation
console.log(`\n`);


// 4. To submit your homework, from the menu bar select Project > Share, then select "Get Short URL". Copy this link and
//    submit at 
console.log(`Homework Assignment 1 completed by Arjun Sharma and submitted on google form link https://forms.gle/5WxTBF1N5rHmf8zz7. \n Thank you for the awesome session!`);
