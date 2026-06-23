export function reverseString(str)
{
    let srev = "";
    for (let i = str.length - 1; i >= 0; i--)
    {
        srev += str[i];
    }
    console.log("The OriginalString is:");
    console.log(str);
    console.log("The Reversed String is:");
    console.log(srev);
}

// module.exports = reverseString;