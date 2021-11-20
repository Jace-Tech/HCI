import Work from "../model/Work.js"


export const getWork = async (req, res) => {
    try{
        const works = await Work.find()
        res.json(works)
    }
    catch (e) {
        res.json({error: e})
    }
} 

export const postWork = async (req, res) => {
    const work = new Work(req.body)
    try{
        await work.save()
        res.json(work)
    }
    catch (e) {
        res.json({error: e})
    }
} 

export const deleteWork = async (req, res) => {
    const { id } = req.params

    try{
        const work = await Work.findByIdAndDelete(id)
        res.json(work)
    }
    catch (e) {
        res.json({error: e})
    }
} 