const express = require("express"); // Import Express Framework step 1
const {
  getAllTask,
  createTask,
  editTask,
  deleteTask,
  eachTask,
} = require("../controller/taskcontroller");

const router = express.Router(); // Create a new router instance step 2

router.get("/", getAllTask); // router to get all tasks, handle by the getAlltask function

router.post("/create", createTask); // router to create anew task, handle by createtask function

router.patch("/:id", editTask); // Router to edit a specific task by its ID, handled by editTask function in controller

router.delete("/:id", deleteTask); // Route to delete a specific task by its ID,handled by dlelteTask function from taskcontroller

router.get("/:id", eachTask); // route to get a specific task

module.exports = router; // we export the router to be used in the main server  file (app.js)
