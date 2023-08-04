import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Auth from '@react-native-firebase/auth'
import {useNavigation, StackActions} from '@react-navigation/native'
import Bottomnavigator from '../bottomscreens/bottomnavigator'

const HomeScreen = (props) => {

  // const navigation = useNavigation();

  // const handleLogout = async () => {
  //   await Auth().signOut();
  //   navigation.dispatch(StackActions.replace('LoginScreen'));
  // };

  return (    
    <View style={{flex:1}}>
       <Bottomnavigator/>
    </View>
  )
}

export default HomeScreen

// import { View, Text } from 'react-native'
// import React from 'react'
// import Bottomnavigator from '../bottomscreens/bottomnavigator'

// const HomeScreen = () => {
//   return (
//     <View>
//       <Bottomnavigator/>
//     </View>
//   )
// }

// export default HomeScreen