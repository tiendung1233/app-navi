import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';
dotenv.config();
export const middlewareController = {
    //verify Token
    verifyToken: (req, res, next) => {
        const token = req.headers.token
        if (token) {
            const accessToken = token.split(" ")[1]
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                console.log("user", user)
                if (err) {
                    return res.status(403).json("token is not valid")
                }
                console.log(req.user)
                req.user = user
                next();
            })
        } else {
            return res.status(401).json("you're not authenticated")
        }
    },

    verifyTokenUserAndAdmin: (req, res, next) => {
        middlewareController.verifyToken(req, res, () => {
            if (req.user.id == req.params.id || req.user.role == "Admin") {
                next()
            } else {
                return res.status(403).json("you're not allowed to delete other")
            }
        })
    }
}