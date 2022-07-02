import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Image, Dimensions, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeCarousel from '../components/homeCarousel';

const logo = require('../assets/logo.png');

export default function Kezdolap() {
  const [Fav, setFav] = useState('');
  const SLIDER_WIDTH = Dimensions.get('window').width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.95);

  async function valami() {
    const favourites = await AsyncStorage.getItem('@favourite');
    if (favourites) {
      setFav(favourites);
    }
    // eslint-disable-next-line no-useless-return
    return;
  }

  useFocusEffect(
    useCallback(() => {
      async function getFavourites() {
        const favourites = await AsyncStorage.getItem('@favourites');
        if (favourites) {
          setFav(favourites);
        }
        // eslint-disable-next-line no-useless-return
        return;
      }
      getFavourites();
    }, [])
  );
  return (
    <View
      style={{
        marginTop: 40,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
      }}
    >
      <Image source={logo} style={{ width: SLIDER_WIDTH * 0.55, height: 50, marginBottom: 2 }} />
      <HomeCarousel sliderWidth={SLIDER_WIDTH} itemWidth={ITEM_WIDTH} />
      <Text>{Fav}</Text>
    </View>
  );
}
