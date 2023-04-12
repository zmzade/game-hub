import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "17522a3de6b54ee6beff8f8d05e7dedc",
  },
});
