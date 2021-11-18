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
    const { password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        const teamMember = await TeamMember.findByIdAndUpdate(id, {...req.body, password: hashedPassword})
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