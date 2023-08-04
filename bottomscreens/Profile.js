import React from 'react';
import { View, TouchableOpacity, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/fleet.jpg')} style={styles.backgroundImage} resizeMode="cover">
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.contentContainer}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                props.navigation.navigate('UserDetails');
              }}
            >
              <View style={styles.iconBackground}>
                <Icon name="user" size={25} color="#333" />
              </View>
              <Text style={styles.buttonText}>Profile</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                props.navigation.navigate('Orders');
              }}
            >
              <View style={styles.iconBackground}>
                <Icon name="envira" size={25} color="#333" />
              </View>
              <Text style={styles.buttonText}>Orders</Text>
            </TouchableOpacity> */}
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    paddingTop: 50,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: '#c5cadb',
    padding: 13,
    width: '80%'
  },
  iconBackground: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Profile;
