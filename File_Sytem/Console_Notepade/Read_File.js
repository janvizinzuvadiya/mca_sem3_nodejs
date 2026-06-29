import fs from 'node:fs';

export default function readFile(File_path)
  {
    fs.readFile(File_path,"utf-8",(err,data)=>
    {
        if(err)
          console.log("Error in reading file:\n\n",err)
        else
          console.log("File read successfully:\n",data);
    });
}