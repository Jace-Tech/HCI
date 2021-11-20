import express from "express"
import cors from "cors"

import connectDatabase from "./database/index.js"

import authRoute from "./routes/auth.js"
import teamRoute from "./routes/team.js"
import mainRoute from "./routes/main.js"
import handlerRoute from "./routes/handler.js"
import allowanceRoute from "./routes/allowance.js"
import benefitRoute from "./routes/benefit.js"
import wageRoute from "./routes/wage.js"
import workRoute from "./routes/work.js"
import meterRoute from "./routes/meter.js"
import teamMemberRoute from "./routes/teamMember.js"


const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors({origin: "*"}))
app.use(express.urlencoded())
app.use(express.static('public'))
app.set("view engine", "ejs")

// ROUTES
app.use("/", mainRoute)
app.use("/handler", handlerRoute)
app.use("/auth", authRoute)
app.use("/meter", meterRoute)
app.use("/work", workRoute)
app.use("/wage", wageRoute)
app.use("/allowance", allowanceRoute)
app.use("/benefit", benefitRoute)
app.use("/team", teamRoute)
app.use("/team_member", teamMemberRoute)

connectDatabase(() => app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
}))

