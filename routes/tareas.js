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

  res.render("./task/tarea", { tareas: datos_tareas, usuario: datos_usuario });
  
});


//-----------------------------------------------



/**
 * CREAR TAREA METODO GET - Crud - CREATE
 */

router.get("/crear", async function (req, res, next) {
  
  const user = req.query

  res.render("./task/crear", {user: user});

});


// CREAR TAREA METODO POST - Crud - CREATE

router.post("/crear", async function (req, res, next) {

  const user = req.body.tarea.username
  const titulo_tarea = req.body.tarea.titulo_tarea
  const descp_tarea = req.body.tarea.descp_tarea

  //console.log(req.body.tarea);

  var resultado_crear = await taskUtils.createTask(user, titulo_tarea, descp_tarea);

  
  console.log(resultado_crear);


resultado_crear ="ok"

  if (resultado_crear ==="ok") {

    res.redirect('/tareas?user='  + `${req.body.tarea.username}`);

  } else {
    
    res.redirect('/error');

  }

 

});

// EDITAR TAREA METODO GET - crUd - UPDATE


router.get("/update", async function (req, res, next) {
  console.log("in get update");
  const id_tarea = req.query.idtarea
  const username = req.query.username

  console.log(id_tarea);
  console.log(username);

  const datos_tarea = await taskUtils.listTaskById(id_tarea);
  
  const datos_usuario = [{user:`${username}`}]
  console.log("estoy en get");
  console.log(datos_tarea);

  res.render("./task/editar", { tareas: datos_tarea, user: datos_usuario });
});


// BORRAR TAREA METODO POST - cruD - DELETE

router.post("/update", async function (req, res, next) {
  
  console.log("estoy en post update");

  console.log(req.body.datos_tarea.titulo_tarea);
  console.log(req.body.datos_tarea.descp_tarea);
  console.log(req.body.datos_tarea.id_tarea);
  
  console.log(req.body.datos_tarea.username);

  //const resultado_borrado = await taskUtils.uploadTask(req.body.datos_tarea.id_tarea);
  const resultado_borrado = "ok"


  console.log(resultado_borrado);
  
  if (resultado_borrado ==="ok") {

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
  console.log("in delete");
  const id_tarea = req.query.idtarea
  const username = req.query.username

  console.log(id_tarea);
  console.log(username);

  const datos_tarea = await taskUtils.listTaskById(id_tarea);
  
  const datos_usuario = [{user:`${username}`}]
  console.log("estoy en get");
  console.log(datos_tarea);

  res.render("./task/borrar", { tareas: datos_tarea, user: datos_usuario });
});


// BORRAR TAREA METODO POST - cruD - DELETE

router.post("/delete", async function (req, res, next) {
  
  console.log("estoy en post deleta");

  console.log(req.body.datos_tarea.titulo_tarea);
  console.log(req.body.datos_tarea.descp_tarea);
  console.log(req.body.datos_tarea.id_tarea);
  
  console.log(req.body.datos_tarea.username);

  const resultado_borrado = await taskUtils.deleteTask(req.body.datos_tarea.id_tarea);

  console.log(resultado_borrado);
  
  if (resultado_borrado ==="ok") {

    res.redirect('/tareas?user='  + `${req.body.datos_tarea.username}`);

  } else {
    
    res.redirect('/error');

  }
 
 
 
 
  
 

});

module.exports = router;
