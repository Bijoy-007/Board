const getProductsDetails = (data) => {
  return {
    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    datasets: [
      {
        data: data.slice(0, 3),
        backgroundColor: [
          "rgba(152, 216, 158, 1)",
          "rgba(238, 132, 132, 1)",
          "rgba(246, 220, 125, 1)",
        ],
        borderColor: [
          "rgba(152, 216, 158, 1)",
          "rgba(238, 132, 132, 1)",
          "rgba(246, 220, 125, 1)",
        ],
      },
    ],
  };
};

export default getProductsDetails;
