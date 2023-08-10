import axios from "axios";
import { toast } from "react-toastify";

const baseURL = "https://fakestoreapi.com/";

const headers = {
  "Content-type": "application/json",
};

const axiosClient = axios.create({
  baseURL,
  headers,
});

const get = async (url) => {
  const res = await axiosClient
    .get(url)
    .then((res) => res)
    .catch((err) => {
      toast(err?.message || "Error");
      console.error(err);
      return err;
    });

  return res;
};

const post = async (url, data) => {
  const res = await axiosClient
    .post(url, data)
    .then((res) => res)
    .catch((err) => {
      toast(err?.message || "Error");
      console.error(err);
      return err;
    });
};

const patch = async (url, data) => {
  const res = await axiosClient.patch(url, data);
  return res;
};

export { get, post, patch };
