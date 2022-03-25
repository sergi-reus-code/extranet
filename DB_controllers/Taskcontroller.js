const res = require('express/lib/response');
var conexion = require('../config/conexion');


async function listTask(HTMLusername){
  
    const SQL_query = "SELECT * FROM `tareas` WHERE `tareas` = '"  + `${HTMLtareas}` + "'";   

    const result = await conexion.query(SQL_query).catch(err => { throw err}); 

    console.log(result)  
   
  return "tareas"

}


module.exports = {

  listTask

}


