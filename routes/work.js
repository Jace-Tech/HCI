import express from "express"
import { getWork, postWork, deleteWork } from "../controller/WorkController.js"

const router = express.Router()


router.get("/", getWork)
router.post("/", postWork)
router.delete("/:id", deleteWork)


export default router