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

// cRud

router.get('/',async function (req,res,next) {

        const datos_tareas = await taskUtils.listTask("sreus")
        

                console.log("estoy Tareas");

                console.log(datos_tareas);
        
                var titulo = "TITULO DE index por que me da la gana"
                res.render('./task/tarea', { tareas : datos_tareas,
                                             usuario : datos_usuario });

                
            
                      });


  // Crud           
router.post('/crear',async function (req,res,next) {

                        const datos_tareas = await taskUtils.listTask("sreus")
                        
                
                                console.log("estoy Tareas");
                
                                console.log(datos_tareas);
                        
                                var titulo = "TITULO DE index por que me da la gana"
                                res.render('./task/crear', );
                
                                
                            
                                      });

// crUd

router.post('/',async function (req,res,next) {

        const datos_tareas = await taskUtils.listTask("sreus")
        

                console.log("estoy Tareas");

                console.log(datos_tareas);
        
                var titulo = "TITULO DE index por que me da la gana"
                res.render('./task/tarea', { tareas : datos_tareas,
                                             usuario : datos_usuario });

                
            
                      });
                                      
                
// cruD
router.post('/',async function (req,res,next) {

        //rebre username. i l tarea.id        
        const username = req.body.user.username.id
        const tarea_id = req.body.user.tareaid

        const resultado_borrado = await taskUtils.deleteTask(username,tarea_id)
        

                console.log("estoy Tareas");

                console.log(datos_tareas);
        
                var titulo = "TITULO DE index por que me da la gana"
                res.render('./task/tarea', { tareas : datos_tareas,
                                             usuario : datos_usuario });

                
            
                      });

module.exports = router;