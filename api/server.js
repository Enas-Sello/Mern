import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorHandler } from "./middleware/errorHandler.js";
import routes from "./routes/index.js";

const app = express();
dotenv.config();
const corsOptions = {
  origin: process.env.CORS_URL,
  credentials: true,
};
const PORT = 8801;
// Connect to DB
async function run() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to MongoDB success");

    app.listen(process.env.PORT || 8800, () => {
      console.log(`Server running at ${process.env.PORT || 8800}`);
    });
  } catch (e) {
    console.error("Error connecting to MongoDB ", e);
  }
}
run().catch(console.dir);

// Route
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use("/", routes)
app.use(errorHandler);
