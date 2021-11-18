import express from "express"
import { 
    registerStaff, 
    updateStaff, 
    deleteStaff, 
    registerAdmin, 
    loginAdmin, 
    loginStaff, 
    updateAdmin, 
    deleteAdmin, 
    getAllStaffs,
    getOneStaff,
    getAllAdmins,
    getOneAdmin,
} from "../controller/AuthController.js"

const router = express.Router()

// USER
router.get("/staff", getAllStaffs)
router.get("/staff/:id", getOneStaff)
router.post("/staff/register", registerStaff)
router.post("/staff/login", loginStaff)
router.patch("/staff/:id", updateStaff)
router.put("/staff/:id", updateStaff)
router.delete("/staff/:id", deleteStaff)

// ADMINS
router.get("/admin", getAllAdmins)
router.get("/admin/:id", getOneAdmin)
router.post("/admin/register", registerAdmin)
router.post("/admin/login", loginAdmin)
router.patch("/admin/:id", updateAdmin)
router.put("/admin/:id", updateAdmin) 
router.delete("/admin/:id", deleteAdmin)




export default router;