import axios from "axios";

let env = process.env.NODE_ENV;
env = "production";

const service = axios.create({
  baseURL: "",
  timeout: 50000
});

service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    const res = response;
    if (res.status === 200) {

      return response.data;
    } else if (res.status === 500) {

    } else {
      return Promise.reject("error");
    }
  },
  error => {
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);
const get = (url, data) => {
  return service.get(url, {
    params: data
  });
};

const post = (url, data) => {
  return service.post(url, data);
};
export default {
  get,
  post
};
