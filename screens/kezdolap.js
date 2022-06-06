import React from "react";
import Carousel from "react-native-snap-carousel";
import { ImageBackground, View, Text } from "react-native";

export default function Kezdolap() {
  const testdata = [
    {
      title: "hdlkashdakjdhalksjdhalksdhalkjdhalksjhasdhlkjhaslkasdh",
      image: require('./a.jpeg')
    },
    {
      title: "hdlkashdakjdhalksjdhalksdhalkjdhalksjhasdhlkjhaslkasdh2",
      image: require('./a.jpeg')
    },
    {
      title: "hdlkashdakjdhalksjdhalksdhalkjdhalksjhasdhlkjhaslkasdh3",
      image: require('./a.jpeg')
    },
  ];

  const _renderItem = ({ item }) => {
    return (
      <View style={{ 
          width: 280 }}>
          <ImageBackground
          source={require('./a.jpeg')}
          resizeMode="cover"
        ></ImageBackground>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={{ marginTop: 30 }}>
      <Text>Kezdőlap</Text>
      <Carousel
        data={testdata}
        renderItem={_renderItem}
        sliderWidth={300}
        itemWidth={280}
        loop={true}
        autoplay={true}
      />
    </View>
  );
}
