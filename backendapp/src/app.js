import express from 'express';
import taskRoutes from './routes/tasks.js';
import cors from 'cors';

const app = express();

const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "192.168.18.5:3001", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                    credentials: true
                }
            ]
        }
}
}



app.use(taskRoutes)
app.use(cors(
    config.application.cors.server
  ));
export default app
