import { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure, addUserSuccess, updateUserSuccess, deleteUserSuccess } from './usersSlice';
import { createUser, getUsers, getUserById as getUser, updateUser, deleteUser } from './api';

export const getUserById = (id) => async (dispatch) => {
    try {
      const user = await getUser(id);
      dispatch(fetchUsersSuccess(user));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };

export const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUsersStart());
  try {
    const users = await getUsers();
    dispatch(fetchUsersSuccess(users));
  } catch (error) {
    dispatch(fetchUsersFailure(error.message));
  }
};

export const addUser = (userData) => async (dispatch) => {
  try {
    const newUser = await createUser(userData);
    dispatch(addUserSuccess(newUser));
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateUserById = (id, userData) => async (dispatch) => {
  try {
    const updatedUser = await updateUser(id, userData);
    dispatch(updateUserSuccess({ id, updatedData: updatedUser }));
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteUserById = (id) => async (dispatch) => {
  try {
    await deleteUser(id);
    dispatch(deleteUserSuccess(id));
  } catch (error) {
    throw new Error(error.message);
  }
};
