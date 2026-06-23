let arr = [23, 65, 87, 34, 98];
let max = arr[0];

for (let i = 1; i < arr.length; i++)
{
    if (arr[i] > max)
        max = arr[i];
}
console.log(max);