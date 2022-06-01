const express = require("express");
const Classes = require("../models/classModel");
const Instructor = require("../models/instructorModel");
const ClassRoom = require("../models/classRoomModel");

const router = express.Router();

router.get("",async(req,res)=>{
    try {
        const data= {
            class : await Classes.find().lean().exec(),
            room : await ClassRoom.find().lean().exec(),
            instructor : await Instructor.find().lean().exec(),
        }

        return res.status(200).send(data);

    } catch (error) {
        console.log('error:', error)
        
    }
})

module.exports = router;