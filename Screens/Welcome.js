import { View, Text, TouchableOpacity, Image} from 'react-native'
import React, { useEffect } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Auth from '@react-native-firebase/auth'
import { StackActions, useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';


const Welcome = (props) => {
  useEffect(() =>{
    setTimeout(async()=>{
      const unSubscribe = await Auth().onAuthStateChanged(user => {
        const routeName = user !== null ? "HomeScreen" : "LoginScreen"
          //props.navigation.navigate(routeName)
          unSubscribe();
          navigation.dispatch(StackActions.replace(routeName))
        })
    }, 3000)
  },[])

  const navigation = useNavigation();

  return (
    
    <View style={
      {
        flex:1, 
        justifyContent:'center', 
        alignItems:'center', 
        backgroundColor:'#fff',
      }
    }>
       <View style={{
      marginBottom:300,
      paddingBottom: 120
    }}>
      <Image source={require('../assets/images/logo.png')} style={{ width: 250, height: 250, }}/>
    </View>
        <Lottie source={require('../assets/lottieanimations/parrot.json')} autoPlay loop />
        {/* <Lottie source={require('../assets/lottieanimations/train.json')} autoPlay loop style={{height: 200}}/> */}
    {/* <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
    <Image source={require('../assets/images/Birds.jpg')} style={{ width: 400, height: 400 }}/>
    </View> */}
    <TouchableOpacity 
    // onPress={()=>{
      
    //   }
    // }
    style={
      {
        backgroundColor:'#40b383', 
        padding: 20, width:'90%', 
        borderRadius: 5, 
        flexDirection:'row', 
        justifyContent: 'space-between',
        marginTop: 50,
      }
    }>
      <Text style={{fontWeight:'bold', fontSize:17, color:'#fff', fontFamily:'Roboto-MediumItalic'}}>Welcome</Text>
      <MaterialIcons name = 'arrow-forward-ios' size = {22} color = "#fff" />
    </TouchableOpacity>
    </View>
  )
}

export default Welcome