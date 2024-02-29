require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const morgan=require("morgan")

const cors= require('cors')
app.use(cors())
app.use(cors({
    origin: 'http://localhost:3000'
}));

const prod=require('./Routes/getproductRoute')
const delProd=require("./Routes/deleteProductRoute")
const addProd=require('./Routes/addProductRoute')
const authenticationRoute = require('./routes/authenticationRoute');
const url = "mongodb://127.0.0.1:27017/tbara3"
app.use(express.urlencoded({ extended:false}));
app.use(express.json());
app.use(morgan('dev'))
app.use('/prod',prod)
app.use('/add', addProd)
app.use('/authentication', authenticationRoute)
app.use('/del', delProd)
async function connectDB(){
    try{
        await mongoose.connect(url);
        console.log("Connected to the database");
    }catch(err){
        console.error('Error connecting to the database:',err.message);
    }
}

connectDB();
app.listen(4000,()=>{
    console.log("server is running")
})