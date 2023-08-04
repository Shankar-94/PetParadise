import { View, Text } from 'react-native'
import React from 'react'
//import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../bottomscreens/Home'
import Search from '../bottomscreens/Search'
import Features from '../bottomscreens/Features'
import Profile from '../bottomscreens/Profile'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

//const Tab = createMaterialBottomTabNavigator()
const Tab = createBottomTabNavigator();

const Bottomnavigator = () => {
  return (
   <Tab.Navigator
   screenOptions={{
    tabBarShowLabel: false,
    tabBarInactiveTintColor: '#fff',
    tabBarActiveTintColor: '#eff249'
   }}
   >
        <Tab.Screen
            name = 'Home'
            component={Home}
            options = {{headerShown:false,
                headerTitle: '',
                //tabBarBadge:3,
                tabBarIcon: ({color, size}) =>(
                    <IonIcons name='home-outline' color={color} size={size}/>
                ),
                tabBarStyle:{backgroundColor:'#40b383'},
                headerStyle : { 
                    height: 80,
                    backgroundColor: '#40b383'
                }
            }}
        />
        <Tab.Screen
            name = 'Search'
            component={Search}
            options = {{headerShown:false,
                        headerTitle: '',
                tabBarIcon: ({color, size}) =>(
                    <Feather name='search' color={color} size={size}/>
                ),
                tabBarStyle:{backgroundColor:'#40b3a9'},
                headerStyle : { 
                    height: 80,
                    backgroundColor: '#40b3a9'
                }
            }}
        />
        <Tab.Screen
            name = 'Features'
            component={Features}
            options = {{headerShown:true,
                        headerTitle: '',
                tabBarIcon: ({color, size}) =>(
                <Feather name='feather' color={color} size={size}/>
            ),
            tabBarStyle:{backgroundColor:'#4087b3'},
            headerStyle : { 
                height: 80,
                backgroundColor: '#4087b3'
            }
        }}
        />
        <Tab.Screen
            name = 'Profile'
            component={Profile}
            options = {{headerShown:true,
                        headerTitle: '',
                tabBarIcon: ({color, size}) =>(
                    <Feather name='user' color={color} size={size}/>
                ),
                tabBarStyle:{backgroundColor:'#b3408d'},
                headerStyle : { 
                    height: 80,
                    backgroundColor: '#b3408d'
                }
            }}
        />
   </Tab.Navigator>
  )
}

export default Bottomnavigator