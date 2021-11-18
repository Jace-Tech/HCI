import express from "express"
import cors from "cors"

import connectDatabase from "./database/index.js"

import authRoute from "./routes/auth.js"
import teamRoute from "./routes/team.js"
import teamMemberRoute from "./routes/teamMember.js"


const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors({origin: "*"}))

app.use(express.static('public'))

// ROUTES
app.use("/auth", authRoute)
app.use("/team", authRoute)
app.use("/team_member", authRoute)

connectDatabase(() => app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
}))

