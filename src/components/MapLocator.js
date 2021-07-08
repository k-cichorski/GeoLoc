import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { useSelector, useDispatch } from 'react-redux';
import { getUserLocation } from '../api/getLocation';

function MapLocator() {
  const { findUser, positions, zoom, userLocation } = useSelector(state => state.location);
  const dispatch = useDispatch();
  const map = useMap();

  const isUserLocEqualToMapCntr = (userLocation, mapCenter) => {
    if (userLocation === null)
      return false
    return !(Math.abs(userLocation.lat - mapCenter.lat) > 0.04 || Math.abs(userLocation.lng - mapCenter.lng) > 0.06)
  };

  useEffect(() => {
    const mapCenter = map.getCenter();
    if (findUser && !isUserLocEqualToMapCntr(userLocation, mapCenter)) {
      dispatch(
        getUserLocation(map)
      );
    }
  }, [findUser]);

  useEffect(() => {
    if (positions && positions[0]) {
      map.flyTo(positions[0], zoom);
    }
  }, [positions]);

  return <></>
}

export default MapLocator;