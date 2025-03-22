import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import GroceryListScreen from "../screens/GroceryListScreen";
import HomeScreen from "../screens/HomeScreen";
import MealPlanningScreen from "../screens/MealPlanningScreen";

export type RootStackParamList = {
  Home: undefined;
  MealPlanning: undefined;
  GroceryList: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MealPlanning" component={MealPlanningScreen} />
        <Stack.Screen name="GroceryList" component={GroceryListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
