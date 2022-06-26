import React, {useEffect, useState} from "react";
import { View, Image, Dimensions, Text, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import HomeCarousel from "../components/homeCarousel.js"

export default function Kezdolap() {
  const [Fav, setFav] = useState('')
  const SLIDER_WIDTH = Dimensions.get('window').width
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.95)
    async function valami () {
      const favourites = await AsyncStorage.getItem('@favourite')
    if (favourites) {
       setFav(favourites);
    }
    }
  
  return (
    <View style={{ marginTop: 40, flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "start"}}>
      <Image source={require('../assets/logo.png')} style={{width: SLIDER_WIDTH * 0.55, height: 50, marginBottom:2}}/>
     <HomeCarousel sliderWidth={SLIDER_WIDTH} itemWidth={ITEM_WIDTH}/>
     <Button onPress={valami} title="Update" />
     <Text>{Fav}</Text>
    </View>
  );
}
