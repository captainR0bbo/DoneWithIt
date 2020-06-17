import React from "react";
import { StyleSheet, Platform, StatusBar, View } from "react-native";

import Card from "./app/components/Card";

export default function App() {
  return (
    <View style={styles.cards}>
      <Card
        title="Red jacket for sale"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cards: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});
