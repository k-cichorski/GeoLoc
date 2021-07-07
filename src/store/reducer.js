export const initialState = {
  positions: null,
  coords: { lat: 51.5123443, lng: -0.0909852 },
  userCoords: { lat: 51.5123443, lng: -0.0909852 },
  locName: 'City of London, London, UK',
  zoom: 13,
  scrollWheelZoom: true,
  searching: false
};

export const NEW_LOCATION = 'NEW_LOCATION';
export const NEW_LAT = 'NEW_LAT';
export const NEW_LNG = 'NEW_LNG';
export const TOGGLE_SEARCHING = 'TOGGLE_SEARCHING';

export function action(type, payload=null) {
  return {
    type,
    payload
  }
}

export function toggleSearching(dispatch) {
  dispatch(
    action(TOGGLE_SEARCHING)
  );
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
    case TOGGLE_SEARCHING:
      return {
        ...state,
        searching: !state.searching
      }
    default:
      return state;
  }
}

export default reducer;