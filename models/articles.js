import mongoose from "mongoose";
const articlesSchema = new mongoose.Schema({
    slug:{
        type: String,
        required: true
    },
    title:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    body:{
        type: String,
        require: true
    },
    tagList:{
        type: String,
        require: true
    },
    favorited:{
        type: Boolean,
        require: true
    },
    favoritesCount:{
        type: Number,
        require: true
    },
    author:{
        type: String,
        require: true
    }
})