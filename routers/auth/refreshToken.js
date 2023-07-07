import express from "express"
import jwt from "jsonwebtoken"
import { generateAccessToken, generateRefreshToken } from "../../utilities/token.js"
const router = express.Router()

router.post('/', async (req, res) => {
    const refreshToken = req.cookies.refreshToken
    if (!refreshToken) return res.status(401).json("You're not authenticated")
    jwt.verify(refreshToken, process.env.JWT_ACCESS_KEY_REFRESH_TOKEN, (err, user) => {
        if (err) {
            console.log(err)
        }
        // create accessToken and refreshToken
        const newAccessToken = generateAccessToken(user)
        const newRefreshToken = generateRefreshToken(user)
        res.cookie('refreshToken', newRefreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: "strict"
        })
        return res.status(200).json({ accessToken: newAccessToken })
    })
})

export default router