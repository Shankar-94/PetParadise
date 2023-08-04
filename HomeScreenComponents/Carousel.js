import React, { useState, useEffect } from 'react';
import { View, Image, Text, Dimensions, Animated, Easing } from 'react-native';

const Carousel = () => {
  const carouselData = [
    {
      image: require('../assets/birds/african-grey-parrot.jpg'),
    },
    {
      image: require('../assets/birds/amazon-parrot.jpg'),
    },
    {
      image: require('../assets/birds/Budgerigar.jpg'),
    },
    {
      image: require('../assets/birds/Cockatiel.jpg'),
    },
    {
      image: require('../assets/birds/Cockatoo.jpg'),
    },
    {
      image: require('../assets/birds/Conure.jpg'),
    },
    {
      image: require('../assets/birds/Eclectus-Parrot.jpg'),
    },
    {
      image: require('../assets/birds/Lovebird.jpg'),
    },
    {
      image: require('../assets/birds/Macaw.jpg'),
    },
    {
      image: require('../assets/birds/Parakeet.jpg'),
    },
    {
      image: require('../assets/birds/Quaker-Parrot.jpg'),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width;

  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Increment the current index to show the next image
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 5000); // Change image every 5 seconds

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    // Animate the carousel transition
    Animated.timing(animatedValue, {
      toValue: currentIndex,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [currentIndex, animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: carouselData.map((_, index) => index),
    outputRange: carouselData.map((_, index) => index * -screenWidth),
  });

  return (
    <View style={{ width: screenWidth, height: 300 }}>
      <Animated.View
        style={{
          flexDirection: 'row',
          transform: [{ translateX }],
        }}
      >
        {carouselData.map((item, index) => (
          <View key={index} style={{ width: screenWidth }}>
            <Image
              source={item.image}
              style={{ width: '100%', height: '100%',}}
            />
          </View>
        ))}
      </Animated.View>
    </View>
  );
};

export default Carousel;