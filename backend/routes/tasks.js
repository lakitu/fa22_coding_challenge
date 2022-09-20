const Task = require("../models/task");
const express = require("express");
const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const task = await new Task(req.body).save();
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }
});

router.post("/put", async (req, res) => {
  console.log("here");
  try {
    const task = await Task.findByIdAndUpdate(req.body._id, req.body, {new: true});
    res.send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/delete", async (req, res) => {
  try {
    const task = await Task.findByIdAndRemove(req.body._id);
    res.status(200).send({
      message: "Todo successfully deleted",
      id: task._id,
    });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
