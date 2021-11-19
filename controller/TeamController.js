import Team from "../model/Team.js"
import { v4 } from "uuid"

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


export const postOneTeam = async (req, res) => {
    const teamID = v4()
    const team = new Team({...req.body, teamID})

    try {
        await team.save()
        res.json(team)
        
    } catch (error) {
        res.json({error})
    }
}


export const updateTeam = async (req, res) => {
    const { id } = req.params

    try {
        const team = await Team.findByIdAndUpdate(id, req.body)
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