import React, { useState, useEffect } from "react";
import AccountScreen from "./app/screens/AccountScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Screen from "./app/components/Screen";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  useEffect(async () => {
    const result = await ImagePicker.requestCameraRollPermissionsAsync();
  }, []);

  return <Screen></Screen>;
}
