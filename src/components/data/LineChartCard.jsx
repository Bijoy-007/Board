import "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChartCard = (props) => {
  return (
    <div>
      <Line
        style={{
          margin: 0,
          minWidth: "100%",
        }}
        data={props.data}
        height={"50%"}
        options={{
          elements: {
            point: {
              radius: 0,
            },
          },
          tension: 0.4,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                drawOnChartArea: false,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default LineChartCard;
