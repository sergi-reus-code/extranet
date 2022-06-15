//import {connect} from '../database.js' 

export const getTasks = (req, res) => {
   // const [rows] = await connect.query ('SELECT * FROM tareas') 
   // console.log(rows);  
    res.send("Hello from getTasks")
}

export const getTask = (req, res) => {
  res.send("Hello")
}

export const getTaskCount = (req, res) => {
  res.send("Hello")
}


export const saveTask = (req, res) => {
  res.send("Hello")  
}


export const deleteTask = (req, res) => {
  res.send("Hello")
}


export const updateTask = (req, res) => {
  res.send("Hello")
}
