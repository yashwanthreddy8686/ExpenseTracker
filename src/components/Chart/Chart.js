import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {

  const chartDataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const chartMaxValue = Math.max(...chartDataPointsValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={chartMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
