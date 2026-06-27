let arr = [1,2,3,4,5,6,7,8,9,10];
let size = 3;
let counter = Math.ceil(arr.length/size);
let left = arr.length % counter;

// console.log(counter);
// console.log(left);

let chuckedarr = [];
let a = [];
let j = 0;  
for (let i = 0; i < arr.length; i++)
{ 
    a.push(arr[i]);
    j++;
    
    if(j == size)
    {
        j = 0;  
        chuckedarr.push(a);
        
        console.log("a:",a);
        console.log("j:",j);
        a = [];

    }

    if(i >= counter && j == (left-1))
    {
        chuckedarr.push(a);
        console.log("a",a);
    }
}

console.log(chuckedarr);