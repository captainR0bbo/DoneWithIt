import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AppImageInput from "./AppImageInput";
import AppText from "./AppText";
import defaultStyles from "../config/styles";

function AppImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {
  return (
    <View style={styles.container}>
      {imageUris.map((uri) => (
        <View key={uri} style={styles.image}>
          <AppImageInput
            imageUri={uri}
            onChangeImage={() => onRemoveImage(uri)}
          />
        </View>
      ))}
      <AppImageInput onChangeImage={onAddImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default AppImageInputList;
