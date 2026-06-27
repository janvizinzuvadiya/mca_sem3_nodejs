// Using ES Module (ESM) - requires "type": "module" in package.json
import { reverseString as rev } from "./1.reverseString.js";
import Palindrome from "./2.palindromeChecker.js";
import countVowels from "./3.countVowels.js";
import findLargestNumber from "./4.findLargestNumber.js";
import Factorial from "./5.factorialCalculator.js";
import FizzBuzz from "./6.FizzBuzz.js";
import removeDuplicates from "./7.removeDuplicates.js";
import findMissingNumber from  "./8.findMissingNumber.js";
import characterFrequencyCounter from "./9.characterFrequencyCounter.js";
import findSecondLargest from "./10.secondLargestNumber.js";
import anagramChecker from "./11.anagramChecker.js";
import fibonacci from "./13.fibonacciSeries.js";
import {arrayChunking} from "./14.array_Chunking.js"
import {flattenArray} from "./15.flattenNestedArray.js"
import { findDuplicates } from "./17.findDuplivates.js";
import {countOccurrences} from "./18.CountOccurrencesArray.js"

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

console.log('\n------------------------------------');

let arr2 = [1, 1, 2, 3, 4, 4, 5, 3, 3, 5];
removeDuplicates(arr2)

console.log('\n------------------------------------');

findMissingNumber([1,2,4,5,7])

console.log('\n------------------------------------');

characterFrequencyCounter("programming");

console.log('\n------------------------------------');

findSecondLargest([10, 40, 50, 20, 30, 95, 31, 99])

console.log('\n------------------------------------');

anagramChecker("take", "kate")

console.log('\n------------------------------------');

fibonacci(10);

console.log('\n------------------------------------');

arrayChunking([1,2,3,4,5,6,7], 3)

console.log('\n------------------------------------');

flattenArray([1, 2, [3, 4, [5, 6], 7], 8]);

console.log('\n------------------------------------');

findDuplicates([1, 2, 3, 2, 4, 5, 3, 6, 4, 7, 5])

console.log('\n------------------------------------');

countOccurrences([1, 2, 1, 2, 3, 4, 5, 3, 2, 6, 4, 5, 3, 2, 1])
















/*
// Using require and module.exports

const reverseString = require("./1.reverseString");
const Palindrome = require("./2.palindromeChecker");

console.log("JavaScript Practice Sheet");

reverseString("Hello");
Palindrome("madam");
*/
