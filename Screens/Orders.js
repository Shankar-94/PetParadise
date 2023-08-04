import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import Auth from '@react-native-firebase/auth';

const Orders = ({ route, navigation }) => {
  const { itemsData } = route.params; // Receive itemsData from route.params
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch all the orders for the current user from Firestore
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const currentUser = Auth().currentUser;
      if (!currentUser) {
        return;
      }

      // Get the 'orders' subcollection for the current user
      const userOrdersRef = firestore().collection('users').doc(currentUser.uid).collection('orders');
      const snapshot = await userOrdersRef.orderBy('createdAt', 'desc').get();

      const userOrders = [];
      snapshot.forEach((doc) => {
        // Add each order data to the userOrders array
        userOrders.push({ id: doc.id, ...doc.data() });
      });

      // Merge the previous orders (userOrders) with the new order (itemsData)
      setOrders([...userOrders,...(itemsData?[{ id: 'newOrder', items: itemsData }] : [])]);
    } catch (error) {
      console.log('Error fetching orders:', error);
    }
  };

  const renderItem = ({ item }) => {
    // Check if it's a new order or a previous order
    if (item.id === 'newOrder') {
      // Implement how you want to render each item in the new order
      return (
        <View style={styles.itemContainer}>
          {/* Display the item details for the new order here */}
          <Image source={{ uri: item.items[0].image1 }} style={styles.itemImage} />
          <View style={styles.infoContainer}>
            <Text style={styles.itemName}>{item.items[0].name}</Text>
            <Text style={styles.itemGender}>{item.items[0].gender}</Text>
            <Text style={styles.itemPrice}>Price: {item.items[0].price*item.items[0].qty}</Text>
          </View>
        </View>
      );
    } else {
      // Implement how you want to render each item in the previous orders
      return (
        <View style={styles.itemContainer}>
          {/* Display the item details for previous orders here */}
          <Image source={{ uri: item.items[0].image1 }} style={styles.itemImage} />
          <View style={styles.infoContainer}>
            <Text style={styles.itemName}>{item.items[0].name}</Text>
            <Text style={styles.itemGender}>{item.items[0].gender}</Text>
            <Text style={styles.itemPrice}>Price: {item.items[0].price}</Text>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Bookings</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <TouchableOpacity 
      onPress={()=>{
        navigation.navigate('Home')
      }}
      style={{
        marginBottom: 550,
        marginLeft: 150,
        backgroundColor: '#40b383',
        marginRight: 150,
        height: 50,
        borderRadius: 8
      }}>
        <Text 
        style={{
          marginLeft: 10,
          marginTop: 15,
          color: 'white',
          fontWeight: 'bold'
        }}>Back To Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    borderWidth: 1,
    width: '90%',
    marginLeft: 20,
    marginTop: 10,
    elevation: 10,
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  infoContainer: {
    marginLeft: 10,
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemGender: {
    fontSize: 16,
    color: 'gray',
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Orders;