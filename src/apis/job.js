import axios from "axios";

const BASE_URL = "https://64d3618267b2662bf3dc1ea1.mockapi.io/jobs";

const fetch = () => {
  return axios.get(BASE_URL);
};

const jobsApi = { fetch };

export default jobsApi;
