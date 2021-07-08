import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './slices/locationSlice';
import appStateReducer from './slices/appStateSlice';
import thunk from 'redux-thunk';

export default configureStore({
  reducer: {
    location: locationReducer,
    appState: appStateReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});