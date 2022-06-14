//const API = 'http://10.0.2.2:3001/tasks'
const API = 'http://127.0.0.1:3001/tasks'

/*
export const getTasks = async () => {
   console.log("hello");
   const res = await fetch(API)
   console.log("hello2");
   return await res.json()
}

*/

export const getTasks = async () => {
   console.log("hello")
   const res = await fetch(API)
   return await res.json()
}
