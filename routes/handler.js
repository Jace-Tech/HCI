import express from "express"
import { handleAdminRegister, handleStaffRegister } from "../controller/HandlerController.js"

const router = express.Router()

router.post("/admin/register", handleAdminRegister)
router.post("/staff/register", handleStaffRegister)

export default router;