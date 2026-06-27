const db = require("../config/db");

const getAllAdmins = (callback) => {
    const query = "SELECT * FROM admins";

    db.query(query, callback);
};

const createAdmin = (
    full_name,
    email,
    password,
    phone,
    role,
    callback
) => {

    const query = `
        INSERT INTO admins
        (full_name,email,password,phone,role)
        VALUES (?,?,?,?,?)
    `;

    db.query(
        query,
        [full_name, email, password, phone, role],
        callback
    );
};

const getAdminByEmail = (email, callback) => {
    const query = "SELECT * FROM admins WHERE email = ?";

    db.query(query, [email], callback);
};

module.exports = {
    getAllAdmins,
    createAdmin,
    getAdminByEmail
};