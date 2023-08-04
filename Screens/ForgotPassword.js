//import { firebase } from '@react-native-firebase/auth'
import auth from '@react-native-firebase/auth';
import React,{useState} from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, Alert, TouchableOpacity } from 'react-native'
import {TextInput, TouchableRipple} from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather';

const RegisterScreen = (props) => {
  const [email, setEmail] = useState('')
  
  const forgetPassword = async () => {
    if (!email) {
      Alert.alert("Error", "Please enter a valid email");
      return;
    }
  
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }
  
    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert("Password Reset Email Has Been Sent");
      props.navigation.navigate("LoginScreen");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };
  
  
  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={{marginTop: 10, paddingLeft:5, backgroundColor: 'white'}}>
        <TouchableOpacity 
        onPress={()=>{
          props.navigation.navigate("LoginScreen")
        }}
        style={{width: 30}}>
          <Feather name = "chevron-left" color = "black" size={35} />
        </TouchableOpacity>
      </View>
    <ScrollView showsVerticalScrollIndicator={false} >
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
       <Image source={require('../assets/images/Forgot.jpg')} style={{ width: 400, height: 400, marginTop:20 }}/>
       <Text style={styles.fotgotText}>Forgot</Text>
       <Text style={styles.fotgotText}>Password??</Text>
       <View style={{paddingLeft: 20, marginTop: 15,}}>
       <Text style={{fontWeight:'bold'}}>Don't Worry it Happens, please enter the email </Text>
       <Text style={{fontWeight:'bold'}}>Associated to your account</Text>
       </View>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
          <View style={{
                    backgroundColor: '#e0e0d7',
                    padding: 15,
                    borderRightRadius: 0,
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                    borderWidth: 2,
                    borderRightWidth: 0
                  }}>
                    <Icon name="envelope" size={20} color="#333" />
                  </View>
            <TextInput 
              placeholder='Enter Email' 
              value={email}
              onChangeText={txt => setEmail(txt)}
              style={styles.input} 
              keyboardType='email-address'
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableRipple onPress={() => {
              forgetPassword();
              //forgetPassword();
            }} style={styles.button}>
              <Text style={styles.buttonText}>Verify</Text>
            </TouchableRipple>
          </View>
        </View>
    </SafeAreaView>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: 250,
    height: 250,
  },
  inputContainer: {
    width: 300,
    paddingTop: 20,
    flexDirection: 'row'
  },
  input: {
    backgroundColor: '#e0e0d7',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius:0,
    borderWidth: 2,
    borderLeftWidth: 0,
    width: '84%'
  },
  buttonContainer: {
    width: '75%',
    paddingTop: 30,
  },
  button: {
    backgroundColor: '#40b383',
    padding: 15,
    borderRadius: 5,
    marginBottom: 30,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  fotgotText: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingLeft:20
  }
});

export default RegisterScreen;