import express from "express"
import { deleteTeamMember, getAllTeamMembers, getOneTeamMember, updateTeamMember, postOneTeamMember } from "../controller/TeamMemberController.js"

const router = express.Router()

// USER
router.get("/", getAllTeamMembers)
router.get("/:id", getOneTeamMember)
router.post("/", postOneTeamMember)
router.patch("/:id", updateTeamMember)
router.put("/:id", updateTeamMember)
router.delete("/:id", deleteTeamMember)

export default router;