import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import {Tabs,Redirect} from 'expo-router'
import {icons} from '../../constants'


const TabIcon =({icon,color,name,focused})=>{

  return (
    <View className="items-center justify-center gap-2">
      <Image
      source={icon}
      resizeMode="contain"
      tintColor={color}
      className={`${focused?"w-6 h-6":"w-5 h-5"}`}

      />
      <Text className={`${focused?'font-psemibold':'font-regular'}
      text-xs`} style={{color:color}}>{name}</Text>
    </View>
  )
}

const tabsLayout = () => {
  return (
   <>
    <Tabs
        
        screenOptions={{
          tabBarShowLabel:false,
          tabBarActiveTintColor:'#FFA001',
          tabBarInactiveTintColor:"#CDCDE0",
          tabBarStyle:{
            backgroundColor:"#161622",
            borderTopColor:"#232533",
            height:84
            
          }
        }}
    >
    {
      icons.tabIcons.map((icon,index)=>(
        <Tabs.Screen 
        key={index}
        name={icon.title}
        options={{
          title:icon.title,
          headerShown:false,
          tabBarIcon:({color,focused})=>(
            <TabIcon icon={icon.icon} color={color} name={icon.title} focused={focused}/>
          )
        }}
        />
      ))
    }
    </Tabs>
   </>
  )
}

export default tabsLayout

