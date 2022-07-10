import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Layout from "../components/Layout";
import { saveTask, getTask, updateTask } from "../api";

const TaskFormScreen = ({ navigation, route }) => {
  //viene del elemento padre
  const [task, setTask] = useState({
    titulo_tarea: "",
    descp_tarea: "",
  });

  const [editing, setEditing] = useState(false);

  const handleChange = (name, value) => setTask({ ...task, [name]: value });

  const handleSummit = async () => {
    if (!editing) {
      await saveTask(task);
    } else {
      await updateTask(route.params.id, task);
    }

    navigation.navigate("HomeScreen");
  };

  useEffect(async () => {
    try {
      if (route.params && route.params.id) {
        navigation.setOptions({ headerTitle: "Editar tarea" });
        setEditing(true);
        const task = await getTask(route.params.id);

        setTask({
          titulo_tarea: task.titulo_tarea,
          descp_tarea: task.descp_tarea,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Layout>
      <Text>Task Formsdfasdf</Text>

      <TextInput
        style={style.input}
        placeholder="Escribe titulo"
        placeholderTextColor="#546574"
        onChangeText={(text) => handleChange("titulo_tarea", text)}
        value={task.titulo_tarea}
      />

      <TextInput
        style={style.input}
        placeholder="Escribe descripcion de la tarea"
        placeholderTextColor="#546574"
        onChangeText={(text) => handleChange("descp_tarea", text)}
        value={task.descp_tarea}
      />

      {!editing ? (
        <TouchableOpacity style={style.buttonSave} onPress={handleSummit}>
          <Text style={style.buttonText}>Guardar Tarea</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={style.buttonUpdate} onPress={handleSummit}>
          <Text style={style.buttonText}>Update Tarea</Text>
        </TouchableOpacity>
      )}
    </Layout>
  );
};

const style = StyleSheet.create({
  input: {
    width: "90%",
    marginBottom: 7,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#10ac84",
    height: 35,
    color: "#ffffff",
    padding: 4,
    textAlign: "center",
    borderRadius: 5,
  },
  buttonSave: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#10ac84",
    width: "90%",
  },

  buttonUpdate: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#e58e26",
    width: "90%",
  },

  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  },
});

export default TaskFormScreen;
