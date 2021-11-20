import express from "express"
import { getAllowance, postAllowance, deleteAllowance } from "../controller/AllowanceController.js"

const router = express.Router()

router.get("/", getAllowance)
router.post("/", postAllowance)
router.delete("/:id", deleteAllowance)


export default router