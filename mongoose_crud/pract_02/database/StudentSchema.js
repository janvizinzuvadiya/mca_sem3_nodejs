import mongoose from "./db.js";

const stud = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    }
});

const StudentModel = mongoose.model("StudentTable", stud);

export default StudentModel;