// 1. Use a ternary operator to classify a number as "Positive", "Negative", or "Zero".
let number = 5; 
let classify = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
console.log(`The number ${number} is classified as : ${classify} \n`);

function classifyNumber(num) {
  result = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
  console.log(`The number ${num} is classified as: ${result}`);
  return result;

}
classifyNumber(0); // "Zero"
classifyNumber(-3); // "Negative"
classifyNumber(10); // "Positive"


// 2. Use a for...of loop to print the first 10 even numbers (2, 4, ..., 20) from an array.
let evenNumArray = [];
for (let i = 1; i <= 10; i++) {
  evenNumArray.push(i * 2);
}

console.log("First 10 even numbers:");
for (let num of evenNumArray) {
  console.log(num);
}

console.log("\nUsing a function to create and print even numbers:");

function createEvenNumArray(n) {
  let evenNumArray = [];
  for (let i = 1; i <= n; i++) {
    evenNumArray.push(i * 2);
  }
  return evenNumArray;
}
function printEvenNum(n) {
  let evenNumArray = createEvenNumArray(n);
  for(let evenNum of evenNumArray) {
    console.log(evenNum);
  }
}
printEvenNum(10);

// 3. Bonus: Create an object with 3 properties (e.g., product details) and use for...in to log each property and value.

let productObject = {
  name: "Akamai ION",
  price: 150000,
  category: "Web Performance",
  traffic: "300 TB",
  description: "Akamai ION is a web performance solution that optimizes the delivery of websites and applications.",
  support: "24/7 support",
  security: "Advanced security features"
};
console.log("\nProduct Details:");
for (let key in productObject) {
  console.log(` Akamai Product object has key: ${key} and has value: ${productObject[key]}`);
}

// 4. Use a switch statement to determine the day of the week based on a number (1-7).
let dayNumber = 3;
let dayName;
switch (dayNumber) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day number";
}
console.log(`\n The day number ${dayNumber} id: ${dayName}`);


// 5. To submit your homework, from the menu bar select Project > Share, then select "Get Short URL". Copy this link and
