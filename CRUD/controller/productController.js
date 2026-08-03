import con from '../db.js';

function getAllProducts(req,res)
{
   con.query("select * from products", (err, result)=>
    {
        if(err)
            res.json({message:'Fail', data: err.message})
        else
            res.json({message:'success', data: result})
    });
}
function storeProducts(req,res)
{
    con.query('insert into products set ?',req.body,(err, results)=>{
        if(err)
            res.json({message:'Fail', data: err.message})
        
        else
            res.json({message:"success", data: results.insertId});
    });
}

export default {getAllProducts,storeProducts};