import filterData from "../utils/filterData";
import getWithoutAuth from "../utils/getWithoutAuth";

const getRandomNumbers = async () => {
  try {
    const res = await getWithoutAuth(
      "/integers/?num=8&min=1&max=50&col=1&base=10&format=plain&rnd=new"
    );
    if (res) {
      return {
        ok: true,
        data: filterData(res.data),
      };
    } else {
      return {
        ok: false,
        data: null,
      };
    }
  } catch (err) {
    alert(err.message);
    return {
      ok: false,
      data: null,
    };
  }
};

export default getRandomNumbers;
