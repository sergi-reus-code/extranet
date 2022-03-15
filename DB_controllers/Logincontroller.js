var conexion = require('../config/conexion');


function newUser(){

  //INSERT INTO `usuarios` (`id_usuario`, `nombre`, `apellidos`, `fecha_creacion`, `username`, `password`, `telf`, `e-mail`) VALUES ('1', 'Sergi', 'Reus Pallarés', '2022-03-15', 'sreus', 'sreuspassword', '649312547', 'sergi@reusconstruccions.com');


}




async function checkUser(HTMLusername, HTMLpassaword){
  //var consulta= SELECT * FROM `usuarios` WHERE usuario=`username`AND contraseña=`password`;
    console.log("eoooooooooooooooo");

    const SQL_query = "SELECT * FROM `usuarios` WHERE `username` = 'sreusd'";   
    //const SQL_query = "SELECT * FROM `usuarios` ";   


    var retorno = "mal"

     conexion.query(SQL_query, function (err, result, fields) {
      if (err) throw err;
      
      
      console.log(result.lenght);


      if (result.lenght == 0) {
          retorno = "badUsername"
      }
      
      
      result.forEach(user => {

        console.log(user);

      });
      
      //console.log(result[0].aa4);
      //console.log(fields)
    
    
    })



    return retorno

}


module.exports = {

  checkUser

}
