import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  SafeAreaView,
  Image,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  const handleTxtPress = () =>
    Alert.alert("button tapped", "message", [
      { text: "Yes", onPress: () => console.log("yes") },
      { text: "No", onPress: () => console.log("No") },
    ]); //console.log("Text pressed");
  //console.log(Dimensions.get("screen"));
  const { landscape } = useDeviceOrientation();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppText>I love react native</AppText>
      <MaterialCommunityIcons name="email" size={60} color="dodgerblue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    //alignItems: "center",
    //justifyContent: "center",
  },
});
