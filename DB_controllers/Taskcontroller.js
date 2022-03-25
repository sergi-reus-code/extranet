const res = require('express/lib/response');
var conexion = require('../config/conexion');


async function listTask(HTMLusername){
  
    const SQL_query = "SELECT * FROM `tareas` WHERE `tareas` = '"  + `${HTMLusername}` + "'";   

    const result = await conexion.query(SQL_query).catch(err => { throw err}); 

    console.log(result)




   // return result

    

}


module.exports = {

  checkUser

}


