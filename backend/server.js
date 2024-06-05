import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

// app config
const app = express();
const port = process.env.PORT;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () =>
  console.log(`Server started on http://localhost:${port}`)
);

// mongodb+srv://techbolaf:zbH3uQxp9wRYweAT@cluster0.f2hpuri.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
