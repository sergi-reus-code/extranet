var conexion = require('../config/conexion');




async function readUserData(user){
  
    const SQL_query = "SELECT * FROM `usuarios` WHERE `username` = '"  + `${user}` + "'";   
    const result = await conexion.query(SQL_query).catch(err => { throw err}); 
    return result    

}




module.exports = {

  readUserData

}
