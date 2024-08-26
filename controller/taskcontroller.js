// A controller in backend is like a manager that handles the logic for specific parts of your application. it decide what should happen when a request comes in and coordinates between the request, your data and response

const Task = require("../models/task");

const validateID = require("../utils/validateID");

//=========function to get all the tasks==============

const getAllTask = async (req, res) => {
  const tasks = await Task.find({}); // is to retrieve all tasks from the database
  res.status(200).json({ tasks }); // is to send the retrieved tasks in JSON response
};

//================Function for creating a new task=================

const createTask = async (req, res) => {
  const { title, description, tag } = req.body; // destructure the required feilds from the request body

  if (!title) {
    return res.status(400).json({ message: "provide a title" });
  }

  if (!description) {
    return res.status(400).json({ message: "provide a description" });
  }

  if (!tag) {
    return res.status(400).json({ message: "provide a tag" });
  }

  // =====================================================
  const task = await Task.create(req.body); // Create a new task with the request data
  res.status(201).json({ message: "Task created successfully", task }); // send a status code with a messsage of success
};

// =============Function for editing and an existing task==============

const editTask = async (req, res) => {
  const { id } = req.params; // Get the task Id from the request parameters

  if (!validateID(id)) {
    return res.status(400).json({ messsage: `ID:${id} is not valid` });
  }

  const task = await Task.findOneAndUpdate({ _id: id }, { ...req.body }); // Update the task with the provided data
  res.status(200).json({ message: "Task updated successfully" }); // send the success message if updated successfully
};
// =========Function to delete an existing task===========

const deleteTask = async (req, res) => {
  const { id } = req.params; // Get the task ID from the requested parameter

  if (!validateID(id)) {
    return res.status(400).json({ messsage: `ID:${id} is not valid` });
  }

  const task = await Task.findOneAndDelete({ _id: id }); // Delete the task with special ID
  res.status(200).json({ message: "Task successfully Deleted" }); // success message if deleted is successfull
};
// ====Function to get eachTask===========

const eachTask = async (req, res) => {
  const { id } = req.params; // Get the taskId  from the request parameter

  if (!validateID(id)) {
    return res.status(400).json({ messsage: `ID:${id} is not valid` });
  }

  const task = await Task.findOne({ _id: id }); // find the specified ID
  res.status(200).json({ task }); // send the found ID
};

// =====how to export the function above

module.exports = { getAllTask, createTask, editTask, deleteTask, eachTask }; //Export the controller function to be used in router
