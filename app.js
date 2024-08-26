require("dotenv").config(); // load enironment varaibles from a .en file into process.env

const express = require("express"); // import Express Framework

const app = express(); // spining up the express framework server

const mongoose = require("mongoose"); // import Mongoose for Mong

const cors = require("cors");

const port = 3000; // Define the port number for the server

//CORS (cross-origin Resources sharing) when the frontend and backend are from different origins(domins, ports, protocols) and the bankend hasnt been configureed to accept request from  the frontend origin

app.use(cors());

const taskRouter = require("./routes/taskRouter"); // import the taskRouter for task-related router
const notFound = require("./middlewares/notFound");

app.use(express.json()); // This is Middleware to parse incoming JSON request from postman allowing access to the req.body

app.use("/api/task", taskRouter); // Mount the taskRouter at /api/task, all task=related routes start with /api/task

app.use(notFound); //use the custom 404middleware for handling unmatched route

const start = async () => {
  try {
    //Attempt to connect to mongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected");

    //// Start the server and listen on the specified port
    app.listen(port, () => {
      console.log(`server is runing on PORT ${port}`);
    });
  } catch (error) {
    //log the error if the database connection fails
    console.log(error);
    console.log("Unable to connect");
  }
};

start();

//Mongoose is an ODM (Object Data Modelling) library for MongoDB and Node.js

//MongoDB is a NoSQL database that stores data in a flexible, JSON like format

//=====================mongoDB Materials==================================

//jesusanmilesan29    passwld  U4y6Y2RwWsISz2cS

//mongodb+srv://jesusanmilesan29:U4y6Y2RwWsISz2cS@cluster0.1syti.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
