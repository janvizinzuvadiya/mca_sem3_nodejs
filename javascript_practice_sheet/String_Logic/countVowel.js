str = "containing vowels";
let count = 0;
for (let i = 0; i < str.length; i++)
{
    if (str[i].includes("a") || str[i].includes("e") || str[i].includes("i") || str[i].includes("o") || str[i].includes("u") || str[i].includes("A") || str[i].includes("E") || str[i].includes("I") || str[i].includes("O") || str[i].includes("U"))
        count++;
}

// includes() is a string method that checks if a string contains the specified substring.
console.log((count > 0) ? "The string \"" + str + "\" contains " + count + " vowels.": "The string \"" + str + "\" does not contain any vowels.");
    
// split() of the sting method is used to split a string into an array of substrings based on a specified separator. In this case, it is used to split the string into individual characters, which are then checked for vowels.
console.log("The string \"" + str + "\" contains " + str.split("").filter(char => "aeiouAEIOU".includes(char)).length + " vowels.");

// The filter() method creates a new array with all elements that pass the test implemented by the provided function. In this case, it filters out the characters that are vowels and counts them.
console.log("The string \"" + str + "\" contains " + Array.from(str).filter(char => "aeiouAEIOU".includes(char)).length + " vowels.");

// The Array.from() method creates a new array instance from an array-like or iterable object. In this case, it converts the string into an array of characters, which are then filtered to count the vowels.
console.log("The string \"" + str + "\" contains " + Array.from(str).filter(char => "aeiouAEIOU".includes(char)).length + " vowels.");

// the reduce() method executes a reducer function on each element of the array, resulting in a single output value. In this case, it counts the number of vowels in the string.
console.log("The string \"" + str + "\" contains " + Array.from(str).reduce((acc, char) => acc + ("aeiouAEIOU".includes(char) ? 1 : 0), 0) + " vowels.");

// substring() method returns the part of the string between the start and end indexes, or to the end of the string. In this case, it is used to extract each character from the string and check if it is a vowel.
console.log("The string \"" + str + "\" contains " + Array.from(str).reduce((acc, char) => acc + ("aeiouAEIOU".includes(char.substring(0, 1)) ? 1 : 0), 0) + " vowels.");

// The match() method retrieves the result of matching a string against a regular expression. In this case, it is used to find all vowels in the string and count them.
console.log("The string \"" + str + "\" contains " + (str.match(/[aeiouAEIOU]/g) || []).length + " vowels.");