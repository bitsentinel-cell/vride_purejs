"use strict"
import express from "express";
import userRoutes from '../src/routes/userRoutes.js'
import categoryRoutes from "./routes/categoryRoutes.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
const port = 8000;
const app = express()



app.use(bodyParser.json());
app.use(express.json());

app.use('/api/v1' , userRoutes)
app.use('/api/v1' , categoryRoutes);





// database connection with mongoose
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/vride_purejs');
}

app.listen(port ,  ()=>{
    console.log('server is up and running')
})

