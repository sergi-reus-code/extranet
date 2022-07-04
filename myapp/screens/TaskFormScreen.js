import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Layout from "../components/Layout";

const TaskFormScreen = () => {
  return (
    <Layout>
      <Text>Task Formsdfasdf</Text>

      <TextInput
        style={style.input}
        placeholder="Escribe titulo"
        placeholderTextColor="#546574"
      />

      <TextInput
        style={style.input}
        placeholder="Escribe descripcion de la tarea"
        placeholderTextColor="#546574"
      />

      <TouchableOpacity>
        <Text>Guardar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>Guardar</Text>
      </TouchableOpacity>




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
});

export default TaskFormScreen;
