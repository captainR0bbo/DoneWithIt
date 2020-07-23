import client from "./client";

const endpoint = "/messages";
const message = (messageInfo) => client.post(endpoint, messageInfo);

export default {
  message,
};
