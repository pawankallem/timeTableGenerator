const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    department: { type: String, required: true }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model("instructor", instructorSchema);