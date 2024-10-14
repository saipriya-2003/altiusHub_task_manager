import mongoose  from "mongoose";

export const dbConnection=()=>{
    mongoose.connect('mongodb+srv://saipriya:saipriya@cluster0.o59b0.mongodb.net/?',
        {
            dbName:"task_manager",
        }).then(()=>{
            console.log("connected to database");
        }).catch(err=>{
            console.log("error occured:",err);
        })
}