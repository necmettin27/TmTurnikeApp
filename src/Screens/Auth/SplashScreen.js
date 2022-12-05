import React from "react";
import { View,Text,StyleSheet, StatusBar, Dimensions, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from "react-native-animatable";

const SplashScreen = ({navigation}) => {
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
                <Text style={styles.title}>
                    Turnike Geçiş sistemine ulaşmak için son 1 adım kaldı.
                </Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
                        <LinearGradient
                            colors={['#08d4c4','#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSigin}>Başlayınız</Text>
                        </LinearGradient>
                        
                    </TouchableOpacity>
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
        backgroundColor: '#009387'
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
        flex:1,
        backgroundColor : '#fff',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30
    },
    title:{
        color:'#05375a',
        fontSize:30,
        fontWeight:'bold'
    },
    button:{
        alignItems:'flex-end',
        marginTop:30
    },
    signIn:{
        width:150,
        height:40,
        justifyContent:'center',
        borderRadius:50,
        flexDirection:'row',
        alignItems:'center'
    },
    textSigin:{
        color:'white',
        fontWeight:'bold'
    }
  });

export default SplashScreen;