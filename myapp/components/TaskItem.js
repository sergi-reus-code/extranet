import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TaskItem = ({ tarea, handleDelete }) => {

  const navigation = useNavigation();  //para poder tener el navigation.navigate


  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={()=> navigation.navigate('TaskFormScreen', {id: tarea.id_tarea })}>
        <Text style={styles.itemTitle}>{tarea.titulo_tarea}</Text>
        <Text style={styles.itemTitle}>{tarea.descp_tarea}</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.deleteButton}
      onPress={()=> handleDelete(tarea.id_tarea)}
      >
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#333333",
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  itemTitle: {
    color: "#ffffff",
  },

  deleteButton: {
    backgroundColor: "#ee5253",
    padding: 7,
    borderRadius: 5,
  },
});

export default TaskItem;
