import React from "react";
import { View,Text, StatusBar,StyleSheet, Dimensions,TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from "react-native-animatable";

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle="light-content"/> 
            <View style={styles.header}>
                <Animatable.Image
                    source={require('../../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                    animation="zoomIn"
                    duration={2000}
                />
            </View>
            <Animatable.View 
                style={styles.footer}
                animation="fadeInUpBig"
            >
                <Text style={styles.labeltext}>Email</Text>
                <View style={styles.action}>
                    
                </View>
            </Animatable.View>
        </View>
    );
} 
const {height} = Dimensions.get("screen");
const height_logo = height*0.28;
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor : '#009387',
    },
    header:{
        flex:2,
        justifyContent: 'center',
        alignItems:'center'
    },
    logo:{
        width:height_logo
    },
    footer:{
        flex:3,
        backgroundColor : '#fff',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30
    },
    labeltext:{
        color:'#05385a',
        marginTop:50
    }
})
export default LoginScreen;