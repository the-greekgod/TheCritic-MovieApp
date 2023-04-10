import axios from "axios";

const client = axios.create({
  baseURL: "https://thecriticback-lecaf.ondigitalocean.app/api",
});

export default client;
