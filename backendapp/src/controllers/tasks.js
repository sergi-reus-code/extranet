import connect from '../database.js' 


async function pepe ()  {

  const [rows] = await connect.query ('SELECT * FROM tareas') 

  console.log(rows);

return rows
}




export const getTasks = (req, res) => {
   res = pepe()
    console.log(rows);  
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
