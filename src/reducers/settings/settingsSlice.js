import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: window.matchMedia('(prefers-color-scheme: dark)'),
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
    setPlatform: (state, action) => {
      state.platform = action.payload;
    },
  },
});

export const { setDarkMode, setPlatform } = settingsSlice.actions;

export default settingsSlice.reducer;
