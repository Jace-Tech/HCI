import Team from "../model/Team.js"


export const getAllTeams = async (req, res) => {
    try{
        const team = await Team.find();
        res.json(team)
    }catch(error){
        res.json({error})
    }
}

export const getOneTeam = async (req, res) => {
    const { id: _id } = req.params
    
    try{
        const team = await Team.findOne({ _id });
        res.json(team)
    }catch(error){
        res.json({error})
    }
}

export const updateTeam = async (req, res) => {
    const { id } = req.params
    const { password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        const team = await Team.findByIdAndUpdate(id, {...req.body, password: hashedPassword})
        res.json(team)
    } catch (error) {
        res.json({error})
    }
}


export const deleteTeam = async (req, res) => {
    const { id } = req.params

    try {
        const team = await Team.findByIdAndDelete(id)
        res.json(team)
    } catch (error) {
        res.json({error})
    }
}