import { View, Text, Linking, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Features = () => {
  return (
    <ScrollView>
      <View style={{
        alignItems: 'center',
      }}>
        <Text 
          style={{
            fontWeight: 'bold',
            fontSize: 20
          }}>
          Our Small Concern</Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18
          }}>
            Save Birds Save Earth #Feather!!</Text>
      </View>
    <View style={{
      flexDirection: 'row',
    }}>
      <TouchableOpacity 
        style = {{
          width: 150,
          marginTop: 20,
          marginLeft: 20,
        }}
        onPress={() => {
          Linking.openURL('https://youtu.be/jJE3mFNXYdw')
        }}>
      <Image source={require('../assets/images/Kiwi.jpg')}
        style={{
          height: 150,
          width: 150
        }}
      />
      <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 5}}>
      Can New Zealand save its birds from extinction? 
      </Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => {
        Linking.openURL('https://youtu.be/wzPBh-KAd9k')
      }}
      style = {{
          width: 150,
          marginTop: 20,
          marginLeft: 20
        }}>
          <Image source={require('../assets/images/Eagle.jpg')}
        style={{
          height: 150,
          width: 150,
          marginLeft: 50
        }}
      />  
      <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 5, marginLeft: 100}}>
      Queen
      </Text>     
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity 
        onPress={() => {
          Linking.openURL('https://short-history.com/china-sparrow-war-7d0958986528#:~:text=In%201958%2C%20the%20Chinese%20government,in%20the%20hunt%20for%20sparrows.&text=Besides%20shooting%20sparrows%2C%20destroying%20their,to%20kill%20the%20birds%20%E2%80%94%20noise.')
        }}
      >
        <Image source={require('../assets/images/sparrow.jpg')}
          style={{
            height: 150,
            width: 300,
            marginLeft: 55,
            marginTop: 30
          }}
        />
        <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 5, marginLeft: 130}}>
      Sparrows and China
      </Text> 
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => {
          Linking.openURL('https://www.earthreminder.com/how-to-save-birds/')
        }}
      >
        <Image source={require('../assets/images/save.jpg')}
          style={{
            height: 150,
            width: 300,
            marginLeft: 55,
            marginTop: 30
          }}
        />
        <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 5, marginLeft: 150}}>
      Earth Reminder
      </Text> 
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => {
          Linking.openURL('https://abcbirds.org/save-our-birds-save-our-earth/')
        }}
      >
        <Image source={require('../assets/images/AmericanBird.jpg')}
          style={{
            height: 150,
            width: 300,
            marginLeft: 55,
            marginTop: 30
          }}
        />
        <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 5, marginLeft: 80}}>
        Birds are in crisis. Your response is urgently needed!
      </Text> 
      </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

export default Features