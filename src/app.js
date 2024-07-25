import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
dotenv.config()

const app = express();
app.use(express.json());


//connecting to database
mongoose.connect(process.env.mongo_url).then(() => {
    console.log('Connected to Database')
}).catch((err) => {
    console.log(err)
});

app.use('/api/user', userRouter);
export default app;