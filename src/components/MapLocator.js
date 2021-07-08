import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { useSelector, useDispatch } from 'react-redux';
import { getUserLocation } from '../api/getLocation';

function MapLocator() {
  const { findUser, positions, zoom } = useSelector(state => state.location);
  const dispatch = useDispatch();
  const map = useMap();
  
  useEffect(() => {
    if (findUser) {
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