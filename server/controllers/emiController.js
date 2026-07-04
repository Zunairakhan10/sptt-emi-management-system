const Emi = require("../models/emiModel");

// Get all EMIs
exports.getAllEmis = (req, res) => {
  Emi.getAllEmis((err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Error fetching EMI records",
        error: err,
      });
    }

    res.status(200).json({
      success: true,
      data: results,
    });
  });
};

// Get EMI by ID
exports.getEmiById = (req, res) => {
  const id = req.params.id;

  Emi.getEmiById(id, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Error fetching EMI record",
        error: err,
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        message: "EMI record not found",
      });
    }

    res.status(200).json({
      success: true,
      data: results[0],
    });
  });
};

// Create EMI record
exports.createEmi = (req, res) => {
  const emiData = {
    ...req.body,
    status: req.body.status || "active",
  };

  Emi.createEmi(emiData, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Error creating EMI record",
        error: err,
      });
    }

    res.status(201).json({
      success: true,
      message: "EMI record created successfully",
      emiId: result.insertId,
    });
  });
};

// Update EMI record
exports.updateEmi = (req, res) => {
  const id = req.params.id;
  const emiData = {
    ...req.body,
    status: req.body.status || "active",
  };

  Emi.updateEmi(id, emiData, (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Error updating EMI record",
        error: err,
      });
    }

    res.status(200).json({
      success: true,
      message: "EMI record updated successfully",
    });
  });
};

// Delete EMI record
exports.deleteEmi = (req, res) => {
  const id = req.params.id;

  Emi.deleteEmi(id, (err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Error deleting EMI record",
        error: err,
      });
    }

    res.status(200).json({
      success: true,
      message: "EMI record deleted successfully",
    });
  });
};
