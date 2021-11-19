import TeamMember from "../model/TeamMember.js"


export const getAllTeamMembers = async (req, res) => {
    try{
        const teamMembers = await TeamMember.find();
        res.json(teamMembers)
    }catch(error){
        res.json({error})
    }
}

export const getOneTeamMember = async (req, res) => {
    const { id: _id } = req.params
    
    try{
        const teamMember = await TeamMember.findOne({ _id });
        res.json(teamMember)
    }catch(error){
        res.json({error})
    }
}

export const updateTeamMember = async (req, res) => {
    const { id } = req.params

    try {
        const teamMember = await TeamMember.findByIdAndUpdate(id, req.body)
        res.json(teamMember)
    } catch (error) {
        res.json({error})
    }
}

export const postOneTeamMember = async (req, res) => {
    const teamMember = new TeamMember(req.body)

    try {
        await teamMember.save()
        res.json(teamMember)
    } catch (error) {
        res.json({error})
    }
}


export const deleteTeamMember = async (req, res) => {
    const { id } = req.params

    try {
        const teamMember = await TeamMember.findByIdAndDelete(id)
        res.json(teamMember)
    } catch (error) {
        res.json({error})
    }
}