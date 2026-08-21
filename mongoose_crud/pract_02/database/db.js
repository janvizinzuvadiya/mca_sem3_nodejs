import mongoose from "mongoose";
import { connected } from "node:dns";

const mongo_url = "mongodb+srv://zinzuvadiyajanvi4_db_user:LvzuH9MpcMxbqQj0@cluster0.s3l6uab.mongodb.net/node_db"

if(!mongo_url)
{
    console.log("PLease Provide Mongoose URL")
}

mongoose.connect(mongo_url).then(()=>{
    console.log("Database Connected");
}).catch((error)=>{
    console.log("Error in mongo connection",error)
})

export default mongoose;