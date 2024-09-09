import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ title,containerStyle,handlePress,
textStyles,isLoading}) => {
  return (
    <TouchableOpacity 
    
     onPress={handlePress}    
     activeOpacity={0.7}
     className={`bg-secondary 
    rounded-xl min-h-[62px] justify-center items-center
     ${containerStyle} ${isLoading ? 'opacity-50' : 'bg-secondary'}`} 
     disabled={isLoading}
     >
      <Text className="text-primary font-psemibold text-lg ">{title} </Text>
     </TouchableOpacity>
  )
}

export default CustomButton

