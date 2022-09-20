const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const taskSchema = new Schema({
    task: {type: String, required: true},
    description: {type: String, required: false}
});


module.exports = mongoose.model("task", taskSchema);
