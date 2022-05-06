var express = require('express');
var router = express.Router();

const logUtils= require("../DB_Controllers/loginController");


/* LOGIN PAGE */
router.get('/',(req,res) => {




    console.log(req.headers);
    var titulo = "TITULO DE index por que me da la gana"
    res.render('./log/signin', { title: titulo });



});




router.post('/', async function (req,res,next)  {
   
        const username = req.body.user.name
        const password = req.body.user.password

        const resultado = await logUtils.checkUser(username, password)

        //console.log(resultado);

        switch (resultado) {
            case "ok":

                 res.redirect('/tareas?user='+`${username}`);
            

            break;
        
            case "badUsername":
             

                 //res.redirect(850,'/error/',"USUARIO NO ENCONTRADO -> Username: " + username + " no existe en la base de datos")
                res.redirect('/error/badusername')

            break;

            case "badPassword":

                //*res.redirect(860,'../error/',"PASSWORD INCORRECTO PARA EL USUARIO -> Username: " + username)
                res.redirect('/error/badpassword')

            break;

            default:

                res.send("TODO MAL -> Username: " + username + " no existe en la base de datos")

            break;
        }

})


module.exports = router;
