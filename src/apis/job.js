import axios from "axios";

const BASE_URL = "https://64d3618267b2662bf3dc1ea1.mockapi.io/jobs";

const fetch = () => {
  return axios.get(BASE_URL);
};

const create = (params) => {
  return axios.post(BASE_URL, params);
};

const jobsApi = { fetch, create };

export default jobsApi;
