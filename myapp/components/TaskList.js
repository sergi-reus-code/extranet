import React, { useState, useEffect } from "react";
import { FlatList, RefreshControl } from "react-native";

import { useIsFocused } from "@react-navigation/native";

import TaskItem from "./TaskItem";
import { getTasks , deleteTask} from "../api";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {

    loadTasks();
  }, [isFocused]);


  const handleDelete = async (id) => {
    await deleteTask(id)
    await loadTasks()
  }

  const renderLinia = ({ item }) => {
    return <TaskItem tarea={item} handleDelete={handleDelete}></TaskItem>;
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await loadTasks();
    setRefreshing(false);
  });

  return (
    <FlatList
      style={{ width: "100%" }}
      data={tasks}
      keyExtractor={(item) => item.id_tarea + ""}
      renderItem={renderLinia}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={["#78e08f"]}
          progressBackgroundColor="#0a3d62"
        />
      }
    />
  );
};

export default TaskList;
