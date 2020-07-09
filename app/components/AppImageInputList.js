import React, { useRef } from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import AppImageInput from "./AppImageInput";
import AppText from "./AppText";
import defaultStyles from "../config/styles";

function AppImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal={true}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
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
      </ScrollView>
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
