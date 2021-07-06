import { GET_GEO_JSON_URL } from "../../config";

async function getLocation({location, label}) {
  const fetchUrl = `${GET_GEO_JSON_URL}?${new URLSearchParams(location)}`;
  const response = await fetch(fetchUrl);
  const geoJson = await response.json();
  const positions = geoJson.coordinates[0].map(([lng, lat]) => [lat, lng]);
  return Promise.resolve({
    location: positions,
    label,
    coords: location
  })
};

export default getLocation;