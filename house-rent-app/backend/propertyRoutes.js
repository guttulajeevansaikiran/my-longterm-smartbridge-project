const express = require("express");
const router = express.Router();

let properties = [];

// Add property
router.post("/add", (req, res) => {
  const property = req.body;
  properties.push(property);
  res.send("Property added successfully");
});

// View properties
router.get("/all", (req, res) => {
  res.json(properties);
});

module.exports = router;
