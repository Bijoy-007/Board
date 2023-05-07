const calcPercent = (value, total) => {
  if (total === 0) total = 1;
  return ((value / total) * 100).toFixed(2);
};

export default calcPercent;
