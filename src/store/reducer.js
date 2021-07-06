export const initialState = {
  positions: null,
  coords: [51.505, -0.09],
  locName: 'City of London',
  zoom: 13,
  scrollWheelZoom: true
};

export const NEW_LOCATION = 'NEW_LOCATION';

function reducer(state, action) {
  switch(action.type){
      case NEW_LOCATION:
          const { location, label } = action.payload;
          return {
              ...state,
              positions: location,
              coords: location[0],
              locName: label
          }
      default:
          return state;
  }
}

export default reducer;