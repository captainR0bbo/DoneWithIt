import client from "./client";

const endpoint = "/listings";
const getListings = () => client.get(endpoint);

const addListing = (listing, onUploadProgress) => {
  const formData = new FormData();
  formData.append("title", listing.title);
  formData.append("price", listing.price);
  formData.append("description", listing.description);
  formData.append("categoryId", listing.category.value);
  if (listing.location)
    formData.append("location", JSON.stringify(listing.location));
  listing.images.map((uri) => {
    var filename = uri.substring(uri.lastIndexOf("/") + 1);
    formData.append("images", {
      uri: uri,
      type: "image/jpeg",
      name: filename,
    });
  });

  return client.post(endpoint, formData, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  getListings,
  addListing,
};
