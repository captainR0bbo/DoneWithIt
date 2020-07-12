import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";

function AccountNavigator(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ headerTransparent: false, headerTitle: "" }}
    >
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{ headerTitle: "Account" }}
      />
      <Stack.Screen
        name="MessagesScreen"
        component={MessagesScreen}
        options={{ headerTitle: "Messages" }}
      />
    </Stack.Navigator>
  );
}

export default AccountNavigator;
