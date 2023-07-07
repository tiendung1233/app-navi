import express from "express"
import { Account } from "../../models/Account.js"
import bcrypt from "bcrypt"
import * as dotenv from 'dotenv';
import { generateAccessToken, generateRefreshToken } from "../../utilities/token.js";
dotenv.config();
const router = express.Router()

router.post('/', async (req, res) => {
    const { email, password } = req.body
    const user = await Account.findOne({ email })

    if (user) {
        const validPassword = await bcrypt.compare(password, user.password);
        if (validPassword) {
            const accessToken = generateAccessToken(user)
            const refreshToken = generateRefreshToken(user)
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                secure: false,
                sameSite: "strict"
            })
            return res.status(200).json({ user, accessToken })
        } else {
            return res.status(400).json({ message: "Login not successful" })
        }
    } else {
        return res.status(400).json({ message: "Username or Password not present" })
    }
})

export default router