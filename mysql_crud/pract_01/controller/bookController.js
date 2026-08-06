import con from '../database/db.js'

function ListBooks(req,res)
{
    con.query('SELECT * FROM products',(err,result)=>
    {
        if(err)
            res.json({status:200,message:"error",data:err.message})
        
        res.json({status:200,message:"success",data:result})
    });
}
function AddBooks(req,res)
{
    con.query('INSERT INTO products SET ?', req.body, (err, result)=>
    {
        if(err)
            res.json({status:500,message:"error",data:err.message})
        res.json({status:200,message:"success",data:result})
    });
}
function UpdateBooks(req,res)
{
    con.query('UPDATE products SET ? WHERE id = ?',[req.body,req.params.id],(err,result)=>
    {
        if(err)
            res.json({status:500,message:"error",data:err.message})
        res.json({status:200,message:"success",data:result})
    });
}
function DeleteBooks(req,res)
{
    con.query('DELETE FROM products where id = ?',req.params.id, (err,result)=>
    {
        if(err)
            res.json({status:500,message:"error",data:err.message})
        res.json({status:200,message:"success",data:result})
    });
}

export default {ListBooks,AddBooks,UpdateBooks,DeleteBooks}