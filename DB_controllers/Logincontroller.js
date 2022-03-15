var conexion = require('../config/conexion');


function checkUser(HTMLusername, HTMLpassaword){
  //var consulta= SELECT * FROM `usuarios` WHERE usuario=`username`AND contraseña=`password`;
    console.log("eoooooooooooooooo");


    conexion.query("SELECT * FROM `usuarios` ", function (err, result, fields) {
      if (err) throw err;
      
      result.forEach(user => {

        console.log(user);

      });
      
      //console.log(result[0].aa4);
      //console.log(fields)
    
    
    })



    return "pepeepep"

}


module.exports = {

  checkUser

}
