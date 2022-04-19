var express = require('express');
var router = express.Router();

const taskUtils= require("../DB_Controllers/Taskcontroller");






const datos_usuario = [
         {
          id_usuario: 1,
          Nombre: 'Sergi',
          apellidos: 'Reus',
          fecha_creacion: "2022-02-24T23:00:00.000Z",
          username: 'sreus',
          password: 'sreuspassword',
          rol: 'master',
          telf: '690849407',
          email: 'sreus@reuscontruccions.com'
        }
      ]



/*var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];*/

router.get('/',async function (req,res,next) {

        const datos_tareas = await taskUtils.listTask("sreus")
        

                console.log("estoy Tareas");
                var titulo = "TITULO DE index por que me da la gana"
                res.render('./task/tarea', { tareas : datos_tareas,
                                             usuario : datos_usuario });

                
            
                      });




    
    
        







module.exports = router;