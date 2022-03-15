

var express = require('express');
//const req = require('express/lib/request');
var router = express.Router();

const Usercontroller= require("../DBcontrollers/Usercontroller");




/* GET home page. */
//router.get('/',Usercontroller.index);


router.get('/',(req,res) => {

    console.log("ASDFASDFASDF");
    var titulo = "TITULO DE index por que me da la gana"
    //res.render('./users/signin', { title: titulo });



});



router.get('/login',Usercontroller.login);



router.get('/testDO',(req,res) => {

    console.log("aasdfasdf");

    
    var titulo = "TITULO DE index por que me da la gana"
    res.render('.login/signin', { title: titulo });



});

module.exports = router;
