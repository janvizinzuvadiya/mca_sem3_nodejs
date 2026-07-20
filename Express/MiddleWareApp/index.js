import express from "express";
import {auth} from "./middleware/auth.js";

const app = express();
const PORT = 3000;

function logger(req,res,next){
    console.log(`${req.method} ${req.url}`);
    next();
}
app.use(logger)

app.post('/user/store', auth, (req,res)=>{
    res.json({
        "message": "this user api",
        "data" :{
            "id": 1,
            "name": "John Doe",
            "email": "john@gmail.com"
        }
    });
});

app.get('/user',(req,res)=>{
    res.json({
        "message": "this user api",
        "data" :{
            "id": 1,
            "name": "John Doe",
            "email": "john@gmail.com"
        }
    })    
});

app.listen(PORT,()=>
{
    console.log(`server is running on http://localhost:${PORT}`);
});
