var express = require('express');
var router = express.Router();

const logUtils= require("../DB_Controllers/loginController");

      

const tareas = { 
        id_tarea:'',
        titulo_tarea:'',
        descp_tarea :'',
        fecha_creacion:'',
        id_usuario : '',

}

router.get('/',(req,res) => {

                console.log("estoy Tareas");
                var titulo = "TITULO DE index por que me da la gana"
                res.render('./task/tarea', { tareas : tareas });
            
                      });




    
    
        







module.exports = router;
