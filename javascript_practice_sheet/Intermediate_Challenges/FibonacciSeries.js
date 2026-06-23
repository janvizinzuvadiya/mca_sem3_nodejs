let n = 10;
let x = 0;
let y =1;

console.log(x);
console.log(y);
let z = 0;

for (let i = 3 ; i <= n ; i++)
{
    z = x+y;
    console.log(z);
    x = y;
    y = z;
}