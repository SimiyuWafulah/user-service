import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const app = express();
app.use(express.json());

//connecting to database
mongoose.connect(process.env.mongo_url).then(() => {
    console.log('Connected to Database')
}).catch((err) => {
    console.log(err)
});

export default app