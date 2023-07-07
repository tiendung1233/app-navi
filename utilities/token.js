import jwt from "jsonwebtoken"
import * as dotenv from 'dotenv';
dotenv.config();
//GENERATE ACCESS TOKEN
export const generateAccessToken = (user) => {
    return jwt.sign({
        id: user._id,
        role: user.role
    },
        process.env.JWT_ACCESS_KEY,
        { expiresIn: "20s" }
    );
}

// GENERATE REFRESH TOKEN 
export const generateRefreshToken = (user) => {
    return jwt.sign({
        id: user._id,
        role: user.role
    },
        process.env.JWT_ACCESS_KEY_REFRESH_TOKEN,
        { expiresIn: "364d" }
    );
}
