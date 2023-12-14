import { FC } from "react";
import moment from "moment";
import { Line } from "react-chartjs-2";
import "chartjs-chart-financial";

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  CategoryScale,
} from "chart.js";

import "chartjs-adapter-moment";

ChartJS.register(
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  CategoryScale
);

// const options = {
//   responsive: true,
//   scales: {
//     x: {
//       type: 'time',
//       gridLines: {
//         lineWidth: 2
//       },
//       time: {
//         unit: "day",
//         unitStepSize: 1000,
//         displayFormats: {
//             millisecond: 'MMM DD',
//             second: 'MMM DD',
//             minute: 'MMM DD',
//             hour: 'MMM DD',
//             day: 'MMM DD',
//             week: 'MMM DD',
//             month: 'MMM DD',
//             quarter: 'MMM DD',
//             year: 'MMM DD',
//         }
//       },
//     },
//     y: {
//       type: 'linear', // Use linear scale for prices
//       position: 'left',
//     },
//   },
// };

interface CanvasProps {
  chartData: any;
}

const options = {
  scales: {
    x: {
      type: "time",
      time: {
        unit: "day",
      },
    },
    y: {
      title: {
        display: true,
        text: "Price",
      },
      ticks: {
        // Add any y-axis configuration here, if needed
      },
    },
  },
};

const OHLCChart = ({ chartData }: { chartData: CanvasProps }) => {
  return (
    <div>
      <Line data={chartData} options={options} type="candlestick" />
    </div>
  );
};

export default OHLCChart;
