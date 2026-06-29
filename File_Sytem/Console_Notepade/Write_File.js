import fs from 'node:fs';

export default function writeFile(File_path,data)
{
    fs.writeFile(File_path, data,(err)=>{
        if(err)
          console.log("Error in writing file:\n\n",err)
    });
}