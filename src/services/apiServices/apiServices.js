import axios from 'axios';
import Cookies from 'js-cookie';

export const API_URL = process.env.REACT_APP_API_URL;

const axiosClient = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("authToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const apiServiceAuth = {
  signUp: async (name, userName, email, password) => {
    try {
      console.log(name, userName, email, password)
      // const response = await axiosClient.post("/auth/signUp", { name, userName, email, password })
      // axiosClient.defaults.headers.common[
      //   "Authorization"
      // ] = `Bearer ${response.data.access_token}`;
      // return response;
    } catch (error) {
      throw error;
    }
  },

  signIn: async (email, password) => {
    try {
      console.log(email, password)
      // const response = await axiosClient.post("/auth/signIn", { email, password })
      // axiosClient.defaults.headers.common[
      //   "Authorization"
      // ] = `Bearer ${response.data.access_token}`;
      // return response;
    } catch (error) {
      throw error;
    }
  },

  signOut: async () => {
    axiosClient.defaults.headers.common[
      "Authorization"
    ] = undefined;

    try {
      const response = await axiosClient.get('/auth/removeCookie');
      return response;
    } catch (error) {
      throw error;
    }
  },

  verifyEmail: async (linkToken) => {
    try {
      const response = await axiosClient.post('/auth/verifyEmail', { linkToken });
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export const apiService = {
  getMyInfo: async () => {
    try {
      const response = await axiosClient.get('/user/myInfo');
      return response;
    } catch (error) {
      // if (error.response.status === 401) {
      //   redirectToLogin();
      // }
      throw error;
    }
  },
};