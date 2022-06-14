import React from "react";
import Carousel from "react-native-snap-carousel";
import { Image, Dimensions, View, Text } from "react-native";

export default function Kezdolap() {
  const SLIDER_WIDTH = Dimensions.get('window').width
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.95)
  const testdata = [
    {
      title: "Megjelent a ReHal applikáció",
      description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      imgUrl: "https://colourlex.com/wp-content/uploads/2021/02/ivory-black-painted-swatch-300x300.jpg",
    },
    {
      title: "Megjelent a ReHal applikáció",
      description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      imgUrl: "https://colourlex.com/wp-content/uploads/2021/02/ivory-black-painted-swatch-300x300.jpg",
    },
    {
      title: "Megjelent a ReHal applikáció",
      description: "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      imgUrl: "https://colourlex.com/wp-content/uploads/2021/02/ivory-black-painted-swatch-300x300.jpg",
    },
  ];

  const _renderItem = ({ item }) => {
    return (
      <View style={{ 
          width: ITEM_WIDTH, padding: 10, flex: 1, alignItems: 'center', flexDirection: 'column' }}>
          <Image
          source={{uri: item.imgUrl}}
          style={{width: ITEM_WIDTH, height: 200, borderRadius: 17.5, position: 'absolute', zIndex: 0}}
        ></Image>
        <Text style={{zIndex:1, color: 'white', fontWeight: 'bold', fontSize: '20px', textAlign: 'center', marginBottom: 5}}>{item.title}</Text>
        <Text style={{zIndex:1, color: 'white', fontWeight: "normal", fontSize: '17px'}}>{item.description}</Text>
      </View>
    );
  };

  return (
    <View style={{ marginTop: 40, flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "start"}}>
      <Image source={require('../assets/logo.png')} style={{width: SLIDER_WIDTH * 0.55, height: 50, marginBottom:2}}/>
      <Carousel
        data={testdata}
        renderItem={_renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        loop={true}
        autoplay={true}
      />
    </View>
  );
}
