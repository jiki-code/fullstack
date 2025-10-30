import express from 'express';
const app = express();
import tasksRoute from './routes/tasksRoute.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import cors from "cors"

dotenv.config();

dotenv.config();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use("/api/tasks", tasksRoute);

connectDB().then(() => {
  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log('start');
  });
});
