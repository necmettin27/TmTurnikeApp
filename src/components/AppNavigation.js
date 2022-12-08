import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 

import HomeScreen from "../Screens/HomeScreen";
import SettingsScreen from "../Screens/SettingsScreen"
const Tab = createBottomTabNavigator();

function AppNavigation(){
  return ( 
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator> 
  );
}

export default AppNavigation;