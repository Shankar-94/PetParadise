import { View, Text, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Carousel from '../HomeScreenComponents/Carousel'
import Birds from '../src/API/Birds'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Home = (props) => {

  const birdsCard = ({item}) => {
    return <View style={{
      paddingHorizontal: 20
    }}>
      <View style={{
        padding: 30,
        backgroundColor: 'rgba(255 ,255, 255, 0.90)',
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: 'grey',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
        marginVertical: 30
      }}>

        <View>
          <Image
            source={{uri:item.image1}}
            resizeMode='contain'
            style={{
              width: '100%',
              height: undefined,
              aspectRatio: 1,
            }}
          />
        </View>

        <Text style={{
          fontSize: 22,
          color: '#344055',
          textTransform: "uppercase",
          fontWeight: '500',
          paddingBottom: 15,
          alignItems: 'center'
        }}>{item.name}</Text>

        <View style={{
          flexDirection: 'row',
          borderBottomWidth: 2,
          borderRadius:10,
          padding: 5
        }}>
        {/* <Fontisto name="date" size={20} /> */}
        <Image 
                source={require('../assets/icons/age.png')} 
                style={{ 
                  width: 30, 
                  height: 30,  
                  marginRight: 10,
                  marginTop:5 
                  }} />
        <Text style={{
          textAlign: 'justify',
          paddingBottom: 15,
          color: '#7d7d7d',
          fontWeight: '800',
          marginTop: 10,
          fontSize: 15
        }}>{item.age}</Text>
        </View>

        <View style={{
          flexDirection: 'row',
          borderBottomWidth: 2,
          borderRadius:10,
          padding: 5,
          marginTop: 5,
        }}>
        <Image 
                source={require('../assets/icons/gender.png')} 
                style={{ 
                  width: 30, 
                  height: 30,  
                  marginRight: 10,
                  marginTop:5 
                  }} />
        <Text style={{
          textAlign: 'justify',
          paddingBottom: 15,
          color: '#7d7d7d',
          fontWeight: '800',
          marginTop: 10
        }}>{item.gender}</Text>
        </View>

        <View style={{
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <FontAwesome name = 'rupee' size={20} color='black'/>
        <Text style={{
          textAlign: 'justify',
          paddingBottom: 15,
          color: '#7d7d7d',
          fontWeight: '800',
          fontSize: 15,
          marginLeft: 10
        }}>{item.price}</Text>
        </View>

        <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >

          <TouchableOpacity
            style={{
              backgroundColor: '#40b383',
              borderRadius: 5, 
              paddingVertical: 10,
              paddingHorizontal: 20,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={ ()=>
              props.navigation.navigate("BirdsDetails" ,
              {
                birdsId : item.id,
              })
            }
          >
            <Text style={{
              color: '#eee',
              fontWeight: '500'
            }}>
              More Details
            </Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
  }

  return (
    <SafeAreaView>
        <Carousel/>
      <View style={{marginTop: 10}}>
        <FlatList 
          keyExtractor={(item) => item.id}
          data={Birds}
          renderItem={birdsCard}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  )
}

export default Home