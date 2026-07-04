const db = require("../config/db");

const getEmiPayload = (emi = {}) => ({
  customer_id: emi.customer_id ?? emi.customerId ?? null,
  member_id: emi.member_id ?? emi.memberId ?? null,
  emi_code: emi.emi_code ?? emi.emiCode ?? null,
  plan_name: emi.plan_name ?? emi.plan ?? null,
  principal_amount: emi.principal_amount ?? emi.principalAmount ?? null,
  emi_amount: emi.emi_amount ?? emi.installment_amount ?? null,
  tenure_months: emi.tenure_months ?? emi.tenure ?? null,
  interest_rate: emi.interest_rate ?? emi.interestRate ?? null,
  start_date: emi.start_date ?? emi.startDate ?? null,
  end_date: emi.end_date ?? emi.endDate ?? null,
  status: emi.status ?? "active",
});

// Get all EMIs
const getAllEmis = (callback) => {
  db.query("SELECT * FROM emis", callback);
};

// Get EMI by ID
const getEmiById = (id, callback) => {
  db.query("SELECT * FROM emis WHERE id = ?", [id], callback);
};

// Create new EMI record
const createEmi = (emi, callback) => {
  const payload = getEmiPayload(emi);

  const sql = `
    INSERT INTO emis
    (
      customer_id,
      member_id,
      emi_code,
      plan_name,
      principal_amount,
      emi_amount,
      tenure_months,
      interest_rate,
      start_date,
      end_date,
      status
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      payload.customer_id,
      payload.member_id,
      payload.emi_code,
      payload.plan_name,
      payload.principal_amount,
      payload.emi_amount,
      payload.tenure_months,
      payload.interest_rate,
      payload.start_date,
      payload.end_date,
      payload.status,
    ],
    callback
  );
};

// Update EMI record
const updateEmi = (id, emi, callback) => {
  const payload = getEmiPayload(emi);

  const sql = `
    UPDATE emis SET
      customer_id = ?,
      member_id = ?,
      emi_code = ?,
      plan_name = ?,
      principal_amount = ?,
      emi_amount = ?,
      tenure_months = ?,
      interest_rate = ?,
      start_date = ?,
      end_date = ?,
      status = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [
      payload.customer_id,
      payload.member_id,
      payload.emi_code,
      payload.plan_name,
      payload.principal_amount,
      payload.emi_amount,
      payload.tenure_months,
      payload.interest_rate,
      payload.start_date,
      payload.end_date,
      payload.status,
      id,
    ],
    callback
  );
};

// Delete EMI record
const deleteEmi = (id, callback) => {
  db.query("DELETE FROM emis WHERE id = ?", [id], callback);
};

module.exports = {
  getAllEmis,
  getEmiById,
  createEmi,
  updateEmi,
  deleteEmi,
};
