import React,{useState} from "react";
import { View,Text, StatusBar,StyleSheet, Dimensions,TouchableOpacity, TextInput, Platform, Alert,ActivityIndicator} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from "react-native-animatable";
import {User,Lock, Eye, EyeOff} from "../../components/icons";
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from 'react-redux'
import { setSignIn } from '../../redux/slices/authSlice';
import axios from "axios";
import {BASE_URL} from "../../config";


const LoginScreen = ({navigation}) => {
    const dispatch = useDispatch();

    const [data,setData] = useState({
        email : '',
        password : '',
        secureTextEntry:true,
        loading:false,
    });

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const textInputChange = (val) => {
        setData({
            ...data,
            email:val
        })
    }
    const textPasswordChange = (pass) => {
        setData({
            ...data,
            password : pass
        })
    }

    const loginHandle = () => {
        setData({
            ...data,
            loading:true
        });
        if(!data.email || !data.password){
            Alert.alert("Uyarı","Lütfen email ve parola alınını boş bırakmayınız.");
            setData({
                ...data,
                loading:false
            });
        }else{
            axios.post(`${BASE_URL}/login`,{
                email:data.email,
                password:data.password,
                type:'tmturnike'
            })
            .then(function (response) { 
                const rsp = response.data; 
                if(rsp.status_code == 200){ 
                    const user = {
                        isLoggedIn: true,
                        email: rsp.email,
                        userName: rsp.name,
                        token: rsp.token
                     }; 
                     AsyncStorage.setItem('userInfo',JSON.stringify(user));
                     dispatch(setSignIn(user));
                }else {
                    Alert.alert("Lütfen email ve parolanı doğru giriniz.");
                }
                setData({
                    ...data,
                    loading:false
                });
            })
            .catch(function (error) {
                Alert.alert("Uyarı",JSON.stringify(error.message));
                setData({
                    ...data,
                    loading:false
                });
            });
            
        }
        
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle="light-content"/> 
            <Spinner
                visible={data.loading}
                textContent={'Loading...'}
                />
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
                <Text style={styles.labeltext}>Email adresi</Text>
                <View style={styles.action}>
                    <User
                        stroke = "#05375a"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Email adresini giriniz."
                        autoCapitalize="none"
                        style={styles.TextInput}
                        onChangeText={(val)=>textInputChange(val)} 
                    />
                </View> 

                <Text style={styles.labeltext}>Parola</Text>
                <View style={styles.action}>
                    <Lock
                        stroke = "#05375a"
                        size={20}
                    />
                    <TextInput 
                        secureTextEntry = {data.secureTextEntry ? true : false}
                        placeholder="Parolanızı giriniz"
                        autoCapitalize="none"
                        style={styles.TextInput}
                        onChangeText={(val)=>textPasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={()=>updateSecureTextEntry()}
                    >
                        {data.secureTextEntry ? <Eye  stroke="#05375a" size={20} />:<EyeOff stroke="#05375a" size={20} />}
                    </TouchableOpacity>
                </View>
                
                <View style={styles.button} className="mt-5">
                    <TouchableOpacity style={{width:'100%'}} onPress={()=>loginHandle()}>
                        <LinearGradient style={styles.signIn} colors={['#08d4d4','#01ab9d']}>
                            <Text style={[styles.textSigin,{color:"#fff"}]}>
                                Giriş Yap
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity style={{width:'100%'}} onPress={()=>navigation.navigate('RegisterScreen')}>
                        <LinearGradient style={[styles.signIn,{ 
                            marginTop:15
                        }]} colors={['#08d4d4','#01ab9d']}>
                            <Text style={[styles.textSigin,{color:"#fff"}]}>
                                Kayıt Ol
                            </Text>
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
    action:{
        flexDirection:'row',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#f2f2f2',
        paddingBottom:5
    },
    labeltext:{
        color:'#05385a',
        marginTop:20
    },
    TextInput:{
        flex:1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft:10,
        color:'#5375a'
    },
    signIn:{
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    textSigin:{
        fontSize:18,
        fontWeight:'bold'
    }
})
export default LoginScreen;