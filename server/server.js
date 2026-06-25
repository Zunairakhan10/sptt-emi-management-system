const express = require("express");

const app = express();

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend Running"
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});