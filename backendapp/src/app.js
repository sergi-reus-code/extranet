import express from 'express';
import taskRoutes from './routes/tasks.js';
import cors from 'cors';

const app = express();




app.use(taskRoutes)

app.use(cors({ origin: '*' }));


export default app
