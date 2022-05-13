var express = require("express");
var router = express.Router();

const taskUtils = require("../DB_Controllers/Taskcontroller");
const userUtils = require("../DB_Controllers/Usercontroller");



/**
 * PAGINA PRINCIPAL TAREAS - cRud - READ
 */

router.get("/", async function (req, res, next) {

  //To access GET variable use req.query() and req.params() methods.
  
  const user = req.query.user;
   
  const datos_tareas = await taskUtils.listTask(user);

  const datos_usuario = await userUtils.readUserData(user);

  console.log(datos_usuario);


  res.render("./task/tarea", { tareas: datos_tareas, usuario: datos_usuario });
  
});



//-----------------------------------------------



/**
 * CREAR TAREA METODO GET - Crud - CREATE
 */

router.get("/crear", async function (req, res, next) {
  
  res.render("./task/crear");

});


// CREAR TAREA METODO POST - Crud - CREATE

router.post("/crear", async function (req, res, next) {

//Agafar el camps be i amb el nom que toca

const user = req.query.user;

const titulo_tarea = req.body.tarea.titulo_tarea
const descp_tarea = req.body.tarea.descp_tarea

console.log(titulo_tarea + " - " + descp_tarea);


  console.log("putamare");

  var titulo = "TITULO DE index por que me da la gana";

  // si tot ok

  //const datos_tareas = await taskUtils.listTask("sreus");

  

  //var titulo = "TITULO DE index por que me da la gana";
  //res.render("./task/tarea", { tareas: datos_tareas, usuario: datos_usuario });

  res.redirect("../tareas");

});

// EDITAR TAREA METODO GET - crUd - UPDATE

router.get("/edit", async function (req, res, next) {
  res.render("./task/editar");
});


// EDITAR TAREA METODO POST - crUd - UPDATE

router.post("/edit", async function (req, res, next) {
  //rebre username. i l tarea.id
  const username = req.body.user.username.id;
  const tarea_id = req.body.user.tareaid;

  const datos_tareas = await taskUtils.listTask("sreus");

  console.log("estoy Tareas");

  console.log(datos_tareas);

  var titulo = "TITULO DE index por que me da la gana";
  res.render("./task/tarea", { tareas: datos_tareas, usuario: datos_usuario });
});


/**
 * 
 */


// BORRAR TAREA METODO GET - cruD - DELETE

router.get("/delete", async function (req, res, next) {
  console.log("in delete");
  const id_tarea = req.query.idtarea

  console.log(id_tarea);
  
  const datos_tareas = await taskUtils.listTaskById(id_tarea);
  
  res.render("./task/borrar", { tareas: datos_tareas });
});


// BORRAR TAREA METODO POST - cruD - DELETE

router.post("/delete", async function (req, res, next) {
  
  const tarea_id = req.body.user.tareaid;
  const user = req.body.user.tareaid

  const resultado_borrado = await taskUtils.deleteTask(username, tarea_id);

  
  
 res.redirect('/tareas?user='+`${username}`);
 

});

module.exports = router;
