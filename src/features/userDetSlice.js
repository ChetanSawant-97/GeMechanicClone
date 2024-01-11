import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userDetails: {},
};

const userDetSlice = createSlice({
  name: 'userDetSlice',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

export const { setUserDetails } = userDetSlice.actions;

export default userDetSlice.reducer;
