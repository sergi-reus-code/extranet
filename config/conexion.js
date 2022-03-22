var mysql= require("mysql")
const util = require("util"); 

/*
var con= mysql.createConnection({
         host:'127.0.0.1',
         user: 'root',
         password: '',
         database:'EXTRANET_DB'
}
);
*/
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
   database:'extranet_db'
   //sslmode: 'REQUIRED'
}
);

conDO.query = util.promisify(conDO.query).bind(conDO);

conDO.connect( 
(err)=>{
  if (!err){
     console.log('Conexión establecida to Digital Ocean')


    

  }else{
     console.log('Error de conexión to Digital Ocean')
     console.log(err);

 }
}
); 





//module.exports  = con;
module.exports = conDO;

