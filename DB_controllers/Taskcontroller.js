const res = require('express/lib/response');
var conexion = require('../config/conexion');


async function taskUser(HTMLusername, HTMLpassaword){
  
    const SQL_query = "SELECT * FROM `tareas` WHERE `tareas` = '"  + `${HTMLusername}` + "'";   

    const result = await conexion.query(SQL_query).catch(err => { throw err}); 

    console.log(result)

    

    if (result.length == 1) {
      
      var DBpassword = result[0].password

      if (DBpassword == HTMLpassaword) {

        //console.log("son iguales!!!!");
        
        return "ok"
        
      } else {

          //console.log("password no coinciden");
          
          return "badPassword"

      }

    } else {

      //console.log("usuario no coincide");
      
      return "badUsername"


    }

    

}


module.exports = {

  checkUser

}


