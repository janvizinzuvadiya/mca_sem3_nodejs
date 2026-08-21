import mongoose from "./db.js";

const stud = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true
    }
});

const studmodel = mongoose.model("Student2",stud);

export default studmodel;