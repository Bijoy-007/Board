import axios from "axios";

const getWithoutAuth = async (endPoint) => {
  /*
   * This base URL should be in env but for sake of simplicity I'm keeping this here only
   */
  return axios.get(`http://www.randomnumberapi.com/api/v1.0${endPoint}`);
};

export default getWithoutAuth;
