import Meter from "../model/Meter.js"


export const getMeter = async (req, res) => {
    try{
        const benefits = await Meter.find()
        res.json(benefits)
    }
    catch (e) {
        res.json({error: e})
    }
} 

export const deleteMeter = async (req, res) => {
    const { id } = req.params
    try{
        const benefit = await Meter.findByIdAndDelete(id)
        res.json(benefit)
    }
    catch (e) {
        res.json({error: e})
    }
} 

export const postMeter = async (req, res) => {
    const benefit = new Meter(req.body)
    try{
        await benefit.save()
        res.json(benefit)
    }
    catch (e) {
        res.json({error: e})
    }
} 