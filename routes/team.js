import express from "express"
import { deleteTeam, getAllTeams, getOneTeam, updateTeam } from "../controller/TeamController.js"

const router = express.Router()

// USER
router.get("/", getAllTeams)
router.get("/:id", getOneTeam)
router.patch("/:id", updateTeam)
router.put("/:id", updateTeam)
router.delete("/:id", deleteTeam)

export default router;