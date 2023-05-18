const filterData = (data) => {
  const parsed = data.split("\n");
  // After split we were getting 9 items thats y.
  parsed.pop();
  return parsed.map((it) => Number(it));
};

export default filterData;
