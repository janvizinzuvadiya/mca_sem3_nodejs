import mongoose from 'mongoose';

const mongo_url = "mongodb+srv://zinzuvadiyajanvi4_db_user:LvzuH9MpcMxbqQj0@cluster0.s3l6uab.mongodb.net/"


if(!mongo_url)
{
    console.log("Please connect!!");
    process.exit(1);
}

mongoose.connect(mongo_url).then(()=>{
    console.log("Database Connection successfully!!")
}).catch((err)=>{
    console.log("Database Connection failed!!")
    process.exit(1);
});

export default mongoose;