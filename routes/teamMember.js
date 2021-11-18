import express from "express"
import { deleteTeamMember, getAllTeamMembers, getOneTeamMember, updateTeamMember } from "../controller/TeamMemberController.js"

const router = express.Router()

// USER
router.get("/", getAllTeamMembers)
router.get("/:id", getOneTeamMember)
router.patch("/:id", updateTeamMember)
router.put("/:id", updateTeamMember)
router.delete("/:id", deleteTeamMember)

export default router;