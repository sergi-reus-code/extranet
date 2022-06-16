import express from 'express';
import cors from 'cors';
import morgan from 'morgan';



import taskRoutes from './routes/tasks.js';

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(taskRoutes);

export default app;

