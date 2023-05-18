import axios from "axios";

const getWithoutAuth = async (endPoint) => {
  /*
   * This base URL should be in env but for sake of simplicity I'm keeping this here only
   */
  return axios.get(`https://www.random.org${endPoint}`);
};

export default getWithoutAuth;
