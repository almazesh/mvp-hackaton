import axios from "axios";

export const baseURL = 'https://mvp-crafters-default-rtdb.asia-southeast1.firebasedatabase.app';

export const instance = axios.create({ baseURL })
