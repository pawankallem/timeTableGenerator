const express = require("express");
const MeetingId = require("../models/meetingIdModel");
const ClassRoom = require("../models/classRoomModel");
const Instructors = require("../models/instructorModel");
const Classes = require("../models/classModel");

const router = express.Router();

const checkElement = (name1, name2) => {
    let i = 0, j = 0;
    while (i < name1.length) {
        if (name1[i] != name2[j]) {
            return false;
        }
        i++;
        j++;
    }
    return true;
}

const mySplit = (str) => {
    let string = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ".") {
            string += str[i];
        }
    }
    return string;
}

const checkTime = (s1, s2, e1, e2) => {

    start1 = +mySplit(s1)
    start2 = +mySplit(s2)
    end1 = +mySplit(e1)
    end2 = +mySplit(e2)
    if (start2 < end1 && end2 >= start1) {
        return true;
    }
    return false;
}

const chechWeekDays = (arr1, arr2) => {

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            return true;
        }
    };
    return false;
}

const availableRooms = async (number) => {
    // {room : {$ne : number}}

    try {
        
        let arr=[];
        const classRoom = await ClassRoom.find().lean().exec();
        classRoom.map((elem) => {
            if(elem.room != number){
                arr.push({
                    room:elem.room,
                    capacity: elem.capacity
                })
            }
        })
        console.log(arr)
        return arr;
    } catch (error) {
        console.log('error:', error)
        
    }
}

router.post("", async (req, res) => {
    try {

        let meeting = await MeetingId.find()
            .populate({ path: "roomId" })
            .populate({ path: "instructorId" })
            .populate({ path: "classId" })
            .lean().exec();

        let err = [];
        meeting.map((elem) => {

          return (checkTime(elem.startTime, req.body.startTime, elem.endTime, req.body.endTime) == false && 
            chechWeekDays(elem.days, req.body.days) &&
            checkElement(elem.roomId.room, req.body.room)) ? err.push ("Rooms not available at this time and day !") : 
            checkElement(elem.instructorId.name, req.body.instructor) ? 
            err[0] = " This Instructors is taking anothor class ! ":
            (checkElement(elem.classId.class, req.body.class) && 
            checkElement(elem.classId.department, req.body.department) && 
            checkElement(elem.classId.course_number, req.body.number) ) ? 
            err[0] = (" These are attending another class from this department !") :
            err.pop();
        })

        if ( err.length != 0){
            return res.send(err[0])
        }

        let classRoom = await ClassRoom.findOne({room : req.body.room}).lean().exec();
        let instructor = await Instructors.findOne({ name : req.body.instructor}).lean().exec();
        let classes = await Classes.findOne({
            class : req.body.class,
            department: req.body.department,
            course_number: req.body.number                  
        }).lean().exec();
        console.log(classRoom);

        meeting = await MeetingId.create({
          roomId : classRoom._id,
          instructorId : instructor._id,
          classId : classes._id,
          startTime: req.body.startTime,
          endTime: req.body.endTime,
          days: req.body.days
      }); 

        return res.send(meeting)

    } catch (error) {
        console.log('error:', error)

    }
});

router.get("",async(req,res)=>{
    try {
        let meetingId = await MeetingId.find()
        .populate({path : "roomId" , select : ["room" , "capacity"]})
        .populate({path:"instructorId" , select : "name"})
        .populate({path:"classId" ,  select : ["class", "department", "course_number","maximum_number_of_students"]})
        .lean().exec();
        return res.status(200).send(meetingId)
        
    } catch (error) {
        console.log('error:', error)
    }
})

module.exports = router;