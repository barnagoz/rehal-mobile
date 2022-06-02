import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// screens
import Szabalyok from "./screens/szabalyok.js";
import Bekuldes from "./screens/bekuldes.js";
import Idozito from "./screens/idozito.js";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Játékszabályok">
        <Tab.Screen
          name="Játékszabályok"
          component={Szabalyok}
          options={{
            tabBarLabel: "Játékszabályok",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Beküldés"
          component={Bekuldes}
          options={{
            tabBarLabel: "Beküldés",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="plus-circle-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Időzítő"
          component={Idozito}
          options={{
            tabBarLabel: "Időzítő",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="timer" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
