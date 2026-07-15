const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth.middleware");

const {
  addEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employee.controller");

// Routes
router.post("/", protect, addEmployee);

router.get("/", protect, getEmployees);

router.get("/:id", protect, getEmployee);

router.put("/:id", protect, updateEmployee);

router.delete("/:id", protect, deleteEmployee);

module.exports = router;
