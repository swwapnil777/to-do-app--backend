import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDb.js";
import web from "./routes/web.js";
import cors from "cors";

const app = express();

dotenv.config();
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

app.use("/", web); // Mount the web routes

const PORT = process.env.PORT || 8000; // Use port from .env if available, otherwise use 8000
const DATABASE_URL = process.env.DATABASE_URL;
connectDB(DATABASE_URL);
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
