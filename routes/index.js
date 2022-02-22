var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/',function (req,res,next) {
    res.send("Bienvenido a Reus Contruccions ");



});

module.exports = router;
