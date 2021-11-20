import express from "express"
import { getWages, getOneWage, postWage, deleteWage } from "../controller/WageController.js"

const router = express.Router()


router.get("/", getWages)
router.get("/:month", getOneWage)
router.delete("/:id", deleteWage)
router.post("/", postWage)


export default router