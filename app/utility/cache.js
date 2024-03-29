import AsyncStorage from "@react-native-community/async-storage";
import dayjs from "dayjs";

const prefix = "cache";
const expiryInMinutes = 5;

const store = async (key, value) => {
  const cacheKey = prefix + key;

  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(cacheKey, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const isExpired = (item) => {
  const now = dayjs();
  const storedTime = dayjs(item.timestamp);
  return now.diff(storedTime, "minute") > expiryInMinutes;
};

const get = async (key) => {
  const cacheKey = prefix + key;

  try {
    const value = await AsyncStorage.getItem(cacheKey);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(cacheKey);
      return null;
    }

    return item.value;
  } catch (error) {
    console.log(error);
  }
};

export default {
  get,
  store,
};
