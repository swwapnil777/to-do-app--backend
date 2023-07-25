import mongoose from "mongoose";

// Function to connect to the MongoDB database
const connectDB = async (DATABASE_URL) => {
  try {
    // Use Mongoose to connect to the MongoDB database with the provided URL
    await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,       // Use the new URL parser
      useUnifiedTopology: true,   // Use the new Server Discovery and Monitoring engine
    });
    // If the connection is successful, log a message indicating the successful connection
    console.log("Database Connected");
  } catch (error) {
    // If there's an error connecting to the database, catch the error and log an error message
    console.log("Error connecting to the database:", error);
  }
};

// Export the connectDB function to use it in other parts of the application
export default connectDB;
