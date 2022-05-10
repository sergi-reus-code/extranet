var express = require("express");
var router = express.Router();

const taskUtils = require("../DB_Controllers/Taskcontroller");

/*
const datos_usuario = [
  {
    id_usuario: 1,
    Nombre: "Sergi",
    apellidos: "Reus",
    fecha_creacion: "2022-02-24T23:00:00.000Z",
    username: "sreus",
    password: "sreuspassword",
    rol: "master",
    telf: "690849407",
    email: "sreus@reuscontruccions.com",
  },
];*/



// PAGINA PRINCIPAL TAREAS - cRud - READ

router.get("/", async function (req, res, next) {
//To access GET variable use req.query() and req.params() methods.
  console.log("ususario " + req.query.user);

  const user= req.query.user

  const datos_tareas = await taskUtils.listTask(user);

  const datos_usuario = await taskUtils.


  console.log("estoy Tareas");

  var titulo = "TITULO DE index por que me da la gana";
  res.render("./task/tarea", { tareas: datos_tareas, usuario: datos_usuario });
});



// CREAR TAREA METODO GET - Crud - CREATE

router.get("/crear", async function (req, res, next) {
  res.render("./task/crear");
});


// CREAR TAREA METODO POST - Crud - CREATE

router.post("/crear", async function (req, res, next) {
  console.log("pepepeepp");
  console.log(req.body);

console.log(req.body.tarea);

//Agafar el camps be i amb el nom que toca
const titulo_tarea = req.body.user.tarea.titulo_tarea
const descp_tarea = req.body.user.descp_tarea





// alguna funcio per comprovar que tot ok.... 

  //req.body.nombretaria != NULL o NaN



    //const resultado_crear = await taskUtils.createTask("sreus")
  
  
    //segons resultat... pues error o redirect
    
      //switch (resultado) {
      //case "ok":

           //res.redirect('/tareas');//("TODO OK -> : " + Levar pintor + " % Levar pintor: " + Llevar pintor i repasosde obra tartera + "2022-02-25 + "1" existe en la base de datos")
      
      //break;}
  
  //console.log("estoy Tareas");

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
  res.render("./task/borrar");
});


// BORRAR TAREA METODO POST - cruD - DELETE

router.post("/delete", async function (req, res, next) {
  //rebre username. i l tarea.id
  const username = req.body.user.username.id;
  const tarea_id = req.body.user.tareaid;

  const resultado_borrado = await taskUtils.deleteTask(username, tarea_id);

  console.log("estoy Tareas");

  console.log(datos_tareas);

  var titulo = "TITULO DE index por que me da la gana";
  res.render("./task/tarea", { tareas: datos_tareas, usuario: datos_usuario });
});

module.exports = router;
