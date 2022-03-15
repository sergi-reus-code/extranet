var express = require('express');
const req = require('express/lib/request');
var router = express.Router();

const Usercontroller= require("../DBcontrollers/Usercontroller");

/* GET home page. */
//router.get('/',Usercontroller.index);
//router.get('/login',Usercontroller.login);


router.get('/',(req,res,next) => {

        //console.log(req.headers);

        res.send(req.headers)



})


router.get('/pepepe',(req,res) => {

        


})





module.exports = router;
