const Employee = require("../models/Employee");

// Add Employee
const addEmployee = async (req, res) => {
  try {
    const {
      employeeId,
      fullName,
      email,
      phone,
      gender,
      department,
      designation,
      salary,
      joiningDate,
      profileImage,
      status,
      address,
      emergencyContact,
    } = req.body;

    // Check existing employee
    const existingEmployee = await Employee.findOne({
      $or: [
        { employeeId },
        { email }
      ]
    });

    if (existingEmployee) {
      return res.status(409).json({
        success: false,
        message: "Employee already exists",
      });
    }

    const employee = await Employee.create({
      employeeId,
      fullName,
      email,
      phone,
      gender,
      department,
      designation,
      salary,
      joiningDate,
      profileImage,
      status,
      address,
      emergencyContact,
      createdBy: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Employee added successfully",
      data: employee,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Get All Employees

const getEmployees = async (req, res) => {
  try {
    const { search, department, page = 1, limit = 10 } = req.query;

    const query = {};

    // Search by Name, Email or Employee ID
    if (search) {
      query.$or = [
        { fullName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { employeeId: { $regex: search, $options: "i" } },
      ];
    }

    // Department Filter
    if (department) {
      query.department = department;
    }

    const skip = (page - 1) * limit;

    const employees = await Employee.find(query)
  .select("-__v")
  .populate("createdBy", "fullName email")
  .sort({ createdAt: -1 })
  .skip(skip)
  .limit(Number(limit));

    const totalEmployees = await Employee.countDocuments(query);

    res.status(200).json({
      success: true,
      totalEmployees,
      currentPage: Number(page),
      totalPages: Math.ceil(totalEmployees / limit),
      data: employees,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Get Single Employee

const getEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    res.status(200).json({
      success: true,
      data: employee,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Employee

const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Employee updated successfully",
      data: employee,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Delete Employee

const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Employee deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
};