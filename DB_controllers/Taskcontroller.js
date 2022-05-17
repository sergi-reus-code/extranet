var conexion = require('../config/conexion');

function checkResult (resultado_consulta){





console.log(resultado_consulta);


  return resultado_consulta

}





async function listAllTask(user){
  
  //PASAR USER BIEN
  const SQL_query = "SELECT * FROM `tareas` WHERE `tareas`.`id_usuario` = 1" ;
  const result = await conexion.query(SQL_query).catch(err => { throw err}); 

  return checkResult(result);

}

async function listTaskById(id_tarea){

  const SQL_query = "SELECT * FROM `tareas` WHERE `tareas`.`id_tarea` = " + `${id_tarea}` + "" ;
  const result = await conexion.query(SQL_query).catch(err => { throw err}); 
  return checkResult(result)

}





async function createTask(user, titulo_tarea, descp_tarea){
  
const SQL_query = "INSERT INTO `tareas`( `titulo_tarea`, `descp_tarea`, `fecha_creacion`, `id_usuario`, `id_creator`) VALUES ('" + `${titulo_tarea}  `  +"','" + `${descp_tarea}  `  +"','2022-03-25','1','1')";
 

const result = await conexion.query(SQL_query).catch(err => { throw err}); 


return checkResult(result)






}


async function deleteTask(id_tarea){
  
  const SQL_query = `DELETE FROM tareas WHERE tareas.id_tarea = ${id_tarea}`;
  const result = await conexion.query(SQL_query).catch(err => { throw err}); 
  

   


  return checkResult(result)
  
  
  
  }




  


module.exports = {

  listAllTask, createTask, listTaskById, deleteTask

}


