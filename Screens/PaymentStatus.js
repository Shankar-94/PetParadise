import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import Auth from '@react-native-firebase/auth';

const PaymentStatus = ({ navigation, route }) => {
  const { status, paymentId, itemsData } = route.params;

  useEffect(() => {
    // Check if the payment is successful
    if (status === 'success') {
      // Call the function to place the order
      orderPlaced();
    }
  }, [status]);

  const orderPlaced = async () => {
    try {
      const currentUser = Auth().currentUser;
      if (!currentUser) {
        return;
      }

      // Create an order document in the 'orders' collection
      await firestore().collection('orders').add({
        userId: currentUser.uid,
        name: currentUser.displayName,
        email: currentUser.email,
        items: itemsData,
        paymentId: paymentId,
        status: status,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

      // Store the same data in the 'bookings' collection
      await storeBookingData(currentUser.uid, itemsData);

      // Clear the basket by deleting all items from Firestore collection for the current user
      await firestore().collection('basket').doc(currentUser.uid).delete();
    } catch (error) {
      console.log('Error placing order:', error);
    }
  };

  const storeBookingData = async (userId, itemsData) => {
    try {
      // Create a booking document in the 'bookings' collection
      await firestore().collection('bookings').add({
        userId: userId,
        items: itemsData,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
    } catch (error) {
      console.log('Error storing booking data:', error);
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={status === 'success' ? require('../assets/images/Success.gif') : require('../assets/images/Failed.gif')}
        style={styles.icons}
      />
      <Text style={styles.msg}>{status === 'success' ? 'Payment Successful' : 'Payment Failed'}</Text>
      <TouchableOpacity style={styles.home} onPress={() => navigation.navigate('Orders',
      {
        itemsData,
      })}>
        <Text style={styles.buttonText}>My Bookings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  icons: {
    width: 200,
    height: 200,
  },
  msg: {
    fontSize: 25,
    fontWeight: '500',
  },
  home: {
    backgroundColor: '#40b383',
    marginTop: 25,
    width: '40%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default PaymentStatus;
