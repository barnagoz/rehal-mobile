import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { Image, Dimensions, View, Text } from 'react-native';

export default function HomeCarousel({ itemWidth, sliderWidth }) {
  const testdata = [
    {
      title: 'Megjelent a ReHal applikáció',
      description: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      imgUrl:
        'https://colourlex.com/wp-content/uploads/2021/02/ivory-black-painted-swatch-300x300.jpg',
    },
    {
      title: 'Megjelent a ReHal applikáció',
      description: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      imgUrl:
        'https://colourlex.com/wp-content/uploads/2021/02/ivory-black-painted-swatch-300x300.jpg',
    },
    {
      title: 'Megjelent a ReHal applikáció',
      description: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      imgUrl:
        'https://colourlex.com/wp-content/uploads/2021/02/ivory-black-painted-swatch-300x300.jpg',
    },
  ];

  function _renderItem({ item }) {
    return (
      <View
        style={{
          width: itemWidth,
          padding: 10,
          flex: 1,
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Image
          source={{ uri: item.imgUrl }}
          style={{
            width: itemWidth,
            height: 200,
            borderRadius: 17.5,
            position: 'absolute',
            zIndex: 0,
          }}
         />
        <Text
          style={{
            zIndex: 1,
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center',
            marginBottom: 5,
          }}
        >
          {item.title}
        </Text>
        <Text style={{ zIndex: 1, color: 'white', fontWeight: 'normal', fontSize: 17 }}>
          {item.description}
        </Text>
      </View>
    );
  }
  return (
    <Carousel
      data={testdata}
      renderItem={_renderItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      loop
      autoplay
    />
  );
}
