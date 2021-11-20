import express from "express"
import { getMeter, postMeter, deleteMeter } from "../controller/MeterController.js"

const router = express.Router()


router.get("/", getMeter)
router.post("/", postMeter)
router.delete("/:id", deleteMeter)


export default router