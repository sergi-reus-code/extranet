const API = 'http://localhost:3001/tasks'



export const getTasks = async () => {
   console.log("hello")
   const res = await fetch(API, {
      method: 'GET',
      //headers: new Headers({ 'Content-type': 'application/json'}),
      mode: 'cors'
})

   console.log("pepep" + res);
   console.log(res);
   //return await res.json()
   return await res
}
