export default function Factorial(num)
{
    let fact = 1;

    for (let i = num; i > 0; i--)
    {
        fact *= i;
    }

    console.log("The factorial of " + num + " is " + fact);
}