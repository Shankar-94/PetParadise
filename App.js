import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './Screens/Welcome';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ForgotPassword from './Screens/ForgotPassword';
import HomeScreen from './Screens/HomeScreen';
import UserDetails from './Screens/UserDetails';
import Orders from './Screens/Orders';
import BirdsDetails from './Screens/BirdsDetails';
import Basket from './Screens/Basket';
import PaymentStatus from './Screens/PaymentStatus';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
          name='Welcome' 
          component = {Welcome} 
          options={{ headerShown: false }}/>

          
        <Stack.Screen 
          name='LoginScreen' 
          component = {LoginScreen} 
          options={{ headerShown: false }}/>
          
        
        <Stack.Screen 
          name='RegisterScreen' 
          component = {RegisterScreen} 
          options={{ headerShown: false }}/>
        

        <Stack.Screen 
          name='ForgotPassword' 
          component = {ForgotPassword} 
          options={{ headerShown: false }}/>


        <Stack.Screen 
          name='HomeScreen' 
          component = {HomeScreen} 
          options={{ headerShown: false }}/>


        <Stack.Screen 
          name='UserDetails' 
          component = {UserDetails} 
          options={{ headerShown: false }}/>


        <Stack.Screen 
          name='Orders' 
          component = {Orders} 
          options={{ headerShown: false }}/>


        <Stack.Screen 
          name='BirdsDetails' 
          component = {BirdsDetails} 
          options={{ headerShown: false }}/>


        <Stack.Screen 
          name='Basket' 
          component = {Basket} 
          options={{ headerShown: false }}/>

        <Stack.Screen 
          name='PaymentStatus' 
          component = {PaymentStatus} 
          options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;