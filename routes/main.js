import express from "express"
import Team from "../model/Team.js"
import TeamMember from "../model/TeamMember.js"
import Meter from "../model/Meter.js"
import Benefit from "../model/Benefit.js"
import Wage from "../model/Wage.js"
import Work from "../model/Work.js"
import Allowance from "../model/Allowance.js"

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

// ADMIN
router.get("/admin", (req, res) => {
    res.render("admin/index")
})

router.get("/admin", (req, res) => {
    res.render("admin/index")
})

router.get("/admin/register", (req, res) => {
    res.render("admin/register")
})

router.get("/admin/meter", async (req, res) => {
    try{
        const meters = await Meter.find()
        res.render("admin/meter", {active: "meter", meters})
    }
    catch (e) {
        console.log({e})
    }
})

router.get("/admin/wage", async (req, res) => {
    try{
        const wages = await Wage.find()
        res.render("admin/wage", {active: "wage", wages})
    }
    catch (e) {
        console.log({e})
    }
})

router.get("/admin/work", async (req, res) => {
    try{
        const works = await Work.find()
        res.render("admin/work", {active: "work", works})
    }
    catch (e) {
        console.log({e})
    }
})

router.get("/admin/allowance", async (req, res) => {
    try{
        const allowance = await Allowance.find()
        res.render("admin/allowance", {active: "allowance", allowance})
    }
    catch (e) {
        console.log({e})
    }
})

router.get("/admin/benefit", async (req, res) => {
    try{
        const benefits = await Benefit.find()
        res.render("admin/benefit", {active: "benefit", benefits})
    }
    catch (e) {
        console.log({e})
    }
})

router.get("/admin/dashboard", (req, res) => {
    res.render("admin/dashboard", {active: "dashboard"})
})

export default router;