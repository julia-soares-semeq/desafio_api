import axios from 'axios';

//create an instance of axios with the base URL
const instance = axios.create({
    baseURL: 'http://localhost:8000/'
});

export default instance;