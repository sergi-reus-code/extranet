import {connect} from '../database.js' 


export const getTasks = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query ('SELECT * FROM tareas');
     res.json(rows);
  };

export const getTask = async (req, res) => {
    console.log( req.params.id);
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM tareas WHERE id_tarea = ?", [
      req.params.id
   ])
   res.json(rows[0]); 
};

export const getTaskCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("SELECT COUNT(*) FROM tareas" )
  res.json(rows[0]["COUNT(*)"])
};


export const saveTask = async (req, res) => {
  const connection = await connect();
  const results = await connection.query("INSERT INTO tareas(titulo_tarea, descp_tarea, fecha_creacion, id_usuario,id_creator) VALUES (?,?,?,?,?)", [
      req.body.titulo_tarea,
      req.body.descp_tarea,
      req.body.fecha_creacion,
      req.body.id_usuario,
      req.body.id_creator
  ])

  res.json({
      id: results.insertId,
      ...req.body,
        
  });
};

export const deleteTask = async (req, res) => {
    
    const connection = await connect();
    await connection.query("DELETE FROM tareas WHERE id_tarea = ?", [
      req.params.id,
    ])
    res.sendStatus(204)
};


export const updateTask = async (req, res) => {
   const connection = await connect();
   await connection.query('UPDATE tareas set ? WHERE id_tarea = ?', [
     req.body,
     req.params.id
   ])
  res.sendStatus(204);

}
