function Palindrome(str)
{
    let srev = str.split("").reverse().join("");

    if(str === srev)
        console.log("The String is a Palindrome");
    else
        console.log("The String is not a Palindrome");
}

export default Palindrome;
