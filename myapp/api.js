const API = 'http://192.168.18.5:3001/tasks'

//const API = 'http://192.168.1.33:3001/tasks'


export const getTasks = async () => {

   const res = await fetch(API)
 
   return await res.json()
  
}
