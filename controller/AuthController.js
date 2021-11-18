import Staff from "../model/Staff.js"
import Admin from "../model/Admin.js"

import bcrypt from "bcrypt"
import { v4 } from "uuid"
import { localStorage } from "../function/index.js"


export const getAllStaffs = async (req, res) => {
    try{
        const staffs = await Staff.find();
        res.json(staffs)
    }catch(error){
        res.json({error})
    }
}

export const getOneStaff = async (req, res) => {
    const { id: _id } = req.params
    
    try{
        const staff = await Staff.findOne({ _id });
        res.json(staff)
    }catch(error){
        res.json({error})
    }
}

export const registerStaff = async (req, res) => {
    const { password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)

    const staff = new Staff({...req.body, password: hashedPassword})
    try {
        await staff.save()
        res.json(staff)
    } catch (error) {
        res.json({error})
    }

}

export const loginStaff = async (req, res) => {
    const { username, password } = req.body

    try{
        const staff = await Staff.findOne({username})

        if(!staff) {
            res.json({message: "User not found"})
            return
        }

        if(!await bcrypt.compare(password, staff.password)){
            res.json({ message: "Incorrect Password" })
            return
        }

        const token = v4()
        localStorage.setItem("STAFF_TOKEN", token)

        const data = {
            user: {
                email: staff.email,
                username: staff.username
            },
            token
        }

        res.json(data)


    }catch (error) {
        res.json({error})
    }
}


export const updateStaff = async (req, res) => {
    const { id } = req.params
    const { password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        const staff = await Staff.findByIdAndUpdate(id, {...req.body, password: hashedPassword})
        res.json(staff)
    } catch (error) {
        res.json({error})
    }
}


export const deleteStaff = async (req, res) => {
    const { id } = req.params

    try {
        const staff = await Staff.findByIdAndDelete(id)
        res.json(staff)
    } catch (error) {
        res.json({error})
    }
}

/*
 * ADMIN CONTROLLERS
 */


export const getAllAdmins = async (req, res) => {
    try{
        const admins = await Admin.find();
        res.json(admins)
    }catch(error){
        res.json({error})
    }
}

export const getOneAdmin = async (req, res) => {
    const { id: _id } = req.params
    
    try{
        const admin = await Admin.findOne({ _id });
        res.json(admin)
    }catch(error){
        res.json({error})
    }
}

export const registerAdmin = async (req, res) => {
    const { password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)

    const admin = new Admin({...req.body, password: hashedPassword})
    try {
        await admin.save()
        res.json(admin)
    } catch (error) {
        res.json({error})
    }


}

export const loginAdmin = async (req, res) => {
    const { username, password } = req.body

    try{
        const admin = await Admin.findOne({username})

        if(!admin) {
            res.json({message: "User not found"})
            return
        }

        if(!await bcrypt.compare(password, admin.password)){
            res.json({ message: "Incorrect Password" })
            return
        }

        const token = v4()
        localStorage.setItem("ADMIN_TOKEN", token)

        const data = {
            admin: {
                email: admin.email,
                username: admin.username
            },
            token
        }

        res.json(data)


    }catch (error) {
        res.json({error})
    }
}


export const updateAdmin = async (req, res) => {
    const { id: _id} = req.params
    const { password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        const admin = await Admin.findByIdAndUpdate(id, {...req.body, password: hashedPassword})
        res.json(admin)
    } catch (error) {
        res.json({error})
    }
}


export const deleteAdmin = async (req, res) => {
    const { id } = req.params

    try {
        const admin = await Admin.findByIdAndDelete(id)
        res.json(admin)
    } catch (error) {
        res.json({error})
    }
}

