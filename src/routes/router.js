import { Router } from "express";
import authenticationMiddleware from "../middlewares/auth.middleware.js";
import professorController from "../controllers/teacher.controller.js";
import courseController from "../controllers/course.controller.js";
import loginController from "../controllers/login.controller.js";
import studentController from "../controllers/student.controller.js";
import enrollmentController from "../controllers/enrollment.controller.js";

const routes = Router();

routes.use("/teacher", authenticationMiddleware, professorController);
routes.use("/login", loginController);
routes.use("/courses", authenticationMiddleware, courseController);
routes.use("/students", authenticationMiddleware, studentController);
routes.use("/enrollments", authenticationMiddleware, enrollmentController);

export default routes;
