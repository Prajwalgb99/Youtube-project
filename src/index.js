import mongoose from "mongoose";
import dotenv from "dotenv";    
import connectDb from "./db/index.js";

dotenv.config({
    path: "./.env"
});
connectDb()
.then(() => {
    app.listen(process.env.PORT || 8000 , () =>{
        console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {   
    console.error("Error connecting to MongoDB:", err);
});


/*
import express from "express";
const app = express();
( async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Connected to MongoDB");
        app.on("error", (err) => {
            console.error("Server error:", err);
        });
      app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
      });

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
})()
    */