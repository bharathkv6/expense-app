import ChartBar from "../ChartBar/ChartBar";
import { ChartProps } from "../../../Types/types";
import "./Chart.css";

const Chart: React.FC<ChartProps> = (props) => {
  const { dataPoints } = props;

  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue ?? undefined}
        />
      ))}
    </div>
  );
};

export default Chart;
