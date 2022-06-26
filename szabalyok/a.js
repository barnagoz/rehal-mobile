import React from 'react';
import { Text, Button, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function A() {
  async function saveFavourites() {
    // getting the current favourite list
    let favourites = JSON.parse(await AsyncStorage.getItem('@favourite'));
    if (favourites == null) {
      favourites = [{ name: 'A játékszabály', link: 'A lehetőség' }];
    } else {
      favourites.push({ name: 'A játékszabály', link: 'A lehetőség' });
    }
    // saving the favourite list
    await AsyncStorage.setItem('@favourites', JSON.stringify(favourites));
  }
  return (
    <View>
      <Text>A</Text>
      <Button title="Kedvecekbe rak" onPress={saveFavourites} />
    </View>
  );
}
