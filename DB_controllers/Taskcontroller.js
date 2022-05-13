var conexion = require('../config/conexion');


async function listTask(HTMLid_tarea){
  
  

    //const SQL_query = "SELECT * FROM `tareas` WHERE `tareas`.`id_tarea` = " + HTMLid_tarea ;  
    const SQL_query = "SELECT * FROM `tareas` WHERE `tareas`.`id_usuario` = 1" ;
    //const SQL_query = "SELECT * FROM `tareas` WHERE `tareas`.`id_tarea` = 2" ;
    //const SQL_query = "SELECT `tareas`.* FROM `tareas`";

    const result = await conexion.query(SQL_query).catch(err => { throw err}); 

   // console.log(result)  
   
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
  
const SQL_query = "INSERT INTO `tareas`( `titulo_tarea`, `descp_tarea`, `fecha_creacion`, `id_usuario`) VALUES ('[value-2]','[value-3]','2022-03-25','1')";
 

const resultado = await conexion.query(SQL_query).catch(err => { throw err}); 


return resultado






}


async function deleteTask(titulo_tarea, id_usuario){
  

  const result="ok"

  //const SQL_query = "INSERT INTO tareas  (`id_tarea`,`titulo_tarea`, `descp_tarea`, `fecha_creacion`, `id_usuario` ) VALUES ('Levar pintor','Llevar pintor i repasosde obra tartera','2022-02-25','1') ";
  
  
  //const result = await conexion.query(SQL_query).catch(err => { throw err}); 
  
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


