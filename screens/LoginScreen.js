import { KeyboardAvoidingView, StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native'
import React, {useEffect,useState} from 'react';
import { auth } from '../firebase'

import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("BarPage")
      }
    })

    return unsubscribe
  }, [])


const handleSignUp = () =>
{
    auth
    .createUserWithEmailAndPassword(email,password)
    .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registred with : ',user.email);
    })
    .catch(error => alert(error.message))
}

const handleLogin = () =>
{
    auth
    .signInWithEmailAndPassword(email,password)
    .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with :',user.email);
    })
    .catch(error => alert(error.message))
}



  return (
    <KeyboardAvoidingView
    style = {styles.container}
    behavior='padding'>
        <Image 
        style = {styles.image}
        source = {require('../assets/UzLogo.png')}
        resizeMode='stretch'/>
      <View style= {styles.inputcontainer}>
          <TextInput 
          placeholder = 'Email'
           value = {email}
           onChangeText={text=>setEmail(text)}
          style={styles.input}
          />
          <TextInput 
          placeholder = 'Password'
          value = {password}
          onChangeText={text=>setPassword(text)}
          style={styles.input}
          secureTextEntry
          />
        <View style = {styles.buttoncontainer}>
        <TouchableOpacity
        onPress={handleLogin}
        style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      
        <TouchableOpacity
        onPress={handleSignUp}
        style={[styles.button,styles.buttonOutline]}>
            <Text style={styles.buttonOutLineText}>Register</Text>
        </TouchableOpacity>
        </View>
          </View>
    </KeyboardAvoidingView>
  )
}




export default LoginScreen

const styles = StyleSheet.create({

    container:{
        flex : 1,
        justifyContent:'center',
        alignItems:'center',
    },
    inputcontainer : {
        width:'80%',
        alignItems:'center',
    },
    input : {
        backgroundColor:'white',
        width:'100%',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5,
        
    },
    buttoncontainer : {
        width:'60%',
        marginTop:40,
    },
    button : {
        backgroundColor:'#B6B208',
        width:'100%',
        padding: 15,
        borderRadius:10,
        alignItems:'center',
    },
    buttonOutline : {
        backgroundColor:'white',
        marginTop:5,
        borderColor:'#B6B208',
        borderWidth:2,
    },
    buttonOutLineText : {
        color:'#B6B208',
        fontWeight:'700',
        fontSize:16,
    },
    buttonText : {
        color:'white',
        fontWeight:'700',
        fontSize:16,
        
    },
    image:{
        width:300,
        height:150,
        margin:15
        
    }
})