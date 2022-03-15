

var express = require('express');
//const req = require('express/lib/request');
var router = express.Router();

const Usercontroller= require("../DBcontrollers/Logincontroller");




/* GET home page. */
//router.get('/',Usercontroller.index);


router.get('/',(req,res) => {

    console.log("");
    var titulo = "TITULO DE index por que me da la gana"
    res.render('./login/signin', { title: titulo });



});



router.get('/login',Usercontroller.login);



router.get('/testDO',(req,res) => {

    

    
    var titulo = "TITULO DE index por que me da la gana"
    res.render('.login/signin', { title: titulo });



});

module.exports = router;
