const db = require("../config/db");

exports.calculatePrice = (req,res)=>{

    const {product_id,quantity} = req.body;

    const productQuery = "SELECT * FROM Products WHERE id=?";

    db.query(productQuery,[product_id],(err,productResult)=>{

        if(err) return res.status(500).json(err);

        const product = productResult[0];

        const ruleQuery = "SELECT * FROM PricingRules WHERE product_id=?";

        db.query(ruleQuery,[product_id],(err,rules)=>{

            if(err) return res.status(500).json(err);

            let applicableRules = rules.filter(
                rule => quantity >= rule.min_quantity
            );

            let bestRule = null;

            if(applicableRules.length > 0){

                bestRule = applicableRules.reduce(
                    (max,rule)=>
                        rule.discount_percentage > max.discount_percentage
                        ? rule : max
                );
            }

            let basePrice = product.base_price * quantity;

            let discount = bestRule
                ? basePrice * bestRule.discount_percentage / 100
                : 0;

            let finalPrice = basePrice - discount;

            res.json({
                product: product.name,
                quantity,
                basePrice,
                discountPercentage: bestRule ? bestRule.discount_percentage : 0,
                discount,
                finalPrice
            });
        });
    });
};