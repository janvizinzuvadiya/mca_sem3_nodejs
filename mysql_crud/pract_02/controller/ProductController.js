import con from '../database/db.js'

function getAllProducts(req, res)
{
    con.query("SELECT * FROM products",(err,result)=>
    {
        if(err)
            res.json({status:500,message:"error",data:err.message});
        res.json({status:200,message:"success",data:result});
    });
}

function insertProduct(req,res)
{
    con.query("INSERT INTO products SET ? ",(req.body),(err,result)=>
    {
        if(err)
            res.json({status:500,message:"error",data:err.message});
        res.json({status:200,message:"success",data:result.insertId});
    });
}

function updateProduct(req,res)
{
    con.query("UPDATE products SET ? WHERE id = ? ",[req.body,req.params.id],(err,result)=>
    {
        if(err)
            res.json({status:500,message:"error",data:err.message});
        res.json({status:200,message:"success",data:result.affectedRows});
    });
}

function deleteProduct(req,res)
{
    con.query("DELETE FROM products WHERE id = ? ",(req.params.id),(err,result)=>
    {
        if(err)
            res.json({status:500,message:"error",data:err.message});
        res.json({status:200,message:"success",data:result.affectedRows});
    });
}

function getProductById(req,res)
{
    con.query("SELECT * FROM products WHERE id = ? ",(req.params.id),(err,result)=>
    {
        if(err)
            res.json({status:500,message:"error",data:err.message});
        res.json({status:200,message:"success",data:result});
    });
}

export default {getAllProducts,insertProduct,updateProduct,deleteProduct,getProductById};