import axios from 'axios'

//const baseURL = process.env.NODE_ENV === 'production' ? 'http://192.168.1.5:20010/' : '/api'
const proServer = 'http://192.168.1.5:11010/api';
const devServer = 'http://localhost:11010/api';

const baseURL = process.env.NODE_ENV === 'production' ? proServer : devServer;

const instance = axios.create({
  baseURL: baseURL,
  timeout: 2000,
});


// 添加一个请求拦截器
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('http request url:' + config.url);
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// 添加一个响应拦截器
instance.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });



export default instance;
