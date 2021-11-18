import { localStorage } from "../function/index.js"

export const AUTHENTICATE = (req, res, next) => {
    const { Authorization } = req.headers
    const user = location.getItem("ADMIN_TOKEN")
    next()
}