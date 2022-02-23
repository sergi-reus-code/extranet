var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/',function (req,res,next) {

    var titulo = "TITULO DE index"
    res.render('./index', { title: "titulo" });



});

module.exports = router;
