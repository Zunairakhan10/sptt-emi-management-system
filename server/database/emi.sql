CREATE TABLE IF NOT EXISTS emis (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT NULL,
  member_id INT NULL,
  emi_code VARCHAR(100) NULL,
  plan_name VARCHAR(255) NULL,
  principal_amount DECIMAL(12,2) NULL,
  emi_amount DECIMAL(12,2) NULL,
  tenure_months INT NULL,
  interest_rate DECIMAL(5,2) NULL,
  start_date DATE NULL,
  end_date DATE NULL,
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
