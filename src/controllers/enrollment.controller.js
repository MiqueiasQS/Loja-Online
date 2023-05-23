import { Router } from "express";
import { createEnrollment, listEnrollment, editEnrollment, deleteEnrollment } from "../services/enrollment.service.js";
import { enrollmentValidation } from "../utils/schemaValidation.js";

const enrollmentRoutes = Router();

enrollmentRoutes.get("/", async (req, res) => {
  const professor = await listEnrollment();
  return res.status(200).json(professor);
});
enrollmentRoutes.post("/", async (req, res) => {
  const { error } = enrollmentValidation.validate(req.body);

  if (error) {
    throw { status: 401, message: error.message };
  }
  const enrollmentList = await listEnrollment();
  enrollmentList.map(enroll => {
    if (enroll.estudante.equals(req.body.estudante)) {
      throw { status: 422, message: "Aluno já cadastrado nessa matéria" };
    }
  })


  const enrollment = await createEnrollment(req.body);
  res.status(200).json(enrollment);
});

enrollmentRoutes.put("/:id", async (req, res) => {
  const { id } = req.params;

  const { error } = enrollmentValidation.validate(req.body);

  if (error) {
    throw { status: 401, message: error.message };
  }

  const enrollmentUpdated = await editEnrollment(id, req.body);
  return res.status(200).json(enrollmentUpdated);
});

enrollmentRoutes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const enrollmentDeleted = await deleteEnrollment(id);
  return res.status(200).json(enrollmentDeleted);
});

export default enrollmentRoutes;
