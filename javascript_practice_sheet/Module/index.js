// Using ES Module (ESM) - requires "type": "module" in package.json
import { reverseString as rev } from "./1.reverseString.js";
import Palindrome from "./2.palindromeChecker.js";
import countVowels from "./3.countVowels.js";
import findLargestNumber from "./4.findLargestNumber.js";
import Factorial from "./5.factorialCalculator.js";
import FizzBuzz from "./6.FizzBuzz.js";

console.log("JavaScript Practice Sheet");

console.log('------------------------------------');
rev("Hello");
console.log('\n------------------------------------');

Palindrome("madam");

console.log('\n------------------------------------');

countVowels("Program");

console.log('\n------------------------------------');

let arr = [23, 65, 87, 34, 98];
findLargestNumber(arr);

console.log('\n------------------------------------');

let num = 4;
Factorial(num);

console.log('\n------------------------------------');

FizzBuzz();









/*
// Using require and module.exports

const reverseString = require("./1.reverseString");
const Palindrome = require("./2.palindromeChecker");

console.log("JavaScript Practice Sheet");

reverseString("Hello");
Palindrome("madam");
*/
