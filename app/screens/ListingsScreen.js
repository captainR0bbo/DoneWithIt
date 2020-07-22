import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import AppActivityIndicator from "../components/AppActivityIndicator";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <>
      <AppActivityIndicator visible={getListingsApi.loading} />
      <Screen style={styles.screen}>
        {getListingsApi.error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <AppButton title="Retry" onPress={getListingsApi.request} />
          </>
        )}
        {
          <FlatList
            data={getListingsApi.data}
            keyExtractor={(listing) => listing.id.toString()}
            refreshing={refreshing}
            onRefresh={getListingsApi.request}
            renderItem={({ item }) => (
              //<AppText>{item.images.length ? "true" : "false"}</AppText>
              <Card
                title={item.title}
                subTitle={"$" + item.price}
                imageUrl={item.images.length ? item.images[0].url : null}
                onPress={() =>
                  navigation.navigate(routes.LISTING_DETAILS, item)
                }
                thumbnailUrl={item.images[0].thumbnailUrl}
              />
            )}
          />
        }
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
