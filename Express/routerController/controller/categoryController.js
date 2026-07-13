function getCategoryList(req,res)
{
    const data = [
        "Books", 
        "Electronics", 
        "Groceries",
        "Clothes",
        "Home",
        "Kitchen"
    ];

    res.json({message:"Category list",data: data});
}

function storeCategory(req,res)
{
    res.json({message:"Category created successfully"});
}

export default {getCategoryList, storeCategory};