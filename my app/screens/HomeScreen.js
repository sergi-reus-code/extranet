import React, {useEffect} from 'react'
import { View, Text } from 'react-native'

const HomeScreen = () => {

  const loadTasks = async () => {
    const res = await fetch('http://10.0.2.2:3001/tasks')
    const data = await res.json()
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