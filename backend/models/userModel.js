const db = require("../config/db");

// Create new user
exports.createUser = (name, email, password, role, callback) => {

    const sql = `
        INSERT INTO Users (name, email, password, role)
        VALUES (?, ?, ?, ?)
    `;

    db.query(sql, [name, email, password, role], callback);
};


// Find user by email
exports.findUserByEmail = (email, callback) => {

    const sql = `
        SELECT * FROM Users WHERE email = ?
    `;

    db.query(sql, [email], callback);
};