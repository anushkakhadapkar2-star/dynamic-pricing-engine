const db = require("../config/db");


// Get rules for a product
exports.getRulesByProduct = (productId, callback) => {

    const sql = `
        SELECT * FROM PricingRules
        WHERE product_id = ?
    `;

    db.query(sql, [productId], callback);
};


// Create pricing rule
exports.createRule = (product_id, min_quantity, discount_percentage, callback) => {

    const sql = `
        INSERT INTO PricingRules (product_id, min_quantity, discount_percentage)
        VALUES (?, ?, ?)
    `;

    db.query(sql, [product_id, min_quantity, discount_percentage], callback);
};


// Update rule
exports.updateRule = (id, min_quantity, discount_percentage, callback) => {

    const sql = `
        UPDATE PricingRules
        SET min_quantity = ?, discount_percentage = ?
        WHERE id = ?
    `;

    db.query(sql, [min_quantity, discount_percentage, id], callback);
};


// Delete rule
exports.deleteRule = (id, callback) => {

    const sql = `
        DELETE FROM PricingRules
        WHERE id = ?
    `;

    db.query(sql, [id], callback);
};