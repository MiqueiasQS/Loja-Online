import { Router } from "express"
import { authentication } from "../services/teacher.service.js"

const loginRoutes = Router()

loginRoutes.post("/", async (req, res) => {
  const token = await authentication(req.body)
  res.status(200).json(token)
})

export default loginRoutes;
