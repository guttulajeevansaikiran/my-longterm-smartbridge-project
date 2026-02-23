const express = require("express");
const router = express.Router();

let bookings = [];

// Book property
router.post("/book", (req, res) => {
  const booking = req.body;
  bookings.push(booking);
  res.send("Property booked successfully");
});

// View bookings
router.get("/all", (req, res) => {
  res.json(bookings);
});

module.exports = router;

