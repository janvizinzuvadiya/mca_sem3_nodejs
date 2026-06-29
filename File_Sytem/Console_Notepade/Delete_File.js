import fs from 'node:fs';

export default function deleteFile(File_path)
{
    fs.unlink(File_path,(err)=>
    {
        if(err)
            console.log("Failed to Delete File: ", err)
 
    });
}