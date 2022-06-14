const API = 'http://localhost:3001/tasks'



export const getTasks = async () => {
   console.log("hello")
   const res = await fetch(API, {
      method: 'GET',
      //headers: new Headers({ 'Content-type': 'application/json'}),
      mode: 'no-cors'
})

   console.log(res);
   return await res.json()
}
