import axios from "axios";
import { store } from "../index";
import { setLoadingOnAction } from "../redux/actions/actionSpinner";
import { localServ } from "./localServices";

export const BASE_URL = "https://airbnbnew.cybersoft.edu.vn";
export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgMjUiLCJIZXRIYW5TdHJpbmciOiIxNS8wNS8yMDIzIiwiSGV0SGFuVGltZSI6IjE2ODQxMDg4MDAwMDAiLCJuYmYiOjE2NjY3MTcyMDAsImV4cCI6MTY4NDI1NjQwMH0.vdVVhPEIB7ZV9oEaVDyxq430wfBgJgeYqiM5JTcdwqo";

export let https = axios.create({
  baseURL: BASE_URL,
  headers: {
    tokenCybersoft: TOKEN_CYBERSOFT,
    // lấy token từ local storage khi user đăng nhập
    token: localServ.user.get()?.token,
  },
});

// Add a request interceptor
https.interceptors.request.use(
  function (config) {
    store.dispatch(setLoadingOnAction());

    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
// Add a response interceptor
https.interceptors.response.use(
  function (response) {
    // console.log("yes reponse request");

    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
