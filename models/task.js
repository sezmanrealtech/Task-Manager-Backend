// in backend development, a model is like a blueprint for the data in your application. it define the structure of your data and how it interacts with the database

const mongoose = require("mongoose"); // Import Mongoose

const schema = mongoose.Schema; // shortcut to access Mongoose Schema class

//Define the schema for task based on the UI

const taskSchema = new schema({
  title: String, // Title of the task
  decription: String, // Description of the task
  tag: String, // tag associate with the task "urgent or important"
});

module.exports = mongoose.model("task", taskSchema); // Export the model to be used for Request operation in the controller
