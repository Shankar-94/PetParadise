import { View, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import Auth from '@react-native-firebase/auth';
import { useNavigation, StackActions } from '@react-navigation/native';
import placeHolderImage from '../assets/images/user.png';
import Feather from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';
import { Surface, Text, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'

const UserDetails = (props) => {
  const navigation = useNavigation();
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [pincode, setPincode] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    const currentUser = Auth().currentUser;
  
    if (currentUser) {
      const userRef = firestore().collection('users').doc(currentUser.uid);
  
      userRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            const userData = doc.data();
            setName(userData.name || '');
            setContact(userData.contact || '');
            setPincode(userData.pincode || '');
            setAddress(userData.address || '');
          }
        })
        .catch((error) => {
          console.log('Error retrieving user data:', error);
        });
  
      const profileRef = firestore().collection('ProfilePictures').doc(currentUser.uid);
  
      profileRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            const profileData = doc.data();
            if (profileData.profileImage) {
              setProfileImage(profileData.profileImage);
            } else if (currentUser.providerData && currentUser.providerData.length > 0) {
              // User logged in with a provider (e.g., Google)
              const photoURL = currentUser.providerData[0]?.photoURL;
              setProfileImage(photoURL);
            } else {
              setProfileImage(null); // Clear profile image if not available in Firestore
            }
          } else if (currentUser.providerData && currentUser.providerData.length > 0) {
            // User logged in with a provider (e.g., Google)
            const photoURL = currentUser.providerData[0]?.photoURL;
            setProfileImage(photoURL);
          } else {
            setProfileImage(null); // Clear profile image if not available in Firestore
          }
        })
        .catch((error) => {
          console.log('Error retrieving profile image:', error);
        });
    } else {
      setName('');
      setContact('');
      setPincode('');
      setAddress('');
      setProfileImage(null);
    }
  }, []);
  

  const handleLogout = async () => {
    await Auth().signOut();
    navigation.dispatch(StackActions.replace('LoginScreen'));
  };

  const imagePick = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
      setProfileImage(image.path);
      uploadImageToFirestore(image.path);
    });
  };

  const uploadImageToFirestore = async (imagePath) => {
    if (imagePath) {
      try {
        const userRef = firestore().collection('ProfilePictures').doc(Auth().currentUser.uid);

        await userRef.set({
          profileImage: imagePath,
        });

        console.log('Image uploaded to Firestore successfully!');
      } catch (error) {
        console.log('Error uploading image to Firestore:', error);
      }
    }
  };

  const handleUpdate = async () => {
    try {
      const currentUser = Auth().currentUser;

      if (currentUser) {
        const userRef = firestore().collection('users').doc(currentUser.uid);

        await userRef.set({
          name: name,
          contact: contact,
          pincode: pincode,
          address: address,
        });

        console.log('User data updated in Firestore successfully!');
        alert("User Data Updated Successfully")
      } else {
        console.log('User is not logged in.');
      }
    } catch (error) {
      console.log('Error updating user data in Firestore:', error);
    }
  };

  return (
    <View style={{backgroundColor:'#BFD8FFFF', height: '100%'}}>
      <View style={{marginTop: 10, paddingLeft:5}}>
        <TouchableOpacity 
        onPress={()=>{
          props.navigation.navigate("Profile")
        }}
        style={{width: 30}}>
          <Feather name = "chevron-left" color = "black" size={35} />
        </TouchableOpacity>
      </View>
    <ScrollView
      style={{ paddingTop: 50 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <Image
            source={profileImage ? { uri: profileImage } : placeHolderImage}
            style={{
              height: 110,
              width: 110,
              borderRadius: 55,
              borderWidth: 3,
              borderColor: '#1a7b99',
            }}
          />
          <TouchableOpacity
            onPress={imagePick}
            style={{ alignItems: 'flex-end', top: -10 }}
          >
            <Feather name="edit" color="green" size={20} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '90%',
            paddingLeft: 10,
            paddingTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 20,
          }}
        >
          <View
            style={{
              backgroundColor: 'white',
              padding: 15,
              borderRightRadius: 0,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
              borderWidth: 2,
              borderRightWidth: 0,
            }}
          >
            <Icon name="user" size={20} color="#333" />
          </View>
          <TextInput
            placeholder='Name'
            style={{
              backgroundColor: 'white',
              borderRadius: 5,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderWidth: 2,
              borderLeftWidth: 0,
              width: '90%',
              height: 50,
            }}
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <Surface
          style={{
            elevation: 4,
            padding: 16,
            width: '90%',
            borderWidth: 2,
            marginVertical: 3,
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 5,
          }}
        >
          <Icon name="envelope" size={20} color="#333" />
          <Text style={{ marginHorizontal: 10 }}>    {Auth().currentUser?.email}</Text>
          {/* <Text style={{ marginHorizontal: 10 }}>    {Auth().currentUser?.uid}</Text> */}
        </Surface>

        <View
          style={{
            width: '90%',
            paddingLeft: 10,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 20,
          }}
        >
          <View
            style={{
              backgroundColor: 'white',
              padding: 15,
              borderRightRadius: 0,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
              borderWidth: 2,
              borderRightWidth: 0,
            }}
          >
            <Icon name="phone" size={20} color="#333" />
          </View>
          <TextInput
            placeholder='Contact'
            style={{
              backgroundColor: 'white',
              borderRadius: 5,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderWidth: 2,
              borderLeftWidth: 0,
              width: '89.5%',
              height: 50,
            }}
            keyboardType='numeric'
            value={contact}
            onChangeText={(text) => setContact(text)}
          />
        </View>

        <View
          style={{
            width: '90%',
            paddingLeft: 10,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 20,
            marginTop: 3,
          }}
        >
          <View
            style={{
              backgroundColor: 'white',
              padding: 15,
              borderRightRadius: 0,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
              borderWidth: 2,
              borderRightWidth: 0,
            }}
          >
            <Icon name="map-marker" size={20} color="#333" />
          </View>
          <TextInput
            placeholder='Pincode'
            style={{
              backgroundColor: 'white',
              borderRadius: 5,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderWidth: 2,
              borderLeftWidth: 0,
              width: '90.5%',
              height: 50,
            }}
            keyboardType='numeric'
            value={pincode}
            onChangeText={(text) => setPincode(text)}
          />
        </View>

        <View
          style={{
            width: '90%',
            paddingLeft: 10,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 20,
            marginTop: 3,
          }}
        >
          <View
            style={{
              backgroundColor: 'white',
              padding: 15,
              borderRightRadius: 0,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
              borderWidth: 2,
              borderRightWidth: 0,
            }}
          >
            <Icon name="address-card" size={20} color="#333" />
          </View>
          <TextInput
            placeholder='Address'
            style={{
              backgroundColor: 'white',
              borderRadius: 5,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderWidth: 2,
              borderLeftWidth: 0,
              width: '87.3%',
              height: 50,
            }}
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#40b383',
            padding: 13,
            borderRadius: 5,
            marginTop: 10,
            alignItems: 'center',
            width: '60%',
          }}
          onPress={handleUpdate}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: '800',
              color: 'white',
            }}
          >
            Update
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            padding: 13,
            borderRadius: 5,
            marginTop: 10,
            alignItems: 'center',
            borderWidth: 2,
            width: '90%',
          }}
          onPress={handleLogout}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
  );
};

export default UserDetails;