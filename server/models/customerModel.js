const db = require("../config/db");

// Get all customers
const getAllCustomers = (callback) => {
    db.query("SELECT * FROM customers", callback);
};

// Get customer by ID
const getCustomerById = (id, callback) => {
    db.query("SELECT * FROM customers WHERE id = ?", [id], callback);
};

// Create new customer
const createCustomer = (customer, callback) => {
    const sql = `
        INSERT INTO customers
        (
            customer_code,
            full_name,
            father_name,
            mobile,
            alternate_mobile,
            email,
            gender,
            dob,
            occupation,
            monthly_income,
            address,
            city,
            state,
            pincode,
            status
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [
        customer.customer_code,
        customer.full_name,
        customer.father_name,
        customer.mobile,
        customer.alternate_mobile,
        customer.email,
        customer.gender,
        customer.dob,
        customer.occupation,
        customer.monthly_income,
        customer.address,
        customer.city,
        customer.state,
        customer.pincode,
        customer.status
    ], callback);
};

// Update customer
const updateCustomer = (id, customer, callback) => {
    const sql = `
        UPDATE customers SET
        customer_code=?,
        full_name=?,
        father_name=?,
        mobile=?,
        alternate_mobile=?,
        email=?,
        gender=?,
        dob=?,
        occupation=?,
        monthly_income=?,
        address=?,
        city=?,
        state=?,
        pincode=?,
        status=?
        WHERE id=?
    `;

    db.query(sql, [
        customer.customer_code,
        customer.full_name,
        customer.father_name,
        customer.mobile,
        customer.alternate_mobile,
        customer.email,
        customer.gender,
        customer.dob,
        customer.occupation,
        customer.monthly_income,
        customer.address,
        customer.city,
        customer.state,
        customer.pincode,
        customer.status,
        id
    ], callback);
};

// Delete customer
const deleteCustomer = (id, callback) => {
    db.query("DELETE FROM customers WHERE id = ?", [id], callback);
};

module.exports = {
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
};