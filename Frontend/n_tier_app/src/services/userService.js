import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1/users';

export const fetchUsers = async () => {
  const response = await axios.get(API_URL);
  console.log("users list : ", response)
  return response.data;
};

export const createUser = async (name) => {
  const response = await axios.post(API_URL, { name });
  return response.data;
};