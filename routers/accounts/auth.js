import express from "express"
import { Account } from "../../models/Account.js"
import bcrypt from "bcrypt"

const router = express.Router()

router.post('/', async (req, res) => {
    const { email, password } = req.body
    const user = await Account.findOne({ email })
    console.log("user", user)
    if (user) {
        const validPassword = await bcrypt.compare(password, user.password);
        if (validPassword) {
            return res.status(200).json({ message: "Login successful" })
        } else {
            return res.status(400).json({ message: "Login not successful" })
        }
    } else {
        return res.status(400).json({ message: "Username or Password not present" })
    }
})
export default router