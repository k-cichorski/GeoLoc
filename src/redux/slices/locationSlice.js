import { createSlice } from '@reduxjs/toolkit';

export const locationSlice = createSlice({
  name: 'location',
  initialState: {
    positions: null,
    coords: { lat: 51.5123443, lng: -0.0909852 },
    userCoords: { lat: 51.5123443, lng: -0.0909852 },
    locName: 'City of London, London, UK',
    zoom: 13,
    scrollWheelZoom: true,
    findUser: false,
    userLocation: null
  },
  reducers: {
    newLocation: (state, { payload }) => {
      const { positions, label, coords, userLocation=null } = payload;
      state.positions = positions;
      state.locName = label;
      state.coords = coords;
      state.userCoords = coords;
      state.findUser = false;
      state.userLocation = userLocation;
    },
    newLat: (state, { payload }) => {
      state.userCoords.lat = payload;
    },
    newLng: (state, { payload }) => {
      state.userCoords.lng = payload;
    },
    toggleFindUser: (state) => {
      state.findUser = !state.findUser;
    }
  },
});

export const { newLocation, newLat, newLng, toggleFindUser } = locationSlice.actions

export default locationSlice.reducer