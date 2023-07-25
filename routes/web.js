// Import the 'express' module to create the router
import express from "express";
// Import the 'controllers' object from the 'toDoController.js' file
import controllers from "../controllers/todoController.js";

// Create a new router instance using the 'express.Router()' function
const router = express.Router();

// Define routes and corresponding controller functions for handling different HTTP methods

// Route to handle GET request for fetching all ToDo items
router.get("/home", controllers.getToDo);

// Route to handle POST request for adding a new ToDo item
router.post("/save", controllers.saveToDo);

// Route to handle PUT request for updating an existing ToDo item
router.put("/update", controllers.updateToDo);

// Route to handle DELETE request for deleting a ToDo item
router.delete("/delete", controllers.deleteToDo);

// Export the router to be used in the main application file
export default router;
