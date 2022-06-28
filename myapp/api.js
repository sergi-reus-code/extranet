const API = 'http://192.168.18.5:3001/tasks'   //Riu

//const API = 'http://192.168.1.33:3001/tasks'     //Puigcerdà


export const getTasks = async () => {

   const res = await fetch(API)
 
   return await res.json()
  
}
