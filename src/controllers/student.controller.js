import { Router } from "express";
import { createStudent, deleteStudents, editStudents, listStudents } from "../services/student.service.js";
import { studentValidation } from "../utils/schemaValidation.js";

const studentRoutes = Router();

studentRoutes.get("/", async (req, res) => {
  const professor = await listStudents();
  return res.status(200).json(professor);
});
studentRoutes.post("/", async (req, res) => {
  const { error } = studentValidation.validate(req.body);

  if (error) {
    throw { status: 401, message: error.message };
  }
  const student = await createStudent(req.body);
  res.status(200).json(student);
});

studentRoutes.put("/:id", async (req, res) => {
  const { id } = req.params;

  const { error } = studentValidation.validate(req.body);

  if (error) {
    throw { status: 401, message: error.message };
  }

  const studentUpdated = await editStudents(id, req.body);
  return res.status(200).json(studentUpdated);
});

studentRoutes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const professorDeleted = await deleteStudents(id);
  return res.status(200).json(professorDeleted);
});

export default studentRoutes;
