const API = "http://192.168.18.5:3001/tasks"; //Riu

//const API = 'http://192.168.1.33:3001/tasks'     //Puigcerdà

export const getTasks = async () => {
  const res = await fetch(API);

  return await res.json();
};

export const getTask = async (id) => {
  const res = await fetch(`${API}/${id}`);

  return await res.json();
};



export const saveTask = async (newTask) => {
  console.log("papap");
  console.log(JSON.stringify(newTask));

  const res = await fetch(API, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: "" + JSON.stringify(newTask),
  });

  console.log(res);

  return await res.json();
};


export const updateTask = async (id_tarea, updatedTask) => {
  console.log("papap");
  console.log(JSON.stringify(updatedTask));

  const res = await fetch(`${API}/${id_tarea}`, {
    method: "PUT",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(updatedTask),
  });

  console.log(res);

  return res;
};








export const deleteTask = async (id_tarea) => {
  console.log("delete : " + id_tarea);

  const res = await fetch(`${API}/${id_tarea}`, {
    method: "DELETE"
  });
};
