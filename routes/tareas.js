var express = require('express');
const req = require('express/lib/request');
var router = express.Router();


        router.get('/',(req,res) => {

                console.log("estoy en login");
                var titulo = "TITULO DE index por que me da la gana"
                res.render('./task/tareas', { title: titulo });
            
            
            
            });




    
    
        







module.exports = router;
