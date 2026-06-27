export default function findMissingNumber(arr)
{
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
}