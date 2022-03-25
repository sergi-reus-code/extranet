var express = require('express');
var router = express.Router();

const logUtils= require("../DB_Controllers/loginController");

        router.get('/',(req,res) => {

                console.log("estoy Tareas");
                var titulo = "TITULO DE index por que me da la gana"
                res.render('./task/tarea', { title: titulo });
            
                      });




    
    
        







module.exports = router;
