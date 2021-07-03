import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333/',
    //baseURL: 'https://my-json-server.typicode.com/cidadealta/exercise',
})

export default api; 