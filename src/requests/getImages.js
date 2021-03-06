import axios from "axios";

const getImages = (query, page) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${query}&page=${page}`)
      .then((response) => {
        const imageResults = response.data.collection.items;
        const parsedImages = imageResults.filter(
          (image) => image.data[0].media_type === "image"
        );
        const images = parsedImages.map((image) => ({
          url: image.links[0].href,
          title: image.data[0].title,
        }));
        return images;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default getImages;
