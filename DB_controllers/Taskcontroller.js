const res = require('express/lib/response');
var conexion = require('../config/conexion');


async function listTask(HTMLid_tarea){
  
<<<<<<< HEAD
    //const SQL_query = "SELECT * FROM `tareas` WHERE `tareas` = 1";  

    const SQL_query = "SELECT `tareas`.* FROM `tareas`";

    const result = await conexion.query(SQL_query).catch(err => { throw err}); 

    //console.log(result)  
   
  return result
=======
    const SQL_query = "SELECT * FROM `tareas` WHERE `id_tarea` = '"  + `${HTMLid_tarea}` + "'";   

    const result = await conexion.query(SQL_query).catch(err => { throw err}); 

    console.log(result)  
  
    


    }

    


>>>>>>> c330eaa76409138a37ee7dc66ebc201476aa174b



module.exports = {

  listTask

}


