import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from "./apps/screens/HomeScreen"
import CoffeeDetailsScreen from "./apps/screens/CoffeeDetailsScreen";
import Wallet from "./apps/screens/Wallet";
import DonateBtn from './apps/components/donateBtn';
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={CoffeeDetailsScreen} />
        <Stack.Screen name="DonateBtn" component={DonateBtn} />

        <Stack.Screen name="Wallet" component={Wallet} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}