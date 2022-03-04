var express = require('express');
const req = require('express/lib/request');
var router = express.Router();

const Usercontroller= require("../controllers/Usercontroller");

/* GET home page. */
//router.get('/',Usercontroller.index);


router.get('/',(req,res) => {

    
    var titulo = "TITULO DE index por que me da la gana"
    res.render('./users/signin', { title: titulo });



});



router.get('/login',Usercontroller.login);



module.exports = router;
