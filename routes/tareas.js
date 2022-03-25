var express = require('express');
var router = express.Router();

//const logUtils= require("../DB_Controllers/loginController");

        router.get('/',(req,res) => {



                var tareas = {
                        id_tarea : "uid",
                        TituloTarea : "sdfsdf",
                        Descripción : "sdsdf",
                        Fecha : "dsdfs",
                        IdTarea : "sdfasdf"    }

                console.log("estoy Tareas");
                //var datos = "RESULTADO CONSULTA SQL"
                res.render('./task/tarea', { tareas: tareas });
            
                      });




    
    
        







module.exports = router;
