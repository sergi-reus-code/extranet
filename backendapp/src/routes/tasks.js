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

/**
 * @swagger
 * /tasks:
 * get:
 *  summary. Get all tasks
 */

router.get("/tasks", getTasks)

/**
 * @swagger
 * /tasks/count:
 * get:
 *  summary. Get total tasks counter 
 */

router.get("/tasks/count", getTaskCount);

/**
 * @swagger
 * /tasks:
 * get:
 *  summary. Get a task by id  
 */

router.get("/tasks/:id", getTask)

/**
 * @swagger
 * /tasks:
 * post:
 *  summary. save a new task 
 */

router.post("/tasks/", saveTask)

/**
 * @swagger
 * /tasks:
 * delete:
 *  summary. delete a task by id
 */

router.delete("/tasks/:id", deleteTask)

/**
 * @swagger
 * /tasks:
 * put:
 *  summary. update a task by id
 */

router.put("/tasks/:id", updateTask)

export default router