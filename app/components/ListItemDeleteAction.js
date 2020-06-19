import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TouchableHighlight } from "react-native-gesture-handler";

function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={colors.white}
        />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 90,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ListItemDeleteAction;
