var conexion = require('../config/conexion');

function checkResult (resultado_consulta){





console.log(resultado_consulta);


  return "ok"

}





async function listAllTask(id_usuarioHTML){
  

  console.log(id_usuarioHTML);

  //PASAR USER BIEN
  const SQL_query = "SELECT * FROM `tareas` WHERE `tareas`.`id_usuario` = " + `${id_usuarioHTML}` ;
  const result = await conexion.query(SQL_query).catch(err => { throw err}); 

  return (result);

}

async function listTaskById(id_tarea){

  const SQL_query = "SELECT * FROM `tareas` WHERE `tareas`.`id_tarea` = " + `${id_tarea}` + "" ;
  const result = await conexion.query(SQL_query).catch(err => { throw err}); 
  return (result)

}





async function createTask(user, titulo_tarea, descp_tarea){
  
const SQL_query = "INSERT INTO `tareas`( `titulo_tarea`, `descp_tarea`, `fecha_creacion`, `id_usuario`, `id_creator`) VALUES ('" + `${titulo_tarea}  `  +"','" + `${descp_tarea}  `  +"','2022-03-25','1','1')";
 

const result = await conexion.query(SQL_query).catch(err => { throw err}); 


return (result)






}


async function deleteTask(id_tareaHTML){
  
  const SQL_query = `DELETE FROM tareas WHERE id_tarea = ${id_tareaHTML}` ;
  const result = await conexion.query(SQL_query).catch(err => { throw err}); 
  

   


  return ("ok")
  
  
  
  }


  async function updateTask (id_tareaHTML, titulo_tareaHTML, descp_tareaHTML){
  
      console.log(id_tareaHTML);

      console.log(titulo_tareaHTML);

      console.log(descp_tareaHTML);



    //const SQL_query = "UPDATE tareas SET titulo_tarea = " + `${titulo_tareaHTML}` + " , descp_tarea = " + `${descp_tareaHTML}` + " WHERE id_tarea = " + `${id_tareaHTML} `;
    //const SQL_query = "UPDATE tareas SET titulo_tarea = 111 , descp_tarea = bbbb WHERE id_tarea = " + `${id_tareaHTML} `;
    const SQL_query = "UPDATE `tareas` SET `titulo_tarea` = '" + `${titulo_tareaHTML}` +"' , `descp_tarea` = '" + `${descp_tareaHTML}` +"' WHERE `tareas`.`id_tarea` = " + `${id_tareaHTML} ` 
    
    
    console.log(SQL_query);

    const result = await conexion.query(SQL_query).catch(err => { throw err}); 
    
  
     
  
  
    return ("ok")
    
    
    
    }
  
  
  
  

  


module.exports = {

  listAllTask, createTask, listTaskById, deleteTask, updateTask

}


