import Allowance from "../model/Allowance.js"


export const getAllowance = async (req, res) => {
    try{
        const allowance = await Allowance.find()
        res.json(allowance)
    }
    catch (e) {
        res.json({error: e})
    }
} 

export const deleteAllowance = async (req, res) => {
    const { id } = req.params

    try{
        const allowance = await Allowance.findByIdAndDelete(id)
        res.json(allowance)
    }
    catch (e) {
        res.json({error: e})
    }
} 

export const postAllowance = async (req, res) => {
    const allowance = new Allowance(req.body)
    try{
        await allowance.save()
        res.json(allowance)
    }
    catch (e) {
        res.json({error: e})
    }
} 