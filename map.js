const axios = require("axios");

module.exports.geocode = async (address) => {
  const apiKey = process.env.MAP_API;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

  const response = await axios.get(url);
  const data = response.data;

  if (data.status === "OK" && data.results.length > 0) {
    const loc = data.results[0].geometry.location;
    return {
      type: "Point",
      coordinates: [loc.lng, loc.lat], // GeoJSON format
    };
  }
};
