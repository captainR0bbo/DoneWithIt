import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

function FeedNavigator(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator mode="modal" screenOptions={{ headerTitle: "" }}>
      <Stack.Screen
        name="ListingsScreen"
        component={ListingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListingDetailsScreen"
        component={ListingDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default FeedNavigator;
