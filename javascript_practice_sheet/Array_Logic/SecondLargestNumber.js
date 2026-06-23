let arr = [10, 40, 50, 20, 30, 95, 31, 99]

let largest = Math.max(...arr);
let secondLargest = Math.min(...arr);

for(let i = 0 ; i < arr.length ; i++)
{
    if(arr[i] > secondLargest && arr[i] !== largest)
    {
        secondLargest = arr[i];
    } 
}

console.log("Second largest is: ", secondLargest);