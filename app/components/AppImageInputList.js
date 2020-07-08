import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AppImageInput from "./AppImageInput";
import AppText from "./AppText";
import defaultStyles from "../config/styles";

function AppImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={imageUris}
        horizontal={true}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          //<AppText style={defaultStyles.text}>{item.imageUri}</AppText>
          <AppImageInput
            imageUri={item.imageUri}
            onChangeImage={() => onRemoveImage(item.id)}
          />
        )}
      />
      <AppImageInput onChangeImage={onAddImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppImageInputList;
