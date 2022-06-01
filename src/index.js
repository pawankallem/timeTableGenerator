const express=require("express");
const cors=require("cors");
const connect = require("./config/db");
require("dotenv").config();

const classController = require("./controllers/classController");
const instructorController = require("./controllers/instructorController");
const classRoomController = require ("./controllers/classRoomController");
const meetingIdController = require("./controllers/meetingIdController");

const app=express();
app.use(express.json());
app.use(cors());

app.use("/createClass",classController);
app.use("/createInstructor",instructorController);
app.use("/createClassroom",classRoomController);
app.use("",meetingIdController);

const port=process.env.PORT ||5555;

app.listen(port,async(req,res)=>{
    try{
        await connect();
        console.log(`listening to port ${port}`)
    }catch(err){
        console.log(err)
    }
})