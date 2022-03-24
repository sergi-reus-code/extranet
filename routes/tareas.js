var express = require('express');
var router = express.Router();

//const logUtils= require("../DB_Controllers/loginController");

        router.get('/',(req,res) => {

               // Agafar les tareas de SQL i ficar-les amb JSON
               // Pasar jason a EJS - tareas         




                console.log("estoy Tareas");
                var titulo = "TITULO DE index por que me da la gana"
                res.render('./task/tareas', { title: titulo });
            
            
            
            });




    
    
        







module.exports = router;
