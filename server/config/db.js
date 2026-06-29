const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.log("❌ Database Connection Failed");
    console.log(err.message);
    return;
  }

  console.log("✅ MySQL Connected Successfully");
  // Debug: show which server and database we're actually connected to
  db.query(
    "SELECT DATABASE() AS database_name, @@hostname AS hostname, @@port AS port, @@socket AS socket",
    (err, results) => {
      if (err) {
        console.log("❌ Failed to fetch DB info:", err.message);
        return;
      }
      const info = results && results[0] ? results[0] : {};
      console.log("🔎 DB Info:", {
        database: info.database_name || null,
        hostname: info.hostname || null,
        port: info.port || null,
        socket: info.socket || null,
      });
    }
  );
});

module.exports = db;