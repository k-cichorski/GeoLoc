import { GET_GEO_JSON_URL } from "../../config";
import { toggleSearching } from '../store/reducer';

function handleError(err) {
  console.error(err);
  alert(`${err}. Check the console for more information.`);
  return null
}

async function getLocation({ location, label }, dispatch) {
  const fetchUrl = `${GET_GEO_JSON_URL}?${new URLSearchParams(location)}`;
  let response, geoJson;
  toggleSearching(dispatch);
  try {
    response = await fetch(fetchUrl);
    geoJson = await response.json();
  } catch (err) {
    return handleError(err);
  } finally {
    toggleSearching(dispatch);
  }
  const positions = geoJson.coordinates[0].map(([lng, lat]) => [lat, lng]);
  return Promise.resolve({
    location: positions,
    label,
    coords: location
  });
}

export default getLocation;