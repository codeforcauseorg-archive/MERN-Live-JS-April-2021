import axios from "axios";

let instance = axios.create();

instance.defaults.baseURL = "http://localhost:5000/";

export default instance;
