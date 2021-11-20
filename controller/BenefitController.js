import Benefit from "../model/Benefit.js"


export const getBenefit = async (req, res) => {
    try{
        const benefits = await Benefit.find()
        res.json(benefits)
    }
    catch (e) {
        res.json({error: e})
    }
} 

export const deleteBenefit = async (req, res) => {
    const { id } = req.params

    try{
        const benefit = await Benefit.findByIdAndDelete(id)
        res.json(benefit)
    }
    catch (e) {
        res.json({error: e})
    }
} 

export const postBenefit = async (req, res) => {
    const benefit = new Benefit(req.body)
    try{
        await benefit.save()
        res.json(benefit)
    }
    catch (e) {
        res.json({error: e})
    }
} 