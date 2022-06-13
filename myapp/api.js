//const API = 'http://10.0.2.2:3001/tasks'
const API = 'http://192.168.18.5:3001/tasks'

/*
export const getTasks = async () => {
   console.log("hello");
   const res = await fetch(API)
   console.log("hello2");
   return await res.json()
}

*/

export const getTasks = async () => {
   console.log("hello");
   const res = await fetch(API, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*'
      }
    })
   console.log("hello2");
   return await res.json()
}
