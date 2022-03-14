var mysql= require("mysql")
var con= mysql.createConnection({
         host:'127.0.0.1',
         user: 'root',
         password: '',
         database:'EXTRANET_DB'
}
);

/*
con.connect( 
     (err)=>{
        if (!err){
           console.log('Conexión establecida to Localhost')
        }else{
           console.log('Error de conexión Localhost')
           console.log(err);

       }
    }
); 


*/




var conDO= mysql.createConnection({
   host:'db-mysql-ams3-37392-do-user-10958994-0.b.db.ondigitalocean.com',
   port: 25060,
   user: 'node_user',
   password: 'xfL2FewBsBKY6Tpu',
   database:'EXTRANET_DB'
   //sslmode: 'REQUIRED'
}
);

conDO.connect( 
(err)=>{
  if (!err){
     console.log('Conexión establecida to Digital Ocean')


     
     
      conDO.query("CREATE TABLE `usuarios` (`id_usuario` int(11) NOT NULL,`nombre` varchar(100) NOT NULL,`apellidos` varchar(100) NOT NULL,`fecha_creacion` date NOT NULL,`username` varchar(100) NOT NULL,`password` varchar(100) NOT NULL,`telf` varchar(100) NOT NULL,`email` varchar(100) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", (data)=>{

         console.log(data);

      })



  }else{
     console.log('Error de conexión to Digital Ocean')
     console.log(err);

 }
}
); 





module.exports  = con;
module.exports = conDO;

