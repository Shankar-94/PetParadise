import { View, Text, StyleSheet, SafeAreaView, Image} from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import Video from 'react-native-video';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth'
import {useNavigation, StackActions} from '@react-navigation/native'
import {TextInput, TouchableRipple} from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'
import LottieView from 'lottie-react-native';

 export const LoginScreen = (props) => {
  const [userInfo, setUserInfo] = useState(null)
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isAnimating, setIsAnimating] = useState(false);

  const animationRef = useRef(null);

  const navigation = useNavigation();

  const handleLogin = async () => {
    setIsAnimating(true);
    if (email === '' || password === '') {
      alert('Please Enter a valid Email and Password');
      return;
    }

    try {
      const User = await auth().signInWithEmailAndPassword(email, password);

      console.log(User);

      if(User.user.emailVerified){
        alert("You Are Verified")
        navigation.dispatch(StackActions.replace('HomeScreen', {
          userInfo: {
            email: User.user.email,
            uid: User.user.uid,
          },
        }));
      }else{
        alert("Please Verify Your Email, Checkout Inbox")

        await auth().currentUser.sendEmailVerification()
        await auth().signOut();
      }
      
    } catch (err) {
      console.log(err);
      alert('Invalid Password')
      //alert("Checkout Your Internet Connection")
    }
  };

    
  useEffect(() => {
    GoogleSignin.configure({ webClientId: '860547902332-isr2agfu8rb6trslfn4hpmbhj6bv8asb.apps.googleusercontent.com' });
  }, []);

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(googleCredential);

      console.log(userCredential);

      navigation.dispatch(StackActions.replace('HomeScreen', {
        userInfo: {
          email: userCredential.user.email,
          uid: userCredential.user.uid,
        },
      }));
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const signout= async()=>{
    try {
      await GoogleSignin.signOut();
      setUserInfo(null)
    } catch (error) {
      console.error(error);
    }
  }

  const onBuffer = (data) => {
    console.log("On Buffering==>>>", data)
  }

  const videoError = (data) => {
    console.log("Error Raised ===>>>>", data)
  } 

  return (
    <SafeAreaView style={{flex:1,}}>
      <Video source={ require('../assets/videos/Video1.mp4')}   
       repeat={true}    
       controls={false}
       muted={true}                                 
       onBuffer={onBuffer}  
       onError={videoError}     
       resizeMode='cover'         
       style={styles.backgroundVideo} />

      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        {isAnimating && (
          <LottieView
            ref={animationRef}
            source={require('../assets/lottieanimations/bird.json')} 
            autoPlay
            loop
            style={{ width: 200, height: 200 }}
          />
        )}
      </View>

       <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       }}>
        <Text 
        style={
          {
            fontFamily: 'Roboto-Medium',
            color: '#04143d', 
            fontSize: 24, 
            fontWeight: '500', 
            backgroundColor: 'white', 
            paddingBottom: 10, 
            paddingTop: 10, 
            paddingLeft: 65, 
            paddingRight: 65, 
            borderRadius: 10}}>
              Have Account?? </Text>
              
              <View 
                style={{ 
                  width: 300, 
                  paddingTop: 20, 
                  flexDirection: 'row', 
                  alignItems: 'center', 
                  marginRight: 20}}>
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
              value = {email}
              onChangeText = {value => setEmail(value)}
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

              <View style={{ 
                  width: 300, 
                  paddingTop: 20, 
                  flexDirection: 'row', 
                  alignItems: 'center', 
                  marginRight: 20}}>
                     
                  <View style={{
                    backgroundColor: 'white',
                    padding: 12,
                    borderRightRadius: 0,
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                    borderWidth: 2,
                    borderRightWidth: 0
                  }}>
                    <Icon name="lock" size={25} color="#333" />
                  </View>
              <TextInput 
              placeholder='  Password' 
              value = {password}
              onChangeText = {value => setPassword(value)}
              style={{backgroundColor:'white', 
                      borderRadius: 5, 
                      borderTopLeftRadius: 0, 
                      borderBottomLeftRadius: 0,
                      borderWidth: 2,
                      borderLeftWidth: 0,
                      width:'93.5%',
                      height: 50,}}  
              secureTextEntry={true}/>
              </View>

              <View style={{paddingLeft: 200, paddingTop: 10}}>
              <TouchableRipple onPress={() => {props.navigation.navigate("ForgotPassword")}}>
              <Text style={
              {color:'#952fcc',
              fontWeight: '700',
              fontSize: 18,
              backgroundColor:'#e0e0d7',
              borderRadius: 5,
              paddingLeft:10,
              paddingRight:10,
              }}>Forgot??</Text>
              </TouchableRipple>
              </View>
              <View 
              style={{width:'75%',
              paddingTop: 10
              }}>
              <TouchableRipple onPress={() =>{
                handleLogin();
                // userSignin();
              }} 
              style={{backgroundColor:'#40b383',
                      padding: 15,
                      borderRadius: 5,
                      marginBottom: 30,
                      alignItems:'center'                    
              }}>
                  <Text
                  style={{fontSize: 20,
                          fontWeight: 'bold',
                          color: '#fff'
                  }}
                  >Login</Text>
              </TouchableRipple>
              </View>
              <View style={{ paddingRight: 40, paddingLeft: 40}}>
              <Text style={
              {
              fontWeight: '700',
              fontSize: 16,
              backgroundColor:'#e0e0d7',
              borderRadius: 5,
              paddingLeft:10,
              paddingRight:10,
              paddingTop: 5,
              paddingBottom: 5
              }}>Or, Login with...</Text>
              </View>

              <View style={{flexDirection: 'row', paddingTop: 10}}>
                <TouchableRipple onPress={() =>{
                  signInWithGoogle()
                  //signIn();
                  signout();
                }} >
                <Image source={require('../assets/icons/google.png')} style={{ width: 60, height: 60 }}/>
                </TouchableRipple>
              </View>
              <View style={{paddingTop: 20}}>
              <TouchableRipple 
              onPress={() => {props.navigation.navigate("RegisterScreen")}}>
              <Text style={
              {color:'#952fcc',
              fontWeight: 'bold',
              fontSize: 16,
              backgroundColor:'#e0e0d7',
              borderRadius: 5,
              paddingLeft:5,
              paddingRight:5,
              paddingTop: 5,
              paddingBottom: 5
              }}>Register here...</Text>
              </TouchableRipple>
              </View>
       </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  backgroundVideo:{
    height: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right:0
  }
})

export default LoginScreen;