var express = require('express');
const req = require('express/lib/request');
var router = express.Router();



router.get('/',(req,res,next) => {

        //console.log(req.headers);

        res.send(req.headers)



})


router.get('/pepepe',(req,res) => {

        


})





module.exports = router;
