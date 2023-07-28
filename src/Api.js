import axios from "axios";

const baseURL = "https://fakestoreapi.com/";

const headers = {
  "Content-type": "application/json",
};

const axiosClient = axios.create({
  baseURL,
  headers,
});

const get = async (url) => {
  const res = await axiosClient.get(url);
  return res;
};

const post = async (url, data) => {
  const res = await axiosClient.post(url, data);
  return res;
};

const patch = async (url, data) => {
  const res = await axiosClient.patch(url, data);
  return res;
};

export { get, post, patch };
