import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SzabalyHome from '../szabalyok/home';
import ALehetoseg from '../szabalyok/a';
import BLehetoseg from '../szabalyok/b';

export default function Szabalyok() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={SzabalyHome} />
      <Stack.Screen name="A lehetőség" component={ALehetoseg} />
      <Stack.Screen name="B lehetőség" component={BLehetoseg} />
    </Stack.Navigator>
  );
}
