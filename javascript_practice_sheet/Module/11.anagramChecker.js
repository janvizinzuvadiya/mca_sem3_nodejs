export default function anagramChecker(str1, str2)
{

    let flag = true;

    if(str1.length !== str2.length)
    {
        console.log("Strings are not anagrams");
    }
    else if(str1 === str2)
    {
        console.log("Strings are anagrams");
    }
    else
    {
        for(let i = 0; i < str1.length; i++)
        {
            if(!str2.includes(str1[i]))
            {
                flag = false;
                break;
            }
        }

        if(flag)
        {
            console.log("Strings are anagrams");
        }
        else
        {
            console.log("Strings are not anagrams");
        }
    }

}