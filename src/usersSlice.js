import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    userList: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchUsersStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess: (state, action) => {
      state.userList = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addUserSuccess: (state, action) => {
      state.userList.push(action.payload);
    },
    updateUserSuccess: (state, action) => {
      const { id, updatedData } = action.payload;
      const userIndex = state.userList.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        state.userList[userIndex] = { ...state.userList[userIndex], ...updatedData };
      }
    },
    deleteUserSuccess: (state, action) => {
      const id = action.payload;
      state.userList = state.userList.filter((user) => user.id !== id);
    },
  },
});

export const {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
  addUserSuccess,
  updateUserSuccess,
  deleteUserSuccess,
} = usersSlice.actions;

export default usersSlice.reducer;
