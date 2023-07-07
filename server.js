import express from "express";
import mongoose from "mongoose";
import Router from "./routers/index.js";
import cookieParser from "cookie-parser";
const app = express();
const PORT = process.env.PORT || 3001;
mongoose.connect('mongodb://localhost:27017/navi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use(express.json());
app.use(cookieParser());
app.get('/', (req, res) => {
    res.send("dung")
})
Router(app)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
