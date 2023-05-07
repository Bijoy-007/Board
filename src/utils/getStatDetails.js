const getStatDetails = (data) => {
  return {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Guest",
        data: data.slice(0, 5), // First 4 numbers
        borderColor: "#9BDD7C",
        backgroundColor: "#9BDD7C",
      },
      {
        label: "User",
        data: data.slice(4), // Last 4 elements
        borderColor: "#E9A0A0",
        backgroundColor: "#E9A0A0",
      },
    ],
  };
};

export default getStatDetails;
