const db = require("../config/db");

exports.getProducts = (req,res)=>{

    db.query("SELECT * FROM Products",(err,result)=>{

        if(err) return res.status(500).json(err);

        res.json(result);
    });
};

exports.createProduct = (req,res)=>{

    const {name,base_price} = req.body;

    const sql = "INSERT INTO Products (name,base_price) VALUES (?,?)";

    db.query(sql,[name,base_price],(err,result)=>{

        if(err) return res.status(500).json(err);

        res.json({message:"Product created"});
    });
};

exports.updateProduct = (req,res)=>{

    const id = req.params.id;
    const {name,base_price} = req.body;

    const sql = "UPDATE Products SET name=?,base_price=? WHERE id=?";

    db.query(sql,[name,base_price,id],(err,result)=>{

        if(err) return res.status(500).json(err);

        res.json({message:"Product updated"});
    });
};

exports.deleteProduct = (req,res)=>{

    const id = req.params.id;

    db.query("DELETE FROM Products WHERE id=?",[id],(err,result)=>{

        if(err) return res.status(500).json(err);

        res.json({message:"Product deleted"});
    });
};