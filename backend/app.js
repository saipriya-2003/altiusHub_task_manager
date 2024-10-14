import express from "express";
// import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import userRouter from './router/userRouter.js'
import { dbConnection } from "./database/dbConnection.js";



const app=express();
// config({path:"./config/config.env"});

//connecting backend with frontend
app.use(cors({
    origin:['http://localhost:5173'],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}));

//to get cookies
app.use(cookieParser());

//to parse data to string which is in json 
app.use(express.json());


app.use(express.urlencoded({
    extended:true
}));

app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'/tmp'
}));


app.use("/api/v1/user",userRouter)
// app.use("/api/v1/appointment",applicationRouter)
//to connect database
dbConnection();

//error middleware should be used at end
app.use(errorMiddleware)
export default app;