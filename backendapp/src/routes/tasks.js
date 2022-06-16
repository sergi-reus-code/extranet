import { Router } from "express";
import {
    getTasks, 
    getTask, 
    saveTask,
    getTaskCount, 
    deleteTask,
    updateTask
}  from "../controllers/tasks.js";

const router = Router();

router.get("/tasks", getTasks)

router.get("/tasks/count", getTaskCount);

router.get("/tasks/:id", getTask)

router.post("/tasks/", saveTask)

router.delete("/tasks/:id", deleteTask)

/*router.delete('/tasks/:id', ()=> {
    console.log("pepe");
})*/


router.put("/tasks/:id", updateTask)

export default router