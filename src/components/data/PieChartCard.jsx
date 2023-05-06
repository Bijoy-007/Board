import "chart.js/auto";
import { Pie } from "react-chartjs-2";

const PieChartCard = (props) => {
  return (
    <div className="flex flex-col">
      <div className="pl-8 pt-6 font-bold text-lg">{props.label}</div>
      <div className="flex my-auto pt-2">
        <Pie
          style={{
            maxWidth: "100%",
            maxHeight: "8rem",
            margin: "auto",
          }}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
          data={props.data}
        />
      </div>
    </div>
  );
};

export default PieChartCard;
