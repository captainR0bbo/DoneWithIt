import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().optional().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { value: 1, label: "Furniture" },
  { value: 2, label: "Electronics" },
  { value: 3, label: "Outdoor" },
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ title: "", price: 0, description: "", category: null }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="words"
          autoCorrect={false}
          name="title"
          placeholder="Title"
          textContentType="name"
        />
        <AppFormField
          keyboardType="decimal-pad"
          maxLength={8}
          name="price"
          placeholder="Price"
          textContentType="none"
          width={120}
        />
        <AppFormPicker
          icon="account"
          items={categories}
          name="category"
          placeholder="Categories"
          width="50%"
        />
        <AppFormField
          keyboardType="decimal-pad"
          name="description"
          placeholder="Description"
          textContentType="none"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
