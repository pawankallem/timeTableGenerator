const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    class: { type: String, required: true },
    department: { type: String, required: true },
    course_number: { type: String, required: true },
    maximum_number_of_students: { type: Number, required: true }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model("classes", classSchema);