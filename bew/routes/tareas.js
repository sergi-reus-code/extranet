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
  
  const datos_usuario = await userUtils.readUserData(user);
  
  const datos_tareas = await taskUtils.listAllTask(datos_usuario[0].id_usuario);

  res.render("./task/tarea", { tareas: datos_tareas, usuario: datos_usuario });
  
});


//-----------------------------------------------



/**
 * CREAR TAREA METODO GET - Crud - CREATE
 */

router.get("/crear", async function (req, res, next) {
  
  const user = req.query

  console.log("wwww");

  console.log(user);

  res.render("./task/crear", {user: user});

});


// CREAR TAREA METODO POST - Crud - CREATE

router.post("/crear", async function (req, res, next) {


  console.log(req.body);


  const user = req.body.tarea.username
  const id_user = req.body.tarea.id_usuario
  const titulo_tarea = req.body.tarea.titulo_tarea
  const descp_tarea = req.body.tarea.descp_tarea

  

  var resultado_crear = await taskUtils.createTask(id_user, titulo_tarea, descp_tarea);

  
  


resultado_crear ="ok"

  if (resultado_crear ==="ok") {

    res.redirect('/tareas?user='  + `${req.body.tarea.username}`);

  } else {
    
    res.redirect('/error');

  }

 

});

// EDITAR TAREA METODO GET - crUd - UPDATE


router.get("/update", async function (req, res, next) {
 
  const id_tarea = req.query.idtarea
  const username = req.query.username

  

  const datos_tarea = await taskUtils.listTaskById(id_tarea);
  
  const datos_usuario = [{user:`${username}`}]


  res.render("./task/editar", { tareas: datos_tarea, user: datos_usuario });
});


// BORRAR TAREA METODO POST - cruD - DELETE

router.post("/update", async function (req, res, next) {
  


  const resultado_update = await taskUtils.updateTask(req.body.datos_tarea.id_tarea, req.body.datos_tarea.titulo_tarea, req.body.datos_tarea.descp_tarea);
  //const resultado_update = "ok"



  
  if (resultado_update ==="ok") {

    res.redirect('/tareas?user='  + `${req.body.datos_tarea.username}`);

  } else {
    
    res.redirect('/error');

  }
 
 
 
 
  
 

});



/**
 * 
 */


// BORRAR TAREA METODO GET - cruD - DELETE

router.get("/delete", async function (req, res, next) {

  const id_tarea = req.query.idtarea
  const username = req.query.username



  const datos_tarea = await taskUtils.listTaskById(id_tarea);
  
  const datos_usuario = [{user:`${username}`}]


  res.render("./task/borrar", { tareas: datos_tarea, user: datos_usuario });
});


// BORRAR TAREA METODO POST - cruD - DELETE

router.post("/delete", async function (req, res, next) {
  


  const resultado_borrado = await taskUtils.deleteTask(req.body.datos_tarea.id_tarea);

 
  
  if (resultado_borrado ==="ok") {

    res.redirect('/tareas?user='  + `${req.body.datos_tarea.username}`);

  } else {
    
    res.redirect('/error');

  }
 
 
 
 
  
 

});

module.exports = router;
