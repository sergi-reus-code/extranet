const res = require('express/lib/response');
var conexion = require('../config/conexion');


async function listTask(HTMLid_tarea){
  
    const SQL_query = "SELECT * FROM `tareas` WHERE `id_tarea` = '"  + `${HTMLid_tarea}` + "'";   

    const result = await conexion.query(SQL_query).catch(err => { throw err}); 

    console.log(result)  
  
    


    }

    





module.exports = {

  listTask

}


