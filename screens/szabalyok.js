import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SzabalyHome from "../szabalyok/home.js"
import ALehetoseg from "../szabalyok/a.js"
import BLehetoseg from "../szabalyok/b.js"
import { View, Text } from "react-native";

export default function Szabalyok() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={SzabalyHome} />
      <Stack.Screen name="A lehetőség" component={ALehetoseg}/>
      <Stack.Screen name="B lehetőség" component={BLehetoseg}/>
    </Stack.Navigator>
  );
}
