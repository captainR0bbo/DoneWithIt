import client from "./client";

const endpoint = "/listings";
const getListings = () => client.get(endpoint);

const createListing = (formData, showUploadProgress) =>
  client.post(endpoint, formData, {
    onUploadProgress: (progress) => showUploadProgress(progress),
  });

export default {
  getListings,
  createListing,
};
