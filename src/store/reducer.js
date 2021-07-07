export const initialState = {
  positions: null,
  coords: {
    lat: 51.505,
    lng: -0.09
  },
  userCoords: {
    lat: 51.505,
    lng: -0.09
  },
  locName: 'City of London',
  zoom: 13,
  scrollWheelZoom: true
};

export const NEW_LOCATION = 'NEW_LOCATION';
export const NEW_LAT = 'NEW_LAT';
export const NEW_LNG = 'NEW_LNG';

export function action(type, payload) {
  return {
    type,
    payload
  }
}

function reducer(state, action) {
  switch (action.type) {
    case NEW_LOCATION:
      const { location, label, coords } = action.payload;
      return {
        ...state,
        positions: location,
        coords,
        userCoords: coords,
        locName: label
      }
    case NEW_LAT:
      return {
        ...state,
        userCoords: {
          ...state.userCoords,
          lat: action.payload
        }
      }
    case NEW_LNG:
      return {
        ...state,
        userCoords: {
          ...state.userCoords,
          lng: action.payload
        }
      }
    default:
      return state;
  }
}

export default reducer;