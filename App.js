import React, { useState, useEffect } from "react";
import AccountScreen from "./app/screens/AccountScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Screen from "./app/components/Screen";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Button, Image } from "react-native";
import AppImageInput from "./app/components/AppImageInput";
import AppImageInputList from "./app/components/AppImageInputList";

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const addImage = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const removeImage = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };
  return <ListingEditScreen />;
  /*return (
    <Screen>
      <AppImageInputList
        imageUris={imageUris}
        onAddImage={addImage}
        onRemoveImage={removeImage}
      />
    </Screen>
  );*/
  /*return (
    <Screen>
      <AppImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      />
    </Screen>
  );*/
  /*return (
    <Screen>
      <Button title="Select image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
    </Screen>
  );*/
}
