import getWithoutAuth from "../utils/getWithoutAuth";

const getRandomNumbers = async () => {
  try {
    const res = await getWithoutAuth("/random?min=1&max=50&count=8");

    if (res) {
      return {
        ok: true,
        data: res.data,
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
