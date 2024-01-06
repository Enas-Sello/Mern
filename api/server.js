import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import user from "./routes/user.route.js";
import review from "./routes/review.route.js";
import orders from "./routes/orders.route.js";
import message from "./routes/message.route.js";
import gig from "./routes/gig.route.js";
import conversation from "./routes/conversation.route.js";
import auth from "./routes/auth.route.js";
import { errorHandler } from "./middleware/errorHandler.js";
const app = express();
dotenv.config();
const corsOptions = {
  origin: "*",
  credentials: true,
};
const PORT = 8801;
// Connect to the MongoDB database
async function run() {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB success");
    app.listen(PORT, () => {
      console.log(`server run at ${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB ", error);
  }
}
run().catch(console.dir);
// route
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", auth);
app.use("/api/user", user);
app.use("/api/gig", gig);
app.use("/api/orders", orders);
app.use("/api/review", review);
app.use("/api/conversation", conversation);
app.use("/api/message", message);
app.use(errorHandler);
