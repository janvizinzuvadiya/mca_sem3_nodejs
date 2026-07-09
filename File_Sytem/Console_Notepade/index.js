import readline from 'node:readline'
import {stdin as input , stdout as output} from 'node:process'

import readFile from './Read_File.js';
import writeFile from './Write_File.js';
import appendFile from './Append_File.js';
import deleteFile from './Delete_File.js';

const rl = readline.createInterface
    ({
        input : process.stdin,
        output : process.stdout
    });

function Main()
{
    let choice = null;
    
    console.log("\n\nWhat do you want to do?");
    console.log("1 -> Want to Create file");
    console.log("2 -> Want to Append Data");
    console.log("3 -> Want to Read Data");
    console.log("4 -> Want to Delete File");
    console.log("0 -> Exit")

    rl.question("Enter your choice from the above ->",(choice)=>{
        choice = parseInt(choice);
        switch(choice)
        {
            case 1:
                {
                    rl.question("Enter File Name -> ",(file_path)=>{
                        rl.question("Enter Data you want to add in the file : ",(data)=>{
                            writeFile(file_path,data);
                            console.log("File written successfully !");

                            Main();
                        });
                    });
                    break;
                }
 
            case 2:
                {
                    rl.question("Enter File Name -> ",(file_path)=>
                    {
                        rl.question("Enter Data you want to append in the file : ",(data)=>
                        {
                            appendFile(file_path,data);
                            console.log("File appened successfully!");

                            Main();
                        });
                    }); 
                    break;
                }
                
            case 3:
                {
                    rl.question("Enter File Name -> ",(file_path)=>{
                        readFile(file_path);
                        console.log("File read successfully!");

                        Main();
                    });
                    break;
                }

            case 4:
                {
                    rl.question("Enter File Name -> ",(file_path)=>
                    {
                        deleteFile(file_path);
                        console.log("File Deleted SuccessFully!");
                        Main();
                    });
                    break;
                }

            case 0:
                console.log("Exiting Program...!")
                rl.close();
                process.exit(0);    
            default:
                console.log("Invalid choice!")
                Main();
                break;
        }
    });
}

Main()


