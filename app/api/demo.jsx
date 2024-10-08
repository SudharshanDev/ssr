// utils/api.js

import axios from 'axios';

const API_URL = 'https://67050b37031fd46a830e6801.mockapi.io/render/v1/renders';

// Function to fetch data (GET)
export const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};

// Function to post data (POST)
export const postData = async (newData) => {
  try {
    const response = await axios.post(API_URL, newData);
    return response.data;
  } catch (error) {
    console.error('Error posting data', error);
    throw error;
  }
};
