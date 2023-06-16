import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "Basic",
        required: true,
    },
})


export const Account = mongoose.models.Account || mongoose.model('Account', accountSchema, 'accounts')