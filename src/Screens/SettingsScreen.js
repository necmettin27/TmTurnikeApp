import React from "react";
import { View,Text, TouchableOpacity, Alert } from "react-native";   
import { User,Lock } from "../components/icons";
import { useSelector,useDispatch } from "react-redux";
import {selectEmail, selectUserName,selectToken,setSignOut} from "../redux/slices/authSlice";
import { BASE_URL } from "../config";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import PasswordUpdateScreen from "./PasswordUpdateScreen";

const SettingStack = createNativeStackNavigator();

const SettingsScreen = ({navigation}) => { 
    const dispatch = useDispatch();
    const username = useSelector(selectUserName);
    const email = useSelector(selectEmail);
    const token = useSelector(selectToken);
 
    const logout = () => { 
        axios.post(`${BASE_URL}/logout`,{},{
            headers: {Authorization: `Bearer ${token}`}
        })
        .then(function (response) {  
            AsyncStorage.removeItem('userInfo');
            dispatch(setSignOut()); 
        })
        .catch(function (error) {
            Alert.alert("Uyarı",JSON.stringify(error.message)); 
        });
        
    }
    return ( 
        <View className="flex-1 pl-1 pr-2 bg-gray-100">
            <View className="bg-white pt-2 pb-2">
            <Text className="font-semibold text-lg">{username}</Text>
            <Text className="font-semibold text-lg">{email}</Text>
            <Text className="font-semibold text-lg">{token}</Text>
            <Text className="font-semibold text-lg">İzinli Kart Tipleri:</Text>
            <Text className="font-semibold text-lg">ONLINE,VİSİTOR,VİP,BASIN</Text>
            </View>
            <View className="bg-white h-14 mt-3 justify-center">
                <TouchableOpacity className="flex-row" onPress={()=>navigation.navigate('PasswordUpdateScreen')}>
                    <Lock
                        stroke="black"
                    />
                    <Text className="text-black text-base ml-3">Parolamı Değiştir</Text>
                </TouchableOpacity>
            </View> 

            <View className="bg-white h-14 mt-3 justify-center">
                <TouchableOpacity className="flex-row" onPress={()=>logout()}>
                    <User
                        stroke="black"
                    />
                    <Text className="text-black text-base ml-3">Çıkış Yap</Text>
                </TouchableOpacity>
            </View>   
        </View>
    );
} 

function SettingStackScreen(){
    return (
        <SettingStack.Navigator> 
            <SettingStack.Screen options={{title:"Hesabım"}} name="SettingsScreen" component={SettingsScreen} />  
            <SettingStack.Screen options={{title:"Parola Güncelle"}} name="PasswordUpdateScreen" component={PasswordUpdateScreen} />  
        </SettingStack.Navigator>
    );  
}

export default SettingStackScreen;