import { Router } from "express";
import {
  createProfessor,
  listProfessors,
  editProfessors,
  deleteProfessor,
} from "../services/teacher.service.js";
import { professorValidation } from "../utils/schemaValidation.js";

const professorRoutes = Router();

professorRoutes.get("/", async (req, res) => {
  const professor = await listProfessors();
  return res.status(200).json(professor);
});

professorRoutes.post("/", async (req, res) => {
  const { error } = professorValidation.validate(req.body);

  if (error) {
    throw { status: 401, message: error.message };
  }
  const professor = await createProfessor(req.body);
  res.status(200).json(professor);
});

professorRoutes.put("/:id", async (req, res) => {
  const { id } = req.params;

  const { error } = professorValidation.validate(req.body);

  if (error) {
    throw { status: 401, message: error.message };
  }

  const professorUpdated = await editProfessors(id, req.body);
  return res.status(200).json(professorUpdated);
});

professorRoutes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const professorDeleted = await deleteProfessor(id);
  return res.status(200).json(professorDeleted);
});

export default professorRoutes;
