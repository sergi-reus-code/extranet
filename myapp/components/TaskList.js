import React from "react";
import {View, Text, FlatList} from "react-native"


const TaskList = ({tasks}) => {

console.log(tasks);


return (


<FlatList 
    data={tasks}
    keyExtractor={(item) => item.id_tarea + ""}
    renderItem={({item}) => {
         return (
            <Text> {item.id_tarea + " " + item.titulo_tarea }</Text>

                )
    }} />
    
)

}

export default TaskList