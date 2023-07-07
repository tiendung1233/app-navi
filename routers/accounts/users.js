import express from "express";
import { Account } from "../../models/Account.js";
import { middlewareController } from "../../middleware/middleware.js";
const router = express.Router()

router.get('/', middlewareController.verifyToken, async (req, res) => {
    try {
        const userAll = await Account.find()
        return res.status(200).json(userAll)
    } catch (error) {
        return res.status(400).json(error)
    }
})

router.delete('/:id', middlewareController.verifyTokenUserAndAdmin, async (req, res) => {
    try {
        const user = await Account.findById(req.params.id)
        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).json(error)
    }
})
export default router
