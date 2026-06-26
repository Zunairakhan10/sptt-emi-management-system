const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./config/db");

const adminRoutes = require("./routes/adminRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to SPTT Membership API 🚀");
});

// Test Route
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend Running"
  });
});

// Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});