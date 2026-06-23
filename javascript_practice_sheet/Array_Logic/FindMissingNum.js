let arr = [1,2,3,5,7,8,10];
let num = [];
let j=0;

for(let i = 0 ; i < arr.length-1 ; i++)
{
    if(arr[i+1] != arr[i]+1 )
    {
        num[j] = arr[i]+1;
        j++;
    }
}
console.log(num);