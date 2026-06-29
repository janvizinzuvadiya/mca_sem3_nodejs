import fs from 'node:fs';

export default function appendFile(File_path,data)
{
    fs.appendFile(File_path,`\n${data}`,(err)=>{
        if(err)
            console.log("Error in appending file:\n\n",err)            
    });

}