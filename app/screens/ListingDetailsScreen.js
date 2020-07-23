import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "react-native-expo-image-cache";
import * as Yup from "yup";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import messageApi from "../api/messages";
import useApi from "../hooks/useApi";

const validationSchema = Yup.object().shape({
  message: Yup.string().required().label("Message"),
});

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  const sendMessageApi = useApi(messageApi.message);
  const [error, setError] = useState();

  const handleSubmit = async (formData) => {
    const listingId = listing.id;
    const message = formData.message;
    const result = await sendMessageApi.request({ listingId, message });

    if (!result.ok) {
      handleError(result);
      return;
    }
  };

  const handleError = (result) => {
    if (result.data) setError(result.data.error);
    else {
      setError("An unexpected error occurred.");
      console.log(result);
    }
  };

  return (
    <View>
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
        uri={
          listing.images.length
            ? listing.images[0].url
            : require("../assets/no-image.jpg")
        }
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={listing.userImage}
            title="Mosh Homedani"
            subTitle="5 listings"
          />
        </View>
      </View>
      <AppForm
        initialValues={{
          message: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect
          maxLength={255}
          name="message"
          placeholder="Message..."
        />
        <SubmitButton title="Contact seller" />
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 7,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
