import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from "../Screens/Auth/SplashScreen";
import RegisterScreen from "../Screens/Auth/RegisterScreen";
import LoginScreen from "../Screens/Auth/LoginScreen";

const Stack = createNativeStackNavigator();

function StackNavigation(){
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator>
    );  
}
export default StackNavigation;