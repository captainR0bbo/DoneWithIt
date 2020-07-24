import React from "react";
import { View, StyleSheet, Keyboard, Alert } from "react-native";
import { Notifications } from "expo";
import * as Yup from "yup";

import messageApi from "../api/messages";
import { AppForm, AppFormField, SubmitButton } from "./forms";

const validationSchema = Yup.object().shape({
  message: Yup.string().required().label("Message"),
});

function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messageApi.send(message, listing.id);

    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Could not send the message.");
    }

    resetForm();

    Notifications.presentLocalNotificationAsync({
      title: "Awesome!",
      body: "Your message was sent to the seller.",
    });
  };

  return (
    <View>
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

export default ContactSellerForm;
