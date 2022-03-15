var express = require('express');
var router = express.Router();

const loginUtils= require("../DB_Controllers/loginController");


/* LOGIN PAGE */
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

        console.log(result);

        switch (result) {
            case "ok":

                res.send("TODO OK -> Username: " + username + " % password: " + password + " existe en la base de datos")
            
            break;
        
            case "badUsername":
                
                res.send("USUARIO NO ENCONTRADO -> Username: " + username + " no existe en la base de datos")

            break;

            case "badPassword":

                res.send("PASSWORD INCORRECTO PARA EL USUARIO -> Username: " + username)
            
            break;

            default:

                res.send("TODO MAL -> Username: " + username + " no existe en la base de datos")

            break;
        }

})


module.exports = router;
