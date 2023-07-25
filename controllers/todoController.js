import todoModel from "../models/ToDoSchema.js";

class controllers {
  // Get all ToDo items
  static getToDo = async (req, res) => {
    try {
      // Retrieve all ToDo items from the database using todoModel.find()
      const todos = await todoModel.find();
      // Send the retrieved ToDo items as a response
      res.send(todos);
    } catch (error) {
      // If an error occurs during the retrieval process, log the error and send a 500 status with an error message
      console.error(error);
      res.status(500).send("Server Error");
    }
  };

  // Save a new ToDo item
  static saveToDo = async (req, res) => {
    const { text } = req.body;
    try {
      // Create a new ToDo item in the database using todoModel.create()
      const newToDo = await todoModel.create({ text });
      // Log a success message and the newly created ToDo item
      console.log("Added Successfully...");
      console.log(newToDo);
      // Send the newly created ToDo item as a response
      res.send(newToDo);
    } catch (error) {
      // If an error occurs during the creation process, log the error and send a 500 status with an error message
      console.error(error);
      res.status(500).send("Server Error");
    }
  };

  // Update a ToDo item
  static updateToDo = async (req, res) => {
    const { _id, text } = req.body;
    try {
      // Find the ToDo item by its _id and update its 'text' field using todoModel.findByIdAndUpdate()
      const updatedToDo = await todoModel.findByIdAndUpdate(_id, { text });
      // If the ToDo item is not found, return a 404 status with an error message
      if (!updatedToDo) {
        return res.status(404).json({ message: "ToDo not found" });
      }
      // If the update is successful, send a 201 status with a success message
      res.status(201).send("Updated Successfully...");
    } catch (error) {
      // If an error occurs during the update process, log the error and send a 500 status with an error message
      console.error(error);
      res.status(500).send("Server Error");
    }
  };

  // Delete a ToDo item
  static deleteToDo = async (req, res) => {
    const { _id } = req.body;
    try {
      // Find the ToDo item by its _id and delete it from the database using todoModel.findByIdAndDelete()
      const deletedToDo = await todoModel.findByIdAndDelete(_id);
      // If the ToDo item is not found, return a 404 status with an error message
      if (!deletedToDo) {
        return res.status(404).json({ message: "ToDo not found" });
      }
      // If the deletion is successful, send a 201 status with a success message
      res.status(201).send("Deleted Successfully...");
    } catch (error) {
      // If an error occurs during the deletion process, log the error and send a 500 status with an error message
      console.error(error);
      res.status(500).send("Server Error");
    }
  };
}

export default controllers;
