var mysql= require("mysql")
var con= mysql.createConnection({
         host:'127.0.0.1',
         user: 'root',
         password: '',
         database:'workers'
}
);

con.connect( 
     (err)=>{
        if (!err){
           console.log('Conexión establecida')
        }else{
           console.log('Error de conexión')
           console.log(err);

       }
    }
); 


module.exports  = con;