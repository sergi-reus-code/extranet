var express = require('express');
var router = express.Router();

const Usercontroller= require("../controllers/Usercontroller");

/* GET home page. */
//router.get('/',Usercontroller.index);
//router.get('/login',Usercontroller.login);


router.get('/',(req,res,next) => {

        //console.log(req.headers);

        res.send('HELLO TAREAS')



})








module.exports = router;
