import axios from "axios";
import { BASE_URL } from "../constants/job";

const fetch = () => {
  return axios.get(BASE_URL);
};

const create = (params) => {
  return axios.post(BASE_URL, params);
};

const update = (id, params) => {
  return axios.put(`${BASE_URL}/${id}`, params);
};

const destroy = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};

const jobsApi = { fetch, create, destroy, update };

export default jobsApi;
