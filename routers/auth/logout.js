import express from "express"
const router = express.Router()

router.post('/', (req, res) => {
    try {
        res.clearCookie("refreshToken")
        return res.status(200).json('successfully')
    } catch (error) {
        res.status(401).json(error)
    }

})

export default router