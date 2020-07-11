import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import { useRoute } from "@react-navigation/native";

function ListingDetailsScreen(props) {
  const route = useRoute();

  return (
    <View>
      <Image style={styles.image} source={route.params.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{route.params.title}</AppText>
        <AppText style={styles.price}>{route.params.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={route.params.userImage}
            title="Mosh Homedani"
            subTitle="5 listings"
          />
        </View>
      </View>
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
