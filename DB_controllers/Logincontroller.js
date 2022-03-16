var conexion = require('../config/conexion');


function newUser(){

  //INSERT INTO `usuarios` (`id_usuario`, `nombre`, `apellidos`, `fecha_creacion`, `username`, `password`, `telf`, `e-mail`) VALUES ('1', 'Sergi', 'Reus Pallarés', '2022-03-15', 'sreus', 'sreuspassword', '649312547', 'sergi@reusconstruccions.com');


}



 async function syncQuery (SQL_query) {

  var resultados 


  

   const rr =  conexion.query(SQL_query,  function (err, result, fields) {
    if (err) throw err;
      resultados = result
  })

    
    console.log(rr);

  
}






async function checkUser(HTMLusername, HTMLpassaword){
  //var consulta= SELECT * FROM `usuarios` WHERE usuario=`username`AND contraseña=`password`;
    console.log(`user: ${HTMLusername}    pass: ${HTMLpassaword}`);

    const SQL_query = "SELECT * FROM `usuarios` WHERE `username` = '"  + `${HTMLusername}` + "'";   
    
    //const tt = syncQuery(SQL_query)

    var tt = ""

    conexion.query(SQL_query,  async function (err, result, fields) {
      if (err) throw err;

        console.log(result);
        tt = result

    })
  

    
    console.log(tt);





/*


    var retorno = ""

    conexion.query(SQL_query, function (err, result, fields) {
      if (err) throw err;
      
      
      if (result.length == 0) {
          retorno = "badUsername"
      }

      

      console.log(result);

      if (result.lenght == 1) {
          retorno = "ok"
      }
      
     
      result.forEach(user => {

        console.log(user);

      });
      
      //console.log(result[0].aa4);
      //console.log(fields)
    

      console.log("wewer" + retorno);
      return retorno


    
    })*/


    

}


module.exports = {

  checkUser

}
