import client from "./client";

const endpoint = "/messages";
const send = (message, listingId) =>
  client.post(endpoint, { message, listingId });

export default {
  send,
};
