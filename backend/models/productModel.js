const db = require("../config/db");


// Get all products
exports.getAllProducts = (callback) => {

    const sql = `
        SELECT * FROM Products
    `;

    db.query(sql, callback);
};


// Create product
exports.createProduct = (name, base_price, callback) => {

    const sql = `
        INSERT INTO Products (name, base_price)
        VALUES (?, ?)
    `;

    db.query(sql, [name, base_price], callback);
};


// Update product
exports.updateProduct = (id, name, base_price, callback) => {

    const sql = `
        UPDATE Products
        SET name = ?, base_price = ?
        WHERE id = ?
    `;

    db.query(sql, [name, base_price, id], callback);
};


// Delete product
exports.deleteProduct = (id, callback) => {

    const sql = `
        DELETE FROM Products
        WHERE id = ?
    `;

    db.query(sql, [id], callback);
};