import React from "react";
import { StyleSheet, Image, View } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.img} source={image} />
      <AppText>{title}</AppText>
      <AppText>{subTitle}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  img: {
    width: "100%",
    height: 200,
  },
});

export default Card;
