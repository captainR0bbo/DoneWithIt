import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

function FeedNavigator(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ headerTransparent: false, headerTitle: "" }}
    >
      <Stack.Screen
        name="ListingsScreen"
        component={ListingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListingDetailsScreen"
        component={ListingDetailsScreen}
      />
    </Stack.Navigator>
  );
}

export default FeedNavigator;
