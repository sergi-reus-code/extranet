import express from 'express';
import cors from 'cors';


import taskRoutes from './routes/tasks.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use(taskRoutes);

export default app;
