import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 

import HomeScreen from "../Screens/HomeScreen";
import SettingStackScreen from "../Screens/SettingsScreen"
const Tab = createBottomTabNavigator();

function AppNavigation(){
  return ( 
      <Tab.Navigator>
        <Tab.Screen name="Anasayfa" component={HomeScreen} />
        <Tab.Screen name="Arama" component={HomeScreen} />
        <Tab.Screen options={{headerShown:false}} name="Hesabım" component={SettingStackScreen} />
      </Tab.Navigator> 
  );
}

export default AppNavigation;