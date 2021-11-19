import axios from "axios"

const URL = "http://localhost:5000"

export const handleAdminRegister = async (req, res) => {
    const data = JSON.stringify(req.body)
    
    const config = {
        method: 'Post',
        url: `${URL}/auth/admin/register`,
        headers: { 
            'Content-Type': 'application/json'
        },
        data
    };
    
    try{
        const { data } = await axios(config)
        if(data) res.redirect('/')
    } catch(error){
        console.log({error})
    }
}
