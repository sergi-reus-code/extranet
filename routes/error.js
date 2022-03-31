var express = require('express');
var router = express.Router();


/* HOME PAGE */

router.get('/',function (req,res,next) {

    var titulo = "TITULO DE index por que me da la gana"
    res.render('./err/error', { title: titulo });

});


module.exports = router;
