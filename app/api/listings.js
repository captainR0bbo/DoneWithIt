import client from "./client";

const endpoint = "/listings";
const getListings = () => client.get(endpoint);

const createListing = (formData) => client.post(endpoint, formData);

export default {
  getListings,
  createListing,
};
