var express = require('express');
var router = express.Router();

const multer  = require('multer')

const Usercontroller= require("../controllers/Usercontroller");

/* GET home page. */
//router.get('/',Usercontroller.index);
//router.get('/login',Usercontroller.login);


router.get('/upload_file',(req,res,next) => {

        //comprovar email
        //comprovar password
        //a la base de dades

        var headers = req.headers

        console.log(req.headers);

        //res.send('HELLO API')
        res.send("OK")
})

router.post('/upload_file',(req,res,next) => {

        

        var headers = req.headers

        console.log(req.headers.rodrigo);

        //res.send('HELLO API')
        res.send("OK")
})






module.exports = router;
