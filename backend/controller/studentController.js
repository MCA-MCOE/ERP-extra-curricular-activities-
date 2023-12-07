const Student = require("../model/studentModel");

const mongoose = require("mongoose");

// get all students

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAr: -1 });
    res.status(200).json(students);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// get a single student by id

const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No student with id: ${id}`);

    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// create a new student

const createStudent = async (req, res) => {
  const {
    fname,
    mname,
    lname,
    prn_no,
    emailId,
    phone,
    year,
    div,
    category,
    activityOrganizer,
    activityName,
    position,
    date,
    level,
  } = req.body;


  // Add Doc to DB
  try {
    const student = await Student.create({
      fname,
      mname,
      lname,
      prn_no,
      emailId,
      phone,
      year,
      div,
      category,
      activityOrganizer,
      activityName,
      position,
      date,
      level,
    });
    res.status(200).json(student);
    // student.save();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  res.json({ message: "POST single Student" });
};

//delete a student by id

// update a student by id

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
};
