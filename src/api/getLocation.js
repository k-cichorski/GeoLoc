import { GET_GEO_JSON_URL } from "../../config";
import { toggleSearch } from '../redux/slices/appStateSlice';
import { newLocation, toggleFindUser } from '../redux/slices/locationSlice';

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

function getUserLocation(map) {
  return function (dispatch) {
    dispatch(toggleSearch());
    dispatch(toggleFindUser());
    try {
      const location = map.locate();
      const handlePermission = (result) => {
        if (result.state == 'granted') {
          location.on('locationfound', ({ latitude: lat, longitude: lng }) => {
            dispatch(
              getLocation({
                location: { lat, lng },
                label: ''
              })
            );
            return
          });
        } else if (result.state == 'denied') {
          alert('You have to allow location access!');
        }
      };
      navigator.permissions.query({ name: 'geolocation' }).then(result => {
        handlePermission(result);
        result.onchange = () => handlePermission(result);
      });
    } catch (err) {
      return handleError(err)
    } finally {
      dispatch(toggleSearch());
    }
  }
}

export { getUserLocation };

export default getLocation;