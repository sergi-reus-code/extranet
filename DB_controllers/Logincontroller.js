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
  
    console.log(`user: ${HTMLusername}    pass: ${HTMLpassaword}`);

    const SQL_query = "SELECT * FROM `usuarios` WHERE `username` = '"  + `${HTMLusername}` + "'";   

    const result = await conexion.query(SQL_query).catch(err => { throw err}); 

  
    if (result.length = 0) {
      
        console.log("Usuario no encontrado");
        retorno = "badUsername"

    } else {
      
      DBpassword = result[0].password

      if (DBpassword = HTMLpassaword ) {
  
        console.log("Usuario/Password correctos");
        retorno = "ok"
        
      } else {


        console.log("Password incorrecto");
        retorno = "badPassword"

      }


    }
  

      
      
     
      
      console.log(result.length);
      

     return retorno


    
   


    

}


module.exports = {

  checkUser

}
