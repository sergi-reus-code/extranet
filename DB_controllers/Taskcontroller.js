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

async function deleteTask(username, tarea_id){
  
  
  HTMLid_tarea = 2;

  const SQL_query = "SELECT * FROM `tareas` WHERE `tareas`.`id_tarea` = " + HTMLid_tarea ;  
  //const SQL_query = "SELECT * FROM `tareas` WHERE `tareas`.`id_tarea` = 2" ;
  //const SQL_query = "SELECT `tareas`.* FROM `tareas`";

  const result = await conexion.query(SQL_query).catch(err => { throw err}); 

 // console.log(result)  
 
return result

}





module.exports = {

  listTask, deleteTask

}


