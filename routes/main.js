import express from "express"
import Team from "../model/Team.js"
import TeamMember from "../model/TeamMember.js"

const router = express.Router()

// USER
router.get("/", async (req, res) => {
    res.render('index')
})

router.get("/signup", async (req, res) => {
    res.render('register', {active: "register"})
})

router.get("/dashboard", async (req, res) => {
    res.render('dashboard', {active: "dashboard"})
})

router.get("/team", async (req, res) => {
    try{
        const teams = await Team.find()
        res.render('team', {active: "team", teams})
    }
    catch (e) {
        console.log({e})
    }
})

router.get("/team_member", async (req, res) => {
    try{
        const teamMembers = await TeamMember.find()
        res.render('teamMember', {active: "teamMember", teamMembers})
    }
    catch (e) {
        console.log({e})
    }
})

export default router;