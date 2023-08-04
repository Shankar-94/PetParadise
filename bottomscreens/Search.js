import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Birds from '../src/API/Birds';

const Search = (props) => {
  const [searchText, setSearchText] = useState('');
  const [showClearIcon, setShowClearIcon] = useState(false);
  const [filteredData, setFilteredData] = useState(Birds); 

  const handleSearchTextChange = (text) => {
    setSearchText(text);
    setShowClearIcon(text.length > 0);

    const tempList = Birds.filter(item => {
      const searchTextLowercase = text.toLowerCase();
      return (
        item.name.toLowerCase().includes(searchTextLowercase) ||
        item.age.toLowerCase().includes(searchTextLowercase) ||
        item.gender.toLowerCase().includes(searchTextLowercase) ||
        item.price.toLowerCase().includes(searchTextLowercase)
      );
    });
    setFilteredData(tempList);
  };
  

  const clearSearchText = () => {
    setSearchText('');
    setShowClearIcon(false);
    setFilteredData(Birds);
  };

  const searchCards = ({item}) => {
    return <View>
      <TouchableOpacity 
      onPress={ ()=>
        props.navigation.navigate("BirdsDetails" ,
        {
          birdsId : item.id,
        })
      }
      style={{
        borderWidth: 3,
        marginTop: 15,
        borderColor: '#dadec5'
      }}>

      <View style={{
        flexDirection: 'row',
      }}>
      <Image 
        source={{uri:item.image1}}
        resizeMode='contain'
        style = {{
          aspectRatio: 1,
          width: '50%',
          height: undefined,
          marginRight: 10,
        }}
      />

      <Text
        style={{
          marginRight: 30,
          marginTop: 30,
          fontWeight: 'bold',
          fontSize: 15
        }}
      >{item.name}{'\n\n'} 
      Age: {item.age}{'\n\n'}
      Gender: {item.gender}{'\n\n'}
      Price: {item.price}
      </Text>
      </View>
    </TouchableOpacity>
    </View>
  }

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <View
        style={{
          height: 70,
          backgroundColor: '#40b3a9',
          width: '100%',
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
          marginTop: 120
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image
            source={require('../assets/icons/dove.png')}
            style={{
              height: 50,
              width: 50,
              marginLeft: 10,
              marginTop: 10
            }}
          />
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Basket');
            }}
          >
            <Image
              source={require('../assets/images/basket.png')}
              style={{
                height: 40,
                width: 40,
                marginRight: 13,
                marginTop: 15
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          backgroundColor: '#e5e8d5',
          elevation: 8,
          borderWidth: 2,
          borderColor: '#c5cf95',
        }}
      >
        <MaterialCommunityIcons
          name="bird"
          size={30}
          color="black"
          style={{
            marginLeft: 15,
            marginTop: 6
          }}
        />
        <TextInput
          placeholder="Search"
          underlineColor="transparent"
          value={searchText}
          onChangeText={handleSearchTextChange}
          autoCapitalize='none'
          style={{
            width: '70%',
            borderRightWidth: 0,
            height: 45,
            backgroundColor: '#e5e8d5',
            borderLeftRadius: 5
          }}
        />
        <View style={{ borderRadius: 0, borderLeftRadius: 0, paddingLeft: 10 }}>
          {showClearIcon ? (
            <TouchableOpacity onPress={clearSearchText}>
              <Entypo
                name="cross"
                size={25}
                color="black"
                style={{
                  marginTop: 10,
                  marginRight: 15
                }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Ionicons
                name="ios-search"
                size={25}
                color="black"
                style={{
                  marginTop: 10,
                  marginRight: 15
                }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View>
        <FlatList
          keyExtractor={(item) => item.id}
          data={filteredData}
          renderItem={searchCards}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Search;
