import Axios from Axios;

const api= Axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default api;