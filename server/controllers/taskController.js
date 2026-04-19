const Task = require("../models/Task");

// Create
exports.createTask = async (req, res) => {
    const task = await Task.create({
        ...req.body,
        createdBy: req.user.id,
    });
    res.json(task);
};

// Get all
exports.getTasks = async (req, res) => {
    const tasks = await Task.find({ createdBy: req.user.id });
    res.json(tasks);
};

// Update status
exports.updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(task);
};

// Delete
exports.deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
};