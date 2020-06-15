import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.signUpButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: colors.primary,
    //flex: 0.07,
    width: "100%",
    height: 70,
  },
  signUpButton: {
    backgroundColor: "blue",
    width: "100%",
    height: 70,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});

export default WelcomeScreen;
