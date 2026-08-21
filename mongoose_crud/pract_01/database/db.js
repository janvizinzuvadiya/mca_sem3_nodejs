import mongoose from "mongoose";
const mongo_url = "mongodb+srv://zinzuvadiyajanvi4_db_user:LvzuH9MpcMxbqQj0@cluster0.s3l6uab.mongodb.net/node_db";

if(!mongo_url){
    console.log("provide mongoose url");
    process.exit(1);
}

mongoose.connect(mongo_url).then(()=>{
    console.log("Database connected successfully");
}).catch((err)=>{
    console.log(err);
    process.exit(1)
})

export default mongoose;
