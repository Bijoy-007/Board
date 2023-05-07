import calcPercent from "./calcPercent";

const getProductPercentages = (data) => {
  const total = data[0] + data[1] + data[2];

  return [
    {
      label: "Basic Tees",
      percentage: `${calcPercent(data[0], total)}%`,
    },
    {
      label: "Custom Short Pants",
      percentage: `${calcPercent(data[1], total)}%`,
    },
    {
      label: "Super Hoodies",
      percentage: `${calcPercent(data[2], total)}%`,
    },
  ];
};

export default getProductPercentages;
