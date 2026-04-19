const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: String,
    status: String,
    assignedTo: String,
});

module.exports = mongoose.model("Task", taskSchema);