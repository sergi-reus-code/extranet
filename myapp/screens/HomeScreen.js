import React, {useEffect, useState} from 'react'
import { View, Text, FlatList } from 'react-native'
import {getTasks} from '../api'

const HomeScreen = () => {

  const [tasks, setTasks] = useState ([])

  const loadTasks = async () => {

    const data = await getTasks()
    
    console.log(data);
    setTasks(data) 
 }
 
 useEffect(() => { 
  loadTasks()
 }, [])

  return (
    <View>
    
      <FlatList 
       data={tasks}
       renderItem={() => (
        <Text> hello world</Text>

      )}
      
      />


    
    </View>
  )
}

export default HomeScreen