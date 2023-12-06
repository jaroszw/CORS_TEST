import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import globalErrorHandlder from "./controllers/error.controller.js";
import customError from "./utils/customError.js";

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

mongoose
  .connect()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use("/auth", userRoutes);

app.all("*", (req, res, next) => {
  const err = new customError(
    `We can't find route ${req.originalUrl} on the Server`,
    404
  );

  return next(err);
});

app.use(globalErrorHandlder);

app.listen(8000, (req, res) => {
  console.log("app is listening on port 8000");
});
