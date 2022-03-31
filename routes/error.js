var express = require('express');
var router = express.Router();


/* HOME PAGE */

router.get('/badusername/',function (req,res,next) {

    console.log("estoy en error de bad username");

    var titulo = "TITULO DE index por que me da la gana"
    res.render('./err/error', { title: titulo });

});
router.get('/badpassword',function (req,res,next) {

    console.log("estoy en error de bad password");

    var titulo = "TITULO DE index por que me da la gana"
    //res.render('./err/error', { title: titulo });

});

module.exports = router;
