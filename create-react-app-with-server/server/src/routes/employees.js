const express = require("express");
const router = express.Router();
const employee = { name: "test doke", id: 123 };
router.get("/employees/:id", (req, res, next) => {
  res.send(employee);
});

module.exports = router;