var conexion = require('../config/conexion');

function checkresult (){



}





async function listTask(user){
  
    const SQL_query = "SELECT * FROM `tareas` WHERE `tareas`.`id_usuario` = 1" ;
    const result = await conexion.query(SQL_query).catch(err => { throw err}); 
    return result

}

async function listTaskById(id_tarea){
  
  

  //const SQL_query = "SELECT * FROM `tareas` WHERE `tareas`.`id_tarea` = " + HTMLid_tarea ;  
  //const SQL_query = "SELECT * FROM `tareas` WHERE `tareas`.`id_usuario` = 1" ;
  const SQL_query = "SELECT * FROM `tareas` WHERE `tareas`.`id_tarea` = " + `${id_tarea}` + "" ;
  //const SQL_query = "SELECT `tareas`.* FROM `tareas`";

  const result = await conexion.query(SQL_query).catch(err => { throw err}); 

  
  
 
return result

}





async function createTask(user, titulo_tarea, descp_tarea){
  
const SQL_query = "INSERT INTO `tareas`( `titulo_tarea`, `descp_tarea`, `fecha_creacion`, `id_usuario`, `id_creator`) VALUES ('" + `${titulo_tarea}  `  +"','" + `${descp_tarea}  `  +"','2022-03-25','1','1')";
 

const resultado = await conexion.query(SQL_query).catch(err => { throw err}); 


return resultado






}


async function deleteTask(id_tarea){
  
  console.log(id_tarea);
  

  const SQL_query = `DELETE FROM tareas WHERE tareas.id_tarea = ${id_tarea}`;
  
  
  var result = await conexion.query(SQL_query).catch(err => { throw err}); 
  

  console.log(result);


  result = "ok"


/*

    if (result.length == 0) {
  
      console.log("tot ok");
      
    }
  
    //INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
    //VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');
  
   // console.log(result);
  
  */
  


  return result
  
  
  
  }




  


module.exports = {

  listTask, createTask, listTaskById, deleteTask

}


