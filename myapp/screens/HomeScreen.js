import React, {useEffect, useState} from 'react'
import { View, Text, flatlist } from 'react-native'
import {getTasks} from '../api'

const HomeScreen = () => {

  const [tasks, setTasks] = useState ([])

  const loadTasks = async () => {
    const data = await getTasks()
    console.log(data)
    }
 
 useEffect(() => { 
  loadTasks()
 }, [])

  return (
    <View>
      <Text>Homew</Text>
    </View>
  )
}

export default HomeScreen