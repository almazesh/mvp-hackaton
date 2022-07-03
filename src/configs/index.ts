import axios, { Axios } from "axios";
import Cookies from 'js-cookie'

export const baseURL = 'https://nuranov2004.pythonanywhere.com';

export const instance = axios.create({ baseURL })

instance.interceptors.request.use(
  (config: any) => {
    const authToken = Cookies.get('auth-token');

    if(authToken){
      config.headers.Authorization = `Bearer ${authToken}`
    }    

    return config
  },
  (error) => Promise.reject(error)
)