import { Router } from "express"
import {
  createCourse,
  listCourses,
  editCourses,
  deleteCourse,
} from "../services/course.service.js"
import { courseValidation } from "../utils/schemaValidation.js"

const courseRoutes = Router()

courseRoutes.get("/", async (req, res) => {
  const course = await listCourses()
  return res.status(200).json(course)
})
courseRoutes.post("/", async (req, res) => {
  const { error } = courseValidation.validate(req.body)

  if (error) {
    throw { status: 401, message: error.message }
  }
  const course = await createCourse(req.body)
  res.status(200).json(course)
})
courseRoutes.put("/:id", async (req, res) => {
  const { id } = req.params

  const { error } = courseValidation.validate(req.body)

  if (error) {
    throw { status: 401, message: error.message }
  }

  const courseUpdated = await editCourses(id, req.body)
  return res.status(200).json(courseUpdated)
})

courseRoutes.delete("/:id", async (req, res) => {
  const { id } = req.params
  const courseDeleted = await deleteCourse(id)
  return res.status(200).json(courseDeleted)
})

export default courseRoutes
