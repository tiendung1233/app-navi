import express from "express"
import { Account } from "../../models/Account.js"
import bcrypt from "bcrypt"
const router = express.Router()

router.post('/', async (req, res) => {
    const { username, email } = req.body
    const account = new Account(req.body)
    const userCheck = Account.findOne({ "username": username })
    console.log(userCheck);
    if (!userCheck) {
        res.status(400).json({ message: "user name is already in use." })
        return;
    }

    const emailCheck = Account.find({ "email": email }
    )
    if (!emailCheck) {
        res.status(400).json({ message: "email is already in use." })
        return;
    }
    const salt = await bcrypt.genSalt(10);

    account.password = await bcrypt.hash(account.password, salt);

    try {
        await account.save()
        res.status(200).json({ message: "User successfully created", username })
    } catch (error) {
        res.status(400).json({ message: "User not successful created", error: error.mesage })
    }
})

export default router