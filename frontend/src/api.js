import Axios from Axios;

const api= Axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default api;