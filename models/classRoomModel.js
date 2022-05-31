const mongoose = require("mongoose");

const classRoomSchema = new mongoose.Schema({
    room: { type: String, required: true },
    capacity: { type: Number, required: true }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model("classRoom", classRoomSchema);