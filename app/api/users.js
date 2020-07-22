import client from "./client";

const endpoint = "/users";
const register = (userInfo) => client.post(endpoint, userInfo);

export default {
  register,
};
