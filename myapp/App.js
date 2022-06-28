import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import TaskFormScreen from "./screens/TaskFormScreen";
import TestScreen from "./screens/TestScreen";

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerStyle: { backgroundColor: "#222f3e" },
            headerTitleStyle: { color: "#ffffff" },
            headerRight: () => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("TaskFormScreen");
                  }}
                >
                  <Text>Nueva Tarea</Text>
                </TouchableOpacity>
              );
            },
          })}
        />
        <Stack.Screen name="TaskFormScreen" component={TaskFormScreen} />
        <Stack.Screen name="TestScrenn" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
