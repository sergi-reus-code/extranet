import {connect} from '../database.js' 


export const getTasks = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query ('SELECT * FROM tareas');
     res.json(rows);
  };

export const getTask = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM tareas WHERE id_tarea = ?", [
      req.params.id,
   ])
   res.json(rows[0]); 
};

export const getTaskCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT COUNT(*) FROM tareas" )
  res.json(rows[0]["COUNT(*)"])
};


export const saveTask = (req, res) => {
  const connection = await connect();
  const result = await connection.query("INSERT INTO tareas(id_tarea, titulo_tarea, descp_tarea, fecha_creacion, id_usuario,) VALUES (?,?,?,?,?)", [
      req.body.id_tarea,
      req.body.titulo_tarea,
      req.body.descp_tarea,
      req.body.fecha_creacion,
      req.body.id_usuario

  ])
  console.log(result)
  //res.json(rows[0]); 
};


export const deleteTask = (req, res) => {
  res.send("Hello")
};


export const updateTask = (req, res) => {
  res.send("Hello")
}
