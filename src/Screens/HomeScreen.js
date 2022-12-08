import React, { useState } from "react";
import { View,Text, TextInput, TouchableOpacity, Alert } from "react-native"; 
import { useSelector } from "react-redux";
import {selectEmail, selectUserName} from "../redux/slices/authSlice";
import LinearGradient from 'react-native-linear-gradient';
import {Search} from "../components/icons"
const HomeScreen = () => { 
    const [data,setData] = useState({
        searchText : '', 
        loading:false,
    });

    const searchTextChange = (val) => {
        setData({
            ...data,
            searchText: val
        })
    }

    const searchHandle = () => {
        setData({
            ...data,
            loading:true
        })
        if(data.searchText.length>3){
            Alert.alert(data.searchText);
            setData({
                ...data,
                loading:false
            })
        }else{
            Alert.alert("Lütfen arama alanı en az 3 karakter yazınız.");
            setData({
                ...data,
                loading:false
            })
        }
    }

    return (
        <View className="flex-1 items-center pl-1 pr-2">
            <View className="mt-3 flex-row">
                <TextInput
                    className="bg-gray-50 border text-center flex-1 flew-row h-16 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Arama yapınız"
                    onChangeText={(e)=>searchTextChange(e)}
                />
                <TouchableOpacity onPress={()=>searchHandle()}>
                    <LinearGradient className="h-16 items-center justify-center p-3 pl-4 pr-4 ml-1 rounded" colors={['#08d4d4','#01ab9d']}>
                        <Text>
                            <Search
                                stroke="white" 
                            />
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>  
        </View>
    );
} 
 
export default HomeScreen;