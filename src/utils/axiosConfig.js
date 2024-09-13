// axiosConfig.js

import axios from 'axios';

// const baseURL = 'http://localhost:8000/api/';
// const baseURL = 'https://server.bluekitestore.com';
const baseURL = 'http://16.170.252.34/api/';

const axiosInstance = axios.create({
  baseURL: baseURL, // Base URL of your API
});

export default axiosInstance;
export { baseURL };
