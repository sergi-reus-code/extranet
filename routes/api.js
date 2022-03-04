var express = require('express');
var router = express.Router();

const Usercontroller= require("../controllers/Usercontroller");

/* GET home page. */
//router.get('/',Usercontroller.index);
//router.get('/login',Usercontroller.login);


router.get('/checkuserdata',(req,res,next) => {


        //comprovar email
        //comprovar password
        //a la base de dades

        var headers = req.headers

        //console.log(req.headers);

        //res.send('HELLO API')
        res.send(headers)



})








module.exports = router;
