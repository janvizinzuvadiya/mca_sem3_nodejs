import Studentmodel from "../database/schema.js";

async function addStudent(req,res){
    try{
        const obj = Studentmodel.create(req.body);
        res.status(200).json({message:"student added successfully",data:obj})
    
    }catch(err){
        console.log(err);
        res.status(500).json({message:"internal server error",data: err.message});
    }
}

async function getAllStudent(req,res){
    try{
        const obj = await Studentmodel.find();
        res.status(200).json({message:"get all student successfully",data:obj});
    
    }catch(err){
        console.log(err);
        res.status(500).json({message:"internal server error",data: err.message});
    }
}

async function getStudentById(req,res){
    try{
        const obj = await Studentmodel.findById(req.params.id);
        res.status(200).json({message:"get student by id successfully",data:obj});
    }catch(err){
        console.log(err);
        res.status(500).json({message:"internal server error",data: err.message});
    }
}

async function updateStudent(req,res){
    try{
        const obj = await Studentmodel.findByIdAndUpdate(req.params.id,req.body,{new : true});
        res.status(200).json({message:"student updated successfully",data:obj});
    
    }catch(err){
        console.log(err);
        res.status(500).json({message:"internal server error",data: err.message});
    }
}

async function deleteStudent(req,res){
    try{
        const obj = await Studentmodel.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"student deleted successfully",data:obj});
    }catch(err){
        console.log(err);
        res.status(500).json({message:"internal server error",data: err.message});
    }
}

const StudentController = {
    addStudent,
    getAllStudent,
    getStudentById,
    updateStudent,
    deleteStudent}

export default StudentController;