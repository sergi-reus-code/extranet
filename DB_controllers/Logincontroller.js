var conexion = require('../config/conexion');








async function checkUser(HTMLusername, HTMLpassword){
  
  

  const SQL_query = "SELECT * FROM `usuarios` WHERE `username` = '"  + `${HTMLusername}` + "'";   
  const result = await conexion.query(SQL_query).catch(err => { throw err}); 

  


  if (result.length == 1) {
 
    var DBpassword = result[0].password

    if (DBpassword == HTMLpassword) {

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
