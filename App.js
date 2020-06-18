import React from "react";
import { StyleSheet, Platform, StatusBar, View } from "react-native";

import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  return <ListingDetailsScreen />;
}

const styles = StyleSheet.create({
  cards: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});
