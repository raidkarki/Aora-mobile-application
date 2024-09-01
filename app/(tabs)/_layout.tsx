import { StyleSheet, Text, View } from 'react-native'
import { Slot,Stack } from 'expo-router'

const rootLayout  = () => {
  return ( <>  
    
    <Text>Root Layout</Text>
    <Slot/>
    <Text>Footer</Text></>)
   
  


  
}

export default rootLayout

