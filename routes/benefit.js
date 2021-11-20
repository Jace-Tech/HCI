import express from "express"
import { getBenefit, postBenefit, deleteBenefit } from "../controller/BenefitController.js"

const router = express.Router()


router.get("/", getBenefit)
router.post("/", postBenefit)
router.delete("/:id", deleteBenefit)


export default router