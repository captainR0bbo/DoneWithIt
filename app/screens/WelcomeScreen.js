import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "../config/colors";
import AppButton from "../components/AppButton";
import { Colors } from "react-native/Libraries/NewAppScreen";

function WelcomeScreen(props) {
  const navigation = useNavigation();
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell What You Don't Need </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate("LoginScreen")}
        />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("RegisterScreen")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
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
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
