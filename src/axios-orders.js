import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-e827f-default-rtdb.firebaseio.com/",
});

export default instance;
