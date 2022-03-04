var express = require('express');
const req = require('express/lib/request');
var router = express.Router();

const Usercontroller= require("../controllers/Usercontroller");

/* GET home page. */
//router.get('/',Usercontroller.index);


router.get('/',(req,res) => {

    




});



router.get('/login',Usercontroller.login);



module.exports = router;
