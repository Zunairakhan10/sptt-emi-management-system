const Customer = require("../models/customerModel");

// Get all customers
exports.getAllCustomers = (req, res) => {
    Customer.getAllCustomers((err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Error fetching customers",
                error: err
            });
        }

        res.status(200).json({
            success: true,
            data: results
        });
    });
};

// Get customer by ID
exports.getCustomerById = (req, res) => {
    const id = req.params.id;

    Customer.getCustomerById(id, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Error fetching customer",
                error: err
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Customer not found"
            });
        }

        res.status(200).json({
            success: true,
            data: results[0]
        });
    });
};

// Create customer
exports.createCustomer = (req, res) => {
    Customer.createCustomer(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Error creating customer",
                error: err
            });
        }

        res.status(201).json({
            success: true,
            message: "Customer created successfully",
            customerId: result.insertId
        });
    });
};

// Update customer
exports.updateCustomer = (req, res) => {
    const id = req.params.id;

    Customer.updateCustomer(id, req.body, (err) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Error updating customer",
                error: err
            });
        }

        res.status(200).json({
            success: true,
            message: "Customer updated successfully"
        });
    });
};

// Delete customer
exports.deleteCustomer = (req, res) => {
    const id = req.params.id;

    Customer.deleteCustomer(id, (err) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Error deleting customer",
                error: err
            });
        }

        res.status(200).json({
            success: true,
            message: "Customer deleted successfully"
        });
    });
};
