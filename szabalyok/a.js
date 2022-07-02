import React from 'react';
import { Text, Button, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function A() {
  const saveFavourites = async () => {
    // getting the current favourite list
    let favourites = JSON.parse(await AsyncStorage.getItem('@favourites'));
    if (favourites == null) {
      favourites = [{ name: 'A játékszabály', link: 'A lehetőség' }];
    } else {
      favourites.push({ name: 'A játékszabály', link: 'A lehetőség' });
    }
    // saving the favourite list
    try {
      const string = JSON.stringify(favourites);
      await AsyncStorage.setItem('@favourites', string);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };
  return (
    <View>
      <Text>A</Text>
      <Button title="Kedvecekbe rak" onPress={saveFavourites} />
    </View>
  );
}
