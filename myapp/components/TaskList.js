import React from "react";
import { View, Text, FlatList } from "react-native";
import TaskItem from "./TaskItem";


const TaskList = ({ tasks }) => {

    const renderLinia = ({item}) => {


        return <TaskItem tarea={item}></TaskItem>

    }




  return (
    <FlatList
      style={{width:'100%'}}
      data={tasks}
      keyExtractor={(item) => item.id_tarea + ""}
      renderItem = {renderLinia}
    />
  );
};

export default TaskList;
