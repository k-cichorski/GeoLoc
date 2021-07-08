import { createSlice } from '@reduxjs/toolkit';

export const appStateSlice = createSlice({
  name: 'appStateSlice',
  initialState: {
    searching: false
  },
  reducers: {
    toggleSearch: (state) => {
      state.searching = !state.searching;
    }
  },
});

export const { toggleSearch } = appStateSlice.actions

export default appStateSlice.reducer