import axios from "axios";
const md5 = require("md5")

export const BASE_URL = 'https://no23.lavina.tech';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
})

axiosInstance.interceptors.request.use((req: any) => {

  if (localStorage.getItem("key")) {
    const keys = JSON.parse(localStorage.getItem("key") || "");
    let data = req.method.toLowerCase() !== "post" && req.method.toLowerCase() !== "patch" ? "" : JSON.stringify(req.data)

    req.headers = {
      Key: keys.key,
      Sign: md5(req.method.toUpperCase() + req.baseURL + req.url + data + keys.secret)
    }
  }

  return req;
})