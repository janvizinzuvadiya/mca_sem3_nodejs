str = "containing vowels";
let count = 0;
for (let i = 0; i < str.length; i++)
{
    if (str[i].includes("a") || str[i].includes("e") || str[i].includes("i") || str[i].includes("o") || str[i].includes("u") || str[i].includes("A") || str[i].includes("E") || str[i].includes("I") || str[i].includes("O") || str[i].includes("U"))
        count++;
}

// includes() is a string method that checks if a string contains the specified substring.
console.log((count > 0) ? "The string \"" + str + "\" contains " + count + " vowels.": "The string \"" + str + "\" does not contain any vowels.");
