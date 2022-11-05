import axios from "axios";
import { store } from "../index";
import { setLoadingOnAction } from "../redux/actions/actionSpinner";
import { localServ } from "./localServices";

export const BASE_URL = "https://airbnbnew.cybersoft.edu.vn";
export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNCIsIkhldEhhblN0cmluZyI6IjIwLzAyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3Njg1MTIwMDAwMCIsIm5iZiI6MTY1NDEwMjgwMCwiZXhwIjoxNjc2OTk4ODAwfQ.QYLXMgjth5hQh9opZbNS7JEDPZGWA3o_95kR_VyLix8";

export let https = axios.create({
  baseURL: BASE_URL,
  headers: {
    tokenCybersoft: TOKEN_CYBERSOFT,
    // lấy token từ local storage khi user đăng nhập
    // token: localServ.user.get().token,
  },
});

// Add a request interceptor
https.interceptors.request.use(
  function (config) {
    console.log("config", config);
    store.dispatch(setLoadingOnAction());
    console.log("yes request");
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
    console.log("yes reponse request");

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
