import StudentModel from "../database/StudentSchema";

async function addStudent(req,res){

    try{
        var obj = await StudentModel.create(req.body);
        res.status(200).json({message: "success" ,data: obj });
    }
    catch(err){
        console.log(`Error ${err.message}`);
        res.status(500).json({message: "fail" ,data: err.message });
    }
}

async function getStudent(req,res){
  
    try{
        var obj = await StudentModel.findById(req.params.id);
        res.status(200).json({message: "success" ,data: obj });
    }
    catch(err){
        console.log(`Error ${err.message}`);
        res.status(500).json({message: "fail" ,data: err.message });
    }

}

async function getAllStudent(req,res){

    try{
        var obj = await StudentModel.find();
        res.status(200).json({message: "success" ,data: obj });
    }
    catch(err){
        console.log(`Error ${err.message}`);
        res.status(500).json({message: "fail" ,data: err.message });
    }
}

async function updateStudent(req,res){

    try{
        var obj = await StudentModel.findByIdAndUpdate(req.params.id,req.body, {new : true});
        res.status(200).json({message: "success" ,data: obj });
    }
    catch(err){
        console.log(`Error ${err.message}`);
        res.status(500).json({message: "fail" ,data: err.message });
    }
}

async function deleteStudent(req,res){

   try{
        var obj = await StudentModel.findByIdAndDelete(req.params.id,req.body, {new : true});
        res.status(200).json({message: "success" ,data: obj });
    }
    catch(err){
        console.log(`Error ${err.message}`);
        res.status(500).json({message: "fail" ,data: err.message });
    }
}

export default {addStudent,getStudent,getAllStudent,updateStudent,deleteStudent}