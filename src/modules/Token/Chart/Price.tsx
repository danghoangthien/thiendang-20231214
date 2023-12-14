import { FC } from "react";

import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";

import "chartjs-adapter-moment";

ChartJS.register(
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  height: 400,
  scales: {
    x: {
      type: "time",
      gridLines: {
        lineWidth: 2,
      },
      time: {
        unit: "day",
        unitStepSize: 1000,
        displayFormats: {
          millisecond: "MMM DD",
          second: "MMM DD",
          minute: "MMM DD",
          hour: "MMM DD",
          day: "MMM DD",
          week: "MMM DD",
          month: "MMM DD",
          quarter: "MMM DD",
          year: "MMM DD",
        },
      },
    },
    y: {
      type: "linear", // Use linear scale for prices
      position: "left",
    },
  },
};

interface CanvasProps {
  chartData: any;
}

const Price: FC<CanvasProps> = ({ chartData }) => {
  return <Line data={chartData} options={options} />;
};

export default Price;
