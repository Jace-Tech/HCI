import Wage from "../model/Wage.js"


export const getWages = async (req, res) => {
    try{
        const wages = await Wage.find()
        res.json(wages)
    }
    catch (e) {
        res.json({error: e})
    }
} 

export const getOneWage = async (req, res) => {
    const { month } = req.params
    try{
        const wages = await Wage.findOne({ month })
        res.json(wages)
    }
    catch (e) {
        res.json({error: e})
    }
} 

export const deleteWage = async (req, res) => {
    const { id } = req.params
    try{
        const wages = await Wage.findByIdAndDelete(id)
        res.json(wages)
    }
    catch (e) {
        res.json({error: e})
    }
} 

export const postWage = async (req, res) => {
    const wage = new Wage(req.body)
    try{
        await wage.save()
        res.json(wage)
    }
    catch (e) {
        res.json({error: e})
    }
} 