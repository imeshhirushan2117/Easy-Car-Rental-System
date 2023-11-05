import axios from "axios";

const instance = axios.create({
    baseURL:'http://localhost:8080/Backend_war/api/'
})
export default instance;
