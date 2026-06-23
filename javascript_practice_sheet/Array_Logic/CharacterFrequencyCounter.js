let str = "programming";
let count = 0;

let words = [];

for (let s =0 ; s<str.length ; s++)
{
    if(words.includes(str[s])) continue;
    for(let match = 0; match < str.length ; match++)
    {
        if(str[s] == str[match])
        {
            count++;
            words.push(str[s]);
        }
    }
    console.log(str[s] ,":", count);
    count = 0;
}