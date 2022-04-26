const res = require('express/lib/response');
var conexion = require('../config/conexion');


async function listTask(HTMLid_tarea){
  
  
    HTMLid_tarea = 2;

    const SQL_query = "SELECT * FROM `tareas` WHERE `tareas`.`id_tarea` = " + HTMLid_tarea ;  
    //const SQL_query = "SELECT * FROM `tareas` WHERE `tareas`.`id_tarea` = 2" ;
    //const SQL_query = "SELECT `tareas`.* FROM `tareas`";

    const result = await conexion.query(SQL_query).catch(err => { throw err}); 

   // console.log(result)  
   
  return result

}

async function createTask(titulo_tarea, id_usuario){
  
const SQL_query = "INSERT INTO tareas ( titulo_tarea, descp_tarea, fecha_creacion, id_usuario ) values (?,?,?,?) "  ;  
 
return result



}





module.exports = {

  listTask, deleteTask

}


