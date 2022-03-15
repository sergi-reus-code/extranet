var express = require('express');
var router = express.Router();

const loginUtils= require("../DB_Controllers/loginController");

router.get('/',(req,res) => {

    console.log("esoy en login");
    var titulo = "TITULO DE index por que me da la gana"
    res.render('./login/signin', { title: titulo });



});


router.post('/',(req,res,next) => {
   
   
    console.log("estoy en req.headers");

        const username = req.body.user.name
        const password = req.body.user.password

        const result = loginUtils.checkUser(username, password)

    


        console.log(`usuario : ${username} / contraseña : ${password}`);
        //console.log(req.body.user.name);
      
        res.send("OK POST" + username + "/" + password)


        //const resultado = resultado_Loguin (user,passrw)




        //conectar base datos i coger ususrio
//var consulta= SELECT * FROM `usuarios` WHERE usuario=`username`AND contraseña=`password`;

//var result=mysql_query (conexion,consulta)

//var filas= mysql_num_rows (result)

 
 
        //si no existe _> error de no usuari -> ir pagina singup

        //si existe comprovar password = password

        //si es igual ir a indexapp





})




router.get('/testDO',(req,res) => {

    

    
    var titulo = "TITULO DE index por que me da la gana"
    res.render('.login/signin', { title: titulo });



});

module.exports = router;
