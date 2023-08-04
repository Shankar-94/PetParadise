import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import Auth from '@react-native-firebase/auth';
import RazorpayCheckout from 'react-native-razorpay';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import PaymentStatus from './PaymentStatus';

const Basket = (props) => {
  const [items, setBagItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const currentUser = Auth().currentUser;
        if (!currentUser) {
          setBagItems([]);
          setTotalPrice(0);
          return;
        }

        const currentUserUid = currentUser.uid;
        const uniqueImages = new Set();
        const list = [];
        const querySnapshot = await firestore().collection('basket').get();

        console.log('Total Birds: ', querySnapshot.size);

        if (!querySnapshot.empty) {
          let currentUserTotalPrice = 0;
          querySnapshot.forEach((documentSnapshot) => {
            const data = documentSnapshot.data().items;
            data.forEach((item) => {
              if (item.image1 && !uniqueImages.has(item.image1) && item.uid === currentUser.uid) {
                uniqueImages.add(item.image1);
                list.push(item);
                currentUserTotalPrice += item.price * item.qty;
              }
            });
          });

          console.log('Total Birds in the bag', querySnapshot.size);
          console.log('Birds: ', list);
          setBagItems(list);
          setTotalPrice(currentUserTotalPrice);
        } else {
          setBagItems([]);
          setTotalPrice(0);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchItems();
  }, []);

  const name = Auth().currentUser?.displayName;
  const email = Auth().currentUser?.email;

  const clearBasket = async () => {
    try {
      const currentUser = Auth().currentUser;
      if (!currentUser) {
        return;
      }

      // Remove all items from Firestore collection for the current user
      await firestore().collection('basket').doc(currentUser.uid).delete();
    } catch (error) {
      console.log('Error clearing basket:', error);
    }
  };

  const handlePayNow = () => {
    console.log('Pay Now');
    const options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.jpg',
      currency: 'INR',
      key: 'rzp_test_Q8sk1vmNvd9FIm',
      amount: String(totalPrice * 100),
      name: 'PetParadise',
      order_id: '', //Replace this with an order_id created using Orders API.
      prefill: {
        email: email,
        contact: '8904964346',
        name: name,
      },
      theme: { color: '#53a20e' },
    };
    RazorpayCheckout.open(options)
      .then((data) => {
        // Payment successful, clear the basket
        clearBasket();
        props.navigation.navigate('PaymentStatus', {
          status: 'success',
          paymentId: data.razorpay_payment_id,
          itemsData: items,
        });
      })
      .catch((error) => {
        props.navigation.navigate('PaymentStatus', {
          status: 'failed',
        });
      });
  };

  const handleRemoveItem = async (itemToRemove) => {
    try {
      const currentUser = Auth().currentUser;
      if (!currentUser) {
        return;
      }

      // Remove item from the FlatList state (items state)
      const updatedItems = items.filter((item) => item.image1 !== itemToRemove.image1);
      setBagItems(updatedItems);

      // Remove item from the Firestore collection
      await firestore()
        .collection('basket')
        .doc(currentUser.uid)
        .update({
          items: firestore.FieldValue.arrayRemove(itemToRemove),
        });

      // Recalculate the total price after removing the item
      const newTotalPrice = updatedItems.reduce((total, item) => total + item.price * item.qty, 0);
      setTotalPrice(newTotalPrice);
    } catch (error) {
      console.log('Error removing item:', error);
    }
  };

  const renderItem = ({ item }) => {
    const currentUser = Auth().currentUser;
    if (currentUser && item.uid === currentUser.uid) {
      return (
        <View style={styles.itemContainer}>
          <View style={styles.card}>
            <View>
              <Image source={{ uri: item.image1 }} style={styles.itemImage} />
            </View>
            <View style={{
              flexDirection: 'row'
            }}>
            <View>
              <View style={styles.name}>
                <MaterialCommunityIcons name="bird" size={30} style={styles.icon} />
                <Text style={styles.itemName}>{item.name}</Text>
              </View>
              <View style={styles.gender}>
                <Ionicons name="male-female" size={30} style={styles.icon} />
                <Text style={styles.malefemale}>{item.gender}</Text>
              </View>
              <View style={styles.price}>
                <FontAwesome name="rupee" size={25} style={styles.icon} />
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
              <View style={styles.moreDetails}>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('BirdsDetails', {
                      birdsId: item.id,
                    });
                  }}
                >
                  <Text style={styles.linkText}>More Details</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleRemoveItem(item)}>
                  <Text style={styles.removeText}>Remove</Text>
                </TouchableOpacity>
              </View>
              </View>
              <View>
              <View style={styles.qtyContainer}>
                <Text style={styles.qtyText}>qty: {item.qty}</Text>
              </View>
              </View>
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.itemContainer}>
          <Text style={styles.emptyBasketText}>Basket is empty</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <Feather name="home" color="white" size={28} style={styles.headerIcon} />
        </TouchableOpacity>
      </View>
      <FlatList data={items} keyExtractor={(item) => item.image1} renderItem={renderItem} />
      {items.length > 0 && (
        <View>
          <View style={styles.totalPriceContainer}>
            <Text style={styles.totalPriceText}>Total: </Text>
            <FontAwesome name="rupee" size={20} style={{
              marginTop: 14,
              marginLeft: 10
            }} />
            <Text style={styles.totalPrice}>{totalPrice}</Text>
          </View>
          <TouchableOpacity onPress={handlePayNow} style={styles.buyNowButton}>
            <Text style={styles.buyNowButtonText}>Pay Now</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: '8%',
    backgroundColor: '#40b383',
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginTop: 15,
    marginLeft: 15,
  },
  itemContainer: {
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
  card: {
    flexDirection: 'row',
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 30,
  },
  name: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  icon: {
    marginTop: 7,
    marginLeft: 20,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  gender: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  malefemale: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 6,
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 18,
  },
  moreDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
    borderWidth: 1,
    marginTop: 6,
    borderRadius: 5,
    borderColor: '#3d857b',
  },
  linkText: {
    color: '#3d857b',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  removeText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 15,
  },
  qtyContainer: {
    marginTop: 70,
  },
  qtyText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  emptyBasketText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPriceContainer: {
    flexDirection: 'row',
    marginLeft: 135,
  },
  totalPriceText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
  },
  totalPrice: {
    marginTop: 10,
    marginLeft: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  buyNowButton: {
    backgroundColor: '#40b383',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    width: '70%',
    marginLeft: 60,
  },
  buyNowButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Basket;
