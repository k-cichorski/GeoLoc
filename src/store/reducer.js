export const initialState = {
  positions: null,
  coords: {
    lat: 51.505,
    lng: -0.09
  },
  locName: 'City of London',
  zoom: 13,
  scrollWheelZoom: true
};

export const NEW_LOCATION = 'NEW_LOCATION';

function reducer(state, action) {
  switch(action.type){
      case NEW_LOCATION:
          const { location, label, coords } = action.payload;
          return {
              ...state,
              positions: location,
              coords,
              locName: label
          }
      default:
          return state;
  }
}

export default reducer;