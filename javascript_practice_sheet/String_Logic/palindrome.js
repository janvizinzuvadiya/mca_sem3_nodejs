let str = "hello";
let srev = str.split("").reverse().join("");

// console.log(str.split(""));
// console.log(str.split("").reverse());
// console.log(str.split("").reverse().join(""));

// .split('') turn that string into an array of characters
// .reverse() is reserved for Arrays
// .join('') join that array into a string

if(str === srev)
    console.log("Palindrome");
else
    console.log("Not a Palindrome");