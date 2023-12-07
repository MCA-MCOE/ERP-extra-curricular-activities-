const express = require("express");

const {
  createStudent,
  getAllStudents,
  getStudentById,
} = require("../controller/studentController");

const Student = require("../model/studentModel");

const router = express.Router();

// GET all the Student
router.get("/", getAllStudents);

// GET single Student
router.get("/:id", getStudentById);

// POST single Student
router.post("/", createStudent);

// Delete single Student
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE single Student" });
});

// Update single Student
router.patch("/:id", (req, res) => {
  res.json({ message: "Update single Student" });
});

module.exports = router;
