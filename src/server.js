import app from "./app.js";
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.port

app.listen(PORT, () => {
    console.log('Server is running')
});