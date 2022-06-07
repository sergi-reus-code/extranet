import express from 'express';
//import taskRoutes from './routes/tasks'

import  taskRoutes  from "tasks";


const app = express();

console.log(taskRoutes);

//app.use(taskRoutes)

export default app