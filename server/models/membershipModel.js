const db = require("../config/db");

const getMembershipPayload = (membership = {}) => ({
    customer_id: membership.customer_id ?? membership.customerId ?? null,
    member_name: membership.member_name ?? membership.full_name ?? membership.name ?? null,
    member_code: membership.member_code ?? membership.memberCode ?? null,
    email: membership.email ?? null,
    phone: membership.phone ?? membership.mobile ?? null,
    address: membership.address ?? null,
    plan_name: membership.plan_name ?? membership.plan ?? null,
    amount: membership.amount ?? membership.total_amount ?? null,
    emi_amount: membership.emi_amount ?? membership.installment_amount ?? null,
    tenure_months: membership.tenure_months ?? membership.tenure ?? null,
    start_date: membership.start_date ?? membership.startDate ?? null,
    end_date: membership.end_date ?? membership.endDate ?? null,
    status: membership.status ?? "active"
});

// Get all memberships
const getAllMemberships = (callback) => {
    db.query("SELECT * FROM memberships", callback);
};

// Get membership by ID
const getMembershipById = (id, callback) => {
    db.query("SELECT * FROM memberships WHERE id = ?", [id], callback);
};

// Create new membership
const createMembership = (membership, callback) => {
    const payload = getMembershipPayload(membership);

    const sql = `
        INSERT INTO memberships
        (
            customer_id,
            member_name,
            member_code,
            email,
            phone,
            address,
            plan_name,
            amount,
            emi_amount,
            tenure_months,
            start_date,
            end_date,
            status
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [
        payload.customer_id,
        payload.member_name,
        payload.member_code,
        payload.email,
        payload.phone,
        payload.address,
        payload.plan_name,
        payload.amount,
        payload.emi_amount,
        payload.tenure_months,
        payload.start_date,
        payload.end_date,
        payload.status
    ], callback);
};

// Update membership
const updateMembership = (id, membership, callback) => {
    const payload = getMembershipPayload(membership);

    const sql = `
        UPDATE memberships SET
        customer_id = ?,
        member_name = ?,
        member_code = ?,
        email = ?,
        phone = ?,
        address = ?,
        plan_name = ?,
        amount = ?,
        emi_amount = ?,
        tenure_months = ?,
        start_date = ?,
        end_date = ?,
        status = ?
        WHERE id = ?
    `;

    db.query(sql, [
        payload.customer_id,
        payload.member_name,
        payload.member_code,
        payload.email,
        payload.phone,
        payload.address,
        payload.plan_name,
        payload.amount,
        payload.emi_amount,
        payload.tenure_months,
        payload.start_date,
        payload.end_date,
        payload.status,
        id
    ], callback);
};

// Delete membership
const deleteMembership = (id, callback) => {
    db.query("DELETE FROM memberships WHERE id = ?", [id], callback);
};

module.exports = {
    getAllMemberships,
    getMembershipById,
    createMembership,
    updateMembership,
    deleteMembership
};
