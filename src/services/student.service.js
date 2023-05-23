import bcrypt from "bcrypt";
import Student from "../models/student.model.js";

const createStudent = async (data) => {
  console.log(data);
  const hashedPassword = bcrypt.hashSync(data.password, 8);
  const studentData = { ...data, password: hashedPassword };
  const studentCreated = new Student(studentData);
  await studentCreated.save();
  return studentCreated;
};

const listStudents = async () => {
  const students = await Student.find();
  return students;
};

const editStudent = async (id, data) => {
  const hashedPassword = bcrypt.hashSync(data.password, 8);
  const studentData = { ...data, password: hashedPassword };
  const updatedStudent = await Student.findByIdAndUpdate(id, studentData, { new: true });
  return updatedStudent;
};

const deleteStudent = async (id) => {
  await Student.findByIdAndDelete(id);
};

const getStudentById = async (id) => {
  const student = await Student.findById(id);
  return student;
};

export { createStudent, listStudents, editStudent, deleteStudent, getStudentById };
