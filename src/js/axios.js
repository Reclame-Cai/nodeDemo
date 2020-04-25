import axios from 'axios';
// import qs from 'qs';

const instance = axios.create({
  timeout: 50000000
});

// instance.interceptors.request.use(config => {
//   config.headers = { 'content-type': 'application/x-www-form-urlencoded' };
//   config.data = qs.stringify(config.data);
//   return config;
// });

export default instance;