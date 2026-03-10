const db = require("../config/db");

exports.getRules = (req,res)=>{

    const productId = req.params.productId;

    db.query(
        "SELECT * FROM PricingRules WHERE product_id=?",
        [productId],
        (err,result)=>{
            if(err) return res.status(500).json(err);
            res.json(result);
        }
    );
};

exports.createRule = (req,res)=>{

    const {product_id,min_quantity,discount_percentage} = req.body;

    const sql = `
        INSERT INTO PricingRules
        (product_id,min_quantity,discount_percentage)
        VALUES (?,?,?)
    `;

    db.query(sql,[product_id,min_quantity,discount_percentage],(err,result)=>{

        if(err) return res.status(500).json(err);

        res.json({message:"Rule created"});
    });
};

exports.updateRule = (req,res)=>{

    const id = req.params.id;
    const {min_quantity,discount_percentage} = req.body;

    db.query(
        "UPDATE PricingRules SET min_quantity=?,discount_percentage=? WHERE id=?",
        [min_quantity,discount_percentage,id],
        (err,result)=>{
            if(err) return res.status(500).json(err);
            res.json({message:"Rule updated"});
        }
    );
};

exports.deleteRule = (req,res)=>{

    const id = req.params.id;

    db.query(
        "DELETE FROM PricingRules WHERE id=?",
        [id],
        (err,result)=>{
            if(err) return res.status(500).json(err);
            res.json({message:"Rule deleted"});
        }
    );
};