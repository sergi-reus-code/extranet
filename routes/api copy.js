var express = require('express');
const { result } = require('lodash');
var router = express.Router();

const Logincontroller= require("../DBcontrollers/Logincontroller");

/* GET home page. */
//router.get('/',Usercontroller.index);
//router.get('/login',Usercontroller.login);


router.get('/',(req,res,next) => {

        //comprovar email
        //comprovar password
        //a la base de dades

        

        console.log(req.headers);

        console.log(req.body.username)

        //res.send('HELLO API')
        res.send("OK GET")
    })

router.post('/',(req,res,next) => {
    //console.log(req.headers);

        const username = req.body.user.name
        const password = req.body.user.password
        console.log(`usuario : ${username} / contraseña : ${password}`);
        //console.log(req.body.user.name);
      
        res.send("OK POST" + username + "/" + password)


        const resultado = resultado_Loguin (user,passrw)




        //conectar base datos i coger ususrio
//var consulta= SELECT * FROM `usuarios` WHERE usuario=`username`AND contraseña=`password`;

var result=mysql_query (conexion,consulta)

var filas= mysql_num_rows (result)

 if (filas) {
     
 } else {
     
 }
 
        //si no existe _> error de no usuari -> ir pagina singup

        //si existe comprovar password = password

        //si es igual ir a indexapp





})

router.post('/upload_file', async (req, res) => {
        try {
            if(!req.files) {
                res.send({
                    status: false,
                    message: 'No file uploaded'
                });
            } else {
                //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
                let avatar = req.files.avatar;
                
                //Use the mv() method to place the file in upload directory (i.e. "uploads")
                avatar.mv('./uploads/' + avatar.name);
    
                //send response
                res.send({
                    status: true,
                    message: 'File is uploaded',
                    data: {
                        name: avatar.name,
                        mimetype: avatar.mimetype,
                        size: avatar.size
                    }
                });
            }
        } catch (err) {
            res.status(500).send(err);
        }
    });




module.exports = router;