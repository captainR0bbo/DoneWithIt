import React, { useState } from "react";
import { StyleSheet, Modal } from "react-native";
import * as Progress from "react-native-progress";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import AppFormImagePicker from "../components/forms/AppFormImagePicker";
import useLocation from "../hooks/useLocation";
import listingsApi from "../api/listings";
import useApi from "../hooks/useApi";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  images: Yup.array().min(1, "Please select at least one image."),
  title: Yup.string().required().label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().optional().label("Description"),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

function ListingEditScreen(props) {
  const location = useLocation();

  const [progress, setProgress] = useState();

  const createListingApi = useApi(listingsApi.createListing);

  const updateProgress = ({ loaded, total }) => {
    if (total > 0) {
      setProgress(loaded / total);
    }
  };

  const submitData = (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("price", values.price);
    formData.append("description", values.description);
    formData.append("categoryId", values.category.value);
    formData.append("location", JSON.stringify(location));
    values.images.map((uri) => {
      var filename = uri.substring(uri.lastIndexOf("/") + 1);
      formData.append("images", {
        uri: uri,
        type: "image/jpeg",
        name: filename,
      });
    });

    createListingApi.request(formData, updateProgress);
  };

  return (
    <>
      <Screen style={styles.container}>
        <AppForm
          initialValues={{
            images: [],
            title: "",
            price: 0,
            description: "",
            category: null,
          }}
          onSubmit={(values) => submitData(values)} //console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormImagePicker name="images" />
          <AppFormField
            autoCapitalize="words"
            autoCorrect={false}
            maxLength={255}
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
            numberOfColumns={3}
            PickerItemComponent={CategoryPickerItem}
            placeholder="Categories"
            width="50%"
          />
          <AppFormField
            keyboardType="decimal-pad"
            maxLength={255}
            multiline
            name="description"
            numberOfLines={3}
            placeholder="Description"
            textContentType="none"
          />
          <SubmitButton title="Post" />
        </AppForm>
        <ErrorMessage
          error="Couldn't post the listing. Try again."
          visible={createListingApi.error}
        />
      </Screen>
      <Modal visible={createListingApi.loading} animationType="slide">
        <Screen>
          <Progress.Bar
            borderWidth={0}
            color={colors.primary}
            progress={progress}
            width={null}
            style={styles.progress}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  progress: {
    height: 20,
    marginTop: "80%",
    //padding: 10,
  },
});

export default ListingEditScreen;
