var express = require('express');
var router = express.Router();


/* GET home page. */

router.get('/',function (req,res,next) {

    

    var titulo = "TITULO DE index por que me da la gana"
    res.render('./index', { title: titulo });

});

/*
router.get('/',function (req,res,next) {

    var titulo = "TITULO DE index por que me da la gana"

    console.log("estoy aqui");

    //res.send('../public/signin.html');
    res.render('../public/signin.html')

});

*/
module.exports = router;
