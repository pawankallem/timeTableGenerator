const mongoose = require("mongoose");

const meetingIdSchema = new mongoose.Schema({
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"classRoom",
        required: true
    },
    instructorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "instructor",
        required: true
    },
    classId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "classes",
        required: true
    },
    startTime: {type: String, required: true},
    endTime: { type: String, required: true},
    days: [{type: String, required: true}],
    typeOfClass: {
        type: String,
        enum: ["lecture","practicle","lab"],
        default: "lecture"
    }

},{
    versionKey: false,
    timestamps: true
})


module.exports = mongoose.model("meetingId",meetingIdSchema);

