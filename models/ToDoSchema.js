// Import necessary modules from the 'mongoose' library
import mongoose, { Schema } from "mongoose";

// Define the schema for the ToDo model
const todoSchema = new Schema({
  text: {
    type: String,       // Define the data type for the 'text' field as a string
    required: true,     // Specify that the 'text' field is required (must have a value)
  },
});

// Create a model named "ToDo" using the todoSchema
const todoModel = mongoose.model("ToDo", todoSchema);

// Export the 'todoModel' to use it in other parts of the application
export default todoModel;
