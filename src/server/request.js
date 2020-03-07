import axios from 'axios';

const instance = (req) => axios.create({
  baseURL: 'http://47.95.113.63/ssr',
  cookie: req.get('cookie') || ''
});
export default instance;