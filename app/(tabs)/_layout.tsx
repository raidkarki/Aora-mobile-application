import { StyleSheet, Text, View } from 'react-native'
import { Slot,Stack } from 'expo-router'

const rootLayout  = () => {
  return (
  <Stack>
    <Stack.Screen name="index" options={{headerShown:true}} ></Stack.Screen>
  </Stack>
  
)
  
}

export default rootLayout

