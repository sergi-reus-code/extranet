var express = require('express');
var router = express.Router();

const listTask= require("../DB_Controllers/Taskcontroller");

      

const datos = [{ 
        id_tarea:'1',
        titulo_tarea:'1',
        descp_tarea :'1',
        fecha_creacion:'1',
        id_usuario : '1'},{
                id_tarea:'2',
                titulo_tarea:'2',
                descp_tarea :'2',
                fecha_creacion:'2',
                id_usuario : '2'
        }]





/*var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];*/

router.get('/',(req,res) => {

                console.log("estoy Tareas");
                var titulo = "TITULO DE index por que me da la gana"
                res.render('./task/tarea', { tareas : datos });

                
            
                      });




    
    
        







module.exports = router;
