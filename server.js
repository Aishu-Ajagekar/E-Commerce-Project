// const express = require('express');
// const colors = require('colors');
// const env = require('dotenv');
import express from 'express';
import colors from 'colors';
import env from 'dotenv' ;
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors' ;
import categoryRoute from './routes/categoryRoute.js';
import productRoutes from "./routes/productRoutes.js"



//configure dotenv file
env.config();

//configure database here
connectDB();

//Register the app
const app = express();


//use middleware
app.use(express.json());
app.use(morgan('combined'));
app.use(cors());

//define our root path
app.use('/api/v1/auth', authRoutes);

//define the route path for category
app.use('/api/v1/category' , categoryRoute);

//define route for product
app.use('/api/v1/product' , productRoutes);

const port = process.env.PORT;
app.listen(port, ()=> {
    console.log(`server running on port : ${port}`.bgCyan.white);
})