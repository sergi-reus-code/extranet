import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './screens/HomeScreen'
import TaskFormScreen from './screens/TaskFormScreen'
import TestScreen from './screens/TestScreen'


const Stack = createStackNavigator()
const App = () => { 
    return(
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="TaskFormScrenn" component={TaskFormScreen}/>
            <Stack.Screen name="TestScrenn" component={TestScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      )
}

export default App