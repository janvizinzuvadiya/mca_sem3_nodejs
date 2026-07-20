import express from "express";
import userSchema from "./validations/userSchema.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/users",(req,res)=>
{           
    res.send("Get All users Data");
});

app.post("/users", (req,res)=>{
    // const {name , email , age} = req.body;
    
    const { error , value } = userSchema.validate(req.body, {abortEarly : false});

    if(error)
    {
        return res.status(400).json({
            message: "Validation Error",
            error: error.details.map(detail => detail.message)
        });
    }

    res.json({
        message: "User Data Added",
        user:{
            "name": value.name, // req.body also work
            "email": value.email,
            "age": value.age
        }
    });

});

app.listen(port, () => {

    console.log(`Server is running on port no. : ${port}`);
});