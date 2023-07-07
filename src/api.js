import axios from 'axios';

const API_BASE_URL = 'http://3.109.214.83:4000';

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/employee/new`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/employeeList`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUserById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/employee/info/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/employee/edit`, { id, ...userData });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/employee/del/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
