import studmodel from "../database/schema.js";

async function getstudent(req,res)
{
    const obj = await studmodel.findById(req.params.id);
    res.json(obj);
}
async function getallstudent(req,res)
{
    const obj = await studmodel.find();
    res.json(obj);
}
async function updatestudent(req,res)
{
    const obj = await studmodel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(obj);
}
async function deletestudent(req,res)
{
    const obj = await studmodel.findByIdAndDelete(req.params.id);
    res.json(obj);
}
async function addstudent(req,res)
{
    const obj = await studmodel.create(req.body);
    res.json(obj);
}


export default {getallstudent,getstudent,updatestudent,deletestudent,addstudent};