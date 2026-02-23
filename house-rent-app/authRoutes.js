const express = require("express");
const router = express.Router();

console.log("authRoutes file loaded");

let users = [];

// REGISTER
router.post("/register", (req, res) => {
  console.log("Register API called");
  const user = req.body;
  users.push(user);
  res.send("User registered successfully");
});

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    res.send("Login successful");
  } else {
    res.send("Invalid credentials");
  }
});

module.exports = router;
