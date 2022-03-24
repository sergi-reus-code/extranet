var express = require('express');
var router = express.Router();

//const logUtils= require("../DB_Controllers/loginController");

        router.get('/',(req,res) => {

               // Agafar les tareas de SQL i ficar-les amb JSON
               // Pasar jason a EJS - tareas         




                console.log("estoy Tareas");
                var titulo = "TITULO DE index por que me da la gana"

                 
  
                //Datos en array de objetos JSON
                var datos = [{
                    
                    id_tarea : "1asdf",
                    TituloTarea : "asdf",
                    Descripción : "asdfas",
                    Fecha : "asdfasd",
                    IdTarea : "dasf"            
                },{
                    
                id_tarea : "2asdf",
                TituloTarea : "2asdf",
                Descripción : "2asdfas",
                Fecha : "2asdfasd",
                IdTarea : "d2asf"            
                }
        
        
        
        
        
        
        ]   


                res.render('./task/tareas', { tareas: datos });
            
            
            
            });




    
    
        







module.exports = router;
