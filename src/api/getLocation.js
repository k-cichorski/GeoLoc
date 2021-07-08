import { GET_GEO_JSON_URL } from "../../config";
import { toggleSearch } from '../redux/slices/appStateSlice';
import { newLocation } from '../redux/slices/locationSlice';

function handleError(err) {
  console.error(err);
  alert(`${err}. Check the console for more information.`);
  return null
}

function getLocation({ location, label }) {
  return async function (dispatch) {
    const fetchUrl = `${GET_GEO_JSON_URL}?${new URLSearchParams(location)}`;
    let response, geoJson;
    dispatch(toggleSearch());
    try {
      response = await fetch(fetchUrl);
      geoJson = await response.json();
    } catch (err) {
      return handleError(err);
    } finally {
      dispatch(toggleSearch());
    }
    const positions = geoJson.coordinates[0].map(([lng, lat]) => [lat, lng]);
    dispatch(
      newLocation({
        positions: positions,
        label,
        coords: location
      })
    );
  }
}

export default getLocation;