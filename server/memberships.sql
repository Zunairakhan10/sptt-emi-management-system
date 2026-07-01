CREATE TABLE IF NOT EXISTS memberships (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT NULL,
  member_name VARCHAR(255) NULL,
  member_code VARCHAR(100) NULL,
  email VARCHAR(255) NULL,
  phone VARCHAR(50) NULL,
  address TEXT NULL,
  plan_name VARCHAR(255) NULL,
  amount DECIMAL(10,2) NULL,
  emi_amount DECIMAL(10,2) NULL,
  tenure_months INT NULL,
  start_date DATE NULL,
  end_date DATE NULL,
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
