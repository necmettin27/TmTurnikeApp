import React,{useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./AuthNavigation";
import AppNavigation from "./AppNavigation"; 
import {useSelector,useDispatch} from 'react-redux';
import {selectIsLoggedIn,setisLoggin} from "../redux/slices/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Navigation = () => { 
    const dispatch = useDispatch();
    const isLoggedInControl = async() => {
        try{
            let userInfo = await AsyncStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo); 
            dispatch(setisLoggin(userInfo));
          }catch(e){
            console.log(`error is logged in error ${e}`);
          }
    }
    useEffect(() => {
        isLoggedInControl();
    },[]);
    const isLoggedIn = useSelector(selectIsLoggedIn);
   
    return (
        <NavigationContainer>
            {isLoggedIn ?  <AppNavigation/> : <AuthNavigation/> }
        </NavigationContainer>
    );
}
export default Navigation;