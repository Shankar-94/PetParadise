import { View, Text, StyleSheet, SafeAreaView} from 'react-native'
import Video from 'react-native-video';
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import {TextInput, TouchableRipple} from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'

const RegisterScreen = (props) => {
  const [fullname, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [password, setPassword] = useState('')
  const [confpassword, setConfPassword] = useState('')
  const [message, setMessage] = useState('')
  
  const navigation = useNavigation();

  const handleSignUp = async () => {
    try {

      const response = await auth().createUserWithEmailAndPassword(email, password);

      const userData = {
        id: response.user.uid,
        fullname: fullname,
        email: email,
        contact: contact,
        password: password,
        confpassword: confpassword,
      }

      await firestore().collection('Users').doc(response.user.uid).set(
        userData
      )
      await auth().currentUser.sendEmailVerification()

      await auth().signOut()

      alert("Please Verify Your Email Checkout Link in Your Inbox")
      props.navigation.navigate("LoginScreen");
    } catch (err) {
      console.log(err)
      setMessage(err.message);
    }
  }

  const validateInputs = () => {
    if (!fullname.trim() || !email.trim() || !contact.trim() || !password.trim() || !confpassword.trim()) {
      alert('Please enter all the required fields');
      return false;
    }

    if (!/^[a-zA-Z ]+$/.test(fullname.trim())) {
      alert('Please enter a valid full name');
      return false;
    }

    if (!/^[0-9]+$/.test(contact.trim())) {
      alert('Please enter a valid contact number');
      return false;
    }

    if (password !== confpassword) {
      alert('Passwords do not match');
      return false;
    }

    return true;
  };

  const onBuffer = (data) => {
    console.log("On Buffering==>>>", data);
  };

  const videoError = (data) => {
    console.log("Error Raised ===>>>>", data);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Video
        source={require('../assets/videos/Video2.mp4')}
        repeat={true}
        muted={true}
        onBuffer={onBuffer}
        onError={videoError}
        resizeMode='cover'
        style={styles.backgroundVideo}
      />

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View 
        style={{ 
          width: 300, 
          paddingTop: 20, 
          flexDirection: 'row', 
          alignItems: 'center', 
          marginRight: 20}}>
        {/* <Image 
                source={require('../assets/images/name.png')} 
                style={{ 
                  width: 10, 
                  height: 20,  
                  backgroundColor: '#e0e0d7', 
                  borderRadius: 5, 
                  borderTopRightRadius: 0, 
                  borderBottomRightRadius: 0, 
                  padding: 25}} /> */}
                  <View style={{
                    backgroundColor: 'white',
                    padding: 12.3,
                    borderRightRadius: 0,
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                    borderWidth: 2,
                    borderRightWidth: 0
                  }}>
                    <Icon name="user" size={25} color="#333" />
                  </View>
          <TextInput
            placeholder=' Full Name'
            value={fullname}
            onChangeText={txt => setFullName(txt)}
            style={{backgroundColor:'white', 
                      borderRadius: 5, 
                      borderTopLeftRadius: 0, 
                      borderBottomLeftRadius: 0,
                      borderWidth: 2,
                      borderLeftWidth: 0,
                      width:'92%',
                      height: 50,}} 
          />
        </View>

        <View 
        style={{ 
          width: 300, 
          paddingTop: 20, 
          flexDirection: 'row', 
          alignItems: 'center', 
          marginRight: 20}}
        >
        {/* <Image 
                source={require('../assets/images/email.png')} 
                style={{ 
                  width: 10, 
                  height: 20,  
                  backgroundColor: '#e0e0d7', 
                  borderRadius: 5, 
                  borderTopRightRadius: 0, 
                  borderBottomRightRadius: 0, 
                  padding: 25}} /> */}
                  <View style={{
                    backgroundColor: 'white',
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
            placeholder='Email Id'
            value={email}
            onChangeText={txt => setEmail(txt)}
            style={{backgroundColor:'white', 
                      borderRadius: 5, 
                      borderTopLeftRadius: 0, 
                      borderBottomLeftRadius: 0,
                      borderWidth: 2,
                      borderLeftWidth: 0,
                      width:'90%',
                      height: 50,}}
            keyboardType='email-address'
          />
        </View>

        <View 
        style={{ 
          width: 300, 
          paddingTop: 20, 
          flexDirection: 'row', 
          alignItems: 'center', 
          marginRight: 20}}
        >
        {/* <Image 
                source={require('../assets/images/contact.png')} 
                style={{ 
                  width: 10, 
                  height: 20,  
                  backgroundColor: '#e0e0d7', 
                  borderRadius: 5, 
                  borderTopRightRadius: 0, 
                  borderBottomRightRadius: 0, 
                  padding: 25}} /> */}
                  <View style={{
                    backgroundColor: 'white',
                    padding: 13.3,
                    borderRightRadius: 0,
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                    borderWidth: 2,
                    borderRightWidth: 0
                  }}>
                    <Icon name="phone" size={23} color="#333" />
                  </View>
          <TextInput
            placeholder=' Contact No'
            value={contact}
            onChangeText={txt => setContact(txt)}
            style={{backgroundColor:'white', 
                      borderRadius: 5, 
                      borderTopLeftRadius: 0, 
                      borderBottomLeftRadius: 0,
                      borderWidth: 2,
                      borderLeftWidth: 0,
                      width:'92%',
                      height: 50,}}
            keyboardType='numeric'
          />
        </View>

        <View 
        style={{ 
          width: 300, 
          paddingTop: 20, 
          flexDirection: 'row', 
          alignItems: 'center', 
          marginRight: 20}}
        >
        {/* <Image 
                source={require('../assets/images/password.png')} 
                style={{ 
                  width: 10, 
                  height: 20,  
                  backgroundColor: '#e0e0d7', 
                  borderRadius: 5, 
                  borderTopRightRadius: 0, 
                  borderBottomRightRadius: 0, 
                  padding: 25}} /> */}
                   <View style={{
                    backgroundColor: 'white',
                    padding: 13.3,
                    borderRightRadius: 0,
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                    borderWidth: 2,
                    borderRightWidth: 0
                  }}>
                    <Icon name="lock" size={23} color="#333" />
                  </View>
          <TextInput
            placeholder='Password'
            value={password}
            onChangeText={txt => setPassword(txt)}
            style={{backgroundColor:'white', 
                      borderRadius: 5, 
                      borderTopLeftRadius: 0, 
                      borderBottomLeftRadius: 0,
                      borderWidth: 2,
                      borderLeftWidth: 0,
                      width:'93.3%',
                      height: 50,}}
            secureTextEntry={true}
          />
        </View>

        <View 
        style={{ 
          width: 300, 
          paddingTop: 20, 
          flexDirection: 'row', 
          alignItems: 'center', 
          marginRight: 20}}
        >
        {/* <Image 
                source={require('../assets/images/password.png')} 
                style={{ 
                  width: 10, 
                  height: 20,  
                  backgroundColor: '#e0e0d7', 
                  borderRadius: 5, 
                  borderTopRightRadius: 0, 
                  borderBottomRightRadius: 0, 
                  padding: 25}} /> */}
                  <View style={{
                    backgroundColor: 'white',
                    padding: 13.3,
                    borderRightRadius: 0,
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                    borderWidth: 2,
                    borderRightWidth: 0
                  }}>
                    <Icon name="lock" size={23} color="#333" />
                  </View>
          <TextInput
            placeholder='Confirm Password'
            value={confpassword}
            onChangeText={txt => setConfPassword(txt)}
            style={{backgroundColor:'white', 
                      borderRadius: 5, 
                      borderTopLeftRadius: 0, 
                      borderBottomLeftRadius: 0,
                      borderWidth: 2,
                      borderLeftWidth: 0,
                      width:'93.3%',
                      height: 50,}}
            secureTextEntry={true}
          />
        </View>

        <View style={{
          width: '75%',
          paddingTop: 30
        }}>
          <TouchableRipple onPress={() => {
            if (validateInputs()) {
              handleSignUp();
            }
          }}
            style={{
              backgroundColor: '#40b383',
              padding: 15,
              borderRadius: 5,
              marginBottom: 30,
              alignItems: 'center'
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#fff',
              }}
            >Register</Text>
          </TouchableRipple>
        </View>

        <View style={{ flexDirection: 'row', paddingRight: 10 }}>
          <View>
            <Text style={
              {
                fontWeight: '700',
                fontSize: 16,
                backgroundColor: '#e0e0d7',
                borderRadius: 5,
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 5,
                paddingBottom: 5
              }}>Already User??</Text>
          </View>

          <View style={{ paddingLeft: 10 }}>
            <TouchableRipple onPress={() => { props.navigation.navigate("LoginScreen") }}>
              <Text style={
                {
                  color: '#952fcc',
                  fontWeight: 'bold',
                  fontSize: 16,
                  backgroundColor: '#e0e0d7',
                  borderRadius: 5,
                  paddingLeft: 5,
                  paddingRight: 5,
                  paddingTop: 5,
                  paddingBottom: 5
                }}>Login Here...</Text>
            </TouchableRipple>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundVideo: {
    height: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
})

export default RegisterScreen;