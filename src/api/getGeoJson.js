import { GET_GEO_JSON_URL } from "../../config";

export const getGeoJson = async function (location) {
  const fetchUrl = `${GET_GEO_JSON_URL}?${new URLSearchParams(location)}`;
  const response = await fetch(fetchUrl);
  const geoJson = await response.json();
  console.log(geoJson);
};