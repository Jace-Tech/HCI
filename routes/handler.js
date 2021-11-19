import express from "express"
import { handleAdminRegister } from "../controller/HandlerController.js"

const router = express.Router()

router.post("/admin/register", handleAdminRegister)

export default router;