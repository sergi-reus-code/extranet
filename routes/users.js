var express = require('express');
var router = express.Router();

const Usercontroller= require("../controllers/Usercontroller");

/* GET home page. */
router.get('/',Usercontroller.index);
router.get('/login',Usercontroller.login);



module.exports = router;
