import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import {getTasks} from '../api'

const HomeScreen = () => {

  const loadTasks = async () => {
    const data = await getTasks()
    console.log(data)
    }
 
 useEffect(() => { 
  loadTasks()
 }, [])

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  )
}

export default HomeScreen