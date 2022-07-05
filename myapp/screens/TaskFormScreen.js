import React , {useState}from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Layout from "../components/Layout";

const TaskFormScreen = () => {

    const [task, setTask] = useState({
      titulo_tarea: '',
      descp_tarea: ''
    })


    const handleChange = (name, value) => setTask({...task, [name]:value})    

  




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
        onChangeText={text => console.log(text)}
      />

      <TouchableOpacity style={style.buttonSave}>
        <Text style={style.buttonText}>Guardar Tarea</Text>
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
  buttonSave: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#10ac84",
    width: '90%'
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center"    

    



  }






});

export default TaskFormScreen;
