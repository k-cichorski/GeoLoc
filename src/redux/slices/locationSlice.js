import { createSlice } from '@reduxjs/toolkit';

export const locationSlice = createSlice({
  name: 'location',
  initialState: {
    positions: null,
    coords: { lat: 51.5123443, lng: -0.0909852 },
    userCoords: { lat: 51.5123443, lng: -0.0909852 },
    locName: 'City of London, London, UK',
    zoom: 13,
    scrollWheelZoom: true
  },
  reducers: {
    newLocation: (state, action) => {
      const { positions, label, coords } = action.payload;
      state.positions = positions;
      state.locName = label;
      state.coords = coords;
      state.userCoords = coords;
    },
    newLat: (state, action) => {
      state.userCoords.lat = action.payload;
    },
    newLng: (state, action) => {
      state.userCoords.lng = action.payload;
    }
  },
});

export const { newLocation, newLat, newLng } = locationSlice.actions

export default locationSlice.reducer