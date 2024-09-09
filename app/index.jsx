import { Text,View,Image,ScrollView, Button } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '@/constants';
import CustomButton from '@/components/CustomButton';


export default function App() {
  return (
  
    
   <SafeAreaView className="bg-primary h-full">
     <ScrollView contentContainerStyle={{height: "100%"}}>

     <View className="w-full items-center h-full px-4">
          <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode='contain' />
          <Image source={images.onboarding} className="w-[375px] h-[298px]  " resizeMode='contain' />
          <View className="relative mt-5">
          <Text className="text-3xl font-bold text-white text-center ">
          Discover Endless Possibilities with{" "}
          <Text className="text-secondary-200">Aora</Text>
          </Text>
          <Image source={images.path} className="w-[136px] h-[12px] absolute -bottom-1 -right-8" resizeMode='contain'/>
           

          </View>
          <Text className="text-gray-100 text-center mt-6 ">Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora</Text>

          <CustomButton 
            title="Continue with Email"
            handelPress={() => console.log('Email')}
            containerStyle="w-full mt-7 "
          />
          
     </View>
       
     </ScrollView>

    </SafeAreaView>
  );
}

