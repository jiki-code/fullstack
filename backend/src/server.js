import express from 'express';
import tasksRoute from './routes/tasksRoute.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// Enable CORS in development
if (process.env.NODE_ENV !== 'production') {
  app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
}

app.use(express.json());
app.use('/api/tasks', tasksRoute);

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
