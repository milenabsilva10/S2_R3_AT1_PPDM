import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 

import Home from "./src/pages/Home";
import Gps from "./src/pages/Gps";
import Camera from "./src/pages/Camera";
import Acelerometro from "./src/pages/Acelerometro";




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Gps" component={Gps} />
        <Stack.Screen name="Camera" component={Camera} /> 
        <Stack.Screen name="Aelerometro" component={Acelerometro} /> 

      </Stack.Navigator>
    </NavigationContainer>
  );
}
