import React, { useState, useEffect } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
// import Fontisto from 'react-native-vector-icons/Fontisto'
import Video from 'react-native-video';
import Birds from '../src/API/Birds';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import Auth from '@react-native-firebase/auth';

const BirdsDetails = ({ navigation, route }) => {
  const id = route.params.birdsId;

  const selectedBird = Birds.find((element) => {
    return id === element.id;
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images =  [selectedBird.image1, selectedBird.image2, selectedBird.image3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  const [bag, setBag] = useState([]);
  useEffect(() => {
    console.log("Cart Items", bag);
  }, [bag]);

  const addToBag = async () => {
    try {
      const currentUser = Auth().currentUser;
      if (!currentUser) {
        console.log('User is not logged in.');
        return;
      }
  
      const currentUserUid = currentUser.uid;
      const bagRef = firestore().collection('basket').doc(currentUserUid);
  
      const bagDoc = await bagRef.get();
  
      if (bagDoc.exists) {
        // Bag document already exists, update the cart items
        const bagData = bagDoc.data();
        const items = bagData.items;
  
        let existingItem = items.find((item) => item.id === selectedBird.id);
  
        if (existingItem) {
          // Bird item already exists in the bag, increment the quantity
          existingItem.qty = existingItem.qty ? existingItem.qty + 1 : 1;
        } else {
          // Bird item doesn't exist in the bag, add it with quantity 1
          items.push({ ...selectedBird, qty: 1, uid: currentUserUid });
        }
  
        await bagRef.update({ items: items });
      } else {
        // Bag document doesn't exist, create a new one with the cart items
        const initialBag = [{ ...selectedBird, qty: 1, uid: currentUserUid }];
        await bagRef.set({ items: initialBag });
      }
  
      console.log('Bird added to bag in Firestore successfully!');
      alert('Bird Added to the Bag Successfully')
      setBag([...bag, selectedBird]);
    } catch (error) {
      console.log('Error adding bird to bag in Firestore:', error);
    }
  };
  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{marginTop: 10, paddingLeft:5, flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity 
        onPress={()=>{
          navigation.navigate("Home")
        }}
        style={{
          width: 30,
          marginLeft: 5,
        }}>
          <Feather name = "home" color = "#0e4878" size={28} />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{
          navigation.navigate('Basket')
        }}
        >
        {/* <Fontisto name = 'shopping-basket' size={30} color = '#214145'
        style={{
          marginTop: 0,
          marginRight: 10
        }}
        /> */}
        <Image source={require('../assets/images/basket.png')}
          style={{
            height: 35,
            width: 35,
            marginRight:10,
            marginTop: -3
          }}
        />
        </TouchableOpacity>
      </View>
    
    <View style={{ paddingHorizontal: 20 }}>
      <View
        style={{
          padding: 30,
          backgroundColor: 'rgba(255 ,255, 255, 0.90)',
          alignItems: 'center',
          borderRadius: 5,
          shadowColor: 'grey',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.5,
          shadowRadius: 8,
          elevation: 8,
          marginVertical: 30,
        }}
      >
        <View>
          <Image
            source={{uri: images[currentImageIndex]}}
            resizeMode='contain'
            style={{
              width: '100%',
              height: undefined,
              aspectRatio: 1,
              marginTop: -10
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 22,
            color: '#344055',
            textTransform: 'uppercase',
            fontWeight: '500',
            paddingBottom: 15,
            alignItems: 'center',
          }}
        >
          {selectedBird.name}
        </Text>

        <Text 
          style={{ 
            textAlign: 'justify', 
            paddingBottom: 15, 
            color: '#7d7d7d', 
            fontWeight: '800' }}>{selectedBird.description}</Text>

        <View style={{ aspectRatio: 16 / 9, width: '100%', marginBottom: 40, marginTop: 25 }}>
          <Video
            source={{uri:selectedBird.video}}
            repeat={true}
            controls={false}
            muted={false}
            resizeMode='cover'
            style={{ 
              flex: 1
             }}
          />
        </View>

        <View style={{
          flexDirection: 'row',
        }}>
        <View style={{
          borderWidth: 1.5,
          borderRadius: 5,
          marginBottom: 10,
          backgroundColor:"#bce3cb",
          padding: 5,
          marginRight: 20}}>
        <Text style={{
          fontSize: 14, 
          marginBottom: 10,
          marginLeft:5,
          marginTop: 10,
          fontWeight: 'bold'
        }}>Age: {selectedBird.age}</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          borderWidth: 1.5,
          borderRadius: 5,
          marginBottom: 10,
          backgroundColor:"#b7e8e0",
          padding: 3,
          marginRight: 20
        }}>
          
        <View>
        <Text style={{
          marginLeft:5,
          fontWeight: 'bold',
          marginTop: 8
        }}>Gender: <Ionicons name = {selectedBird.genderIcon} size={20} color="#1088eb" /> </Text>
        </View>
        </View>
        </View>

        <View style={{
          flexDirection: 'row',
          marginTop: 10,
        }}>
        <FontAwesome5 name = 'heartbeat' size ={25} color = 'red'/>
        <Text style={{
          marginLeft: 5,
          fontWeight: 'bold',
          marginTop: 3
        }}>{selectedBird.lifeExpectancy}</Text>
        </View>

        <View style={{
          flexDirection: 'row'
        }}>
        <View style={{
          backgroundColor: '#36393d',
          marginTop: 20,
          marginRight: 10,
          alignItems: 'center',
          paddingTop: 10,
          width: 85,
          borderRadius: 5,
          width: '30%',
          flexDirection: 'row'
        }}>
        <FontAwesome name = 'rupee' size={17} color='white'style={{
          marginLeft: 13,
          marginBottom: 6
        }}/>
        <Text 
          style={{ 
            textAlign: 'center',
            alignItems: 'center', 
            paddingBottom: 15, 
            color: 'white',
            marginTop: 5.5,
            marginLeft: 10,
            fontSize: 16
             }}>{selectedBird.price}</Text>
             {/* <Text style={{ marginHorizontal: 10 }}>    {Auth().currentUser?.uid}</Text> */}
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#40b383',
              borderRadius: 5,
              paddingVertical: 10,
              paddingHorizontal: 20,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={addToBag}
          >
            <Text style={{ color: '#eee', fontWeight: '500' }}>Add to Basket</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

export default BirdsDetails;