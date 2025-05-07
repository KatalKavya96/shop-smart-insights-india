
import { FC, useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { cn } from "@/lib/utils";

type ChartType = "bar" | "line" | "area";

type DataChartProps = {
  data: any[];
  title: string;
  description?: string;
  type?: ChartType;
  dataKeys: {
    xAxis: string;
    bars?: { key: string; color: string }[];
    lines?: { key: string; color: string }[];
    areas?: { key: string; color: string }[];
  };
  className?: string;
};

const DataChart: FC<DataChartProps> = ({
  data,
  title,
  description,
  type = "bar",
  dataKeys,
  className,
}) => {
  const [chartType, setChartType] = useState<ChartType>(type);

  const renderChart = () => {
    switch (chartType) {
      case "bar":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={dataKeys.xAxis} />
              <YAxis />
              <Tooltip />
              <Legend />
              {dataKeys.bars?.map((bar, index) => (
                <Bar
                  key={index}
                  dataKey={bar.key}
                  fill={bar.color}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        );
      case "line":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={dataKeys.xAxis} />
              <YAxis />
              <Tooltip />
              <Legend />
              {dataKeys.lines?.map((line, index) => (
                <Line
                  key={index}
                  type="monotone"
                  dataKey={line.key}
                  stroke={line.color}
                  activeDot={{ r: 8 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        );
      case "area":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={dataKeys.xAxis} />
              <YAxis />
              <Tooltip />
              <Legend />
              {dataKeys.areas?.map((area, index) => (
                <Area
                  key={index}
                  type="monotone"
                  dataKey={area.key}
                  stroke={area.color}
                  fill={area.color}
                  fillOpacity={0.3}
                />
              ))}
            </AreaChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <div className={cn("bg-card p-6 rounded-xl shadow-md", className)}>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setChartType("bar")}
            className={cn(
              "px-3 py-1 rounded text-sm",
              chartType === "bar"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
            )}
          >
            Bar
          </button>
          <button
            onClick={() => setChartType("line")}
            className={cn(
              "px-3 py-1 rounded text-sm",
              chartType === "line"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
            )}
          >
            Line
          </button>
          <button
            onClick={() => setChartType("area")}
            className={cn(
              "px-3 py-1 rounded text-sm",
              chartType === "area"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
            )}
          >
            Area
          </button>
        </div>
      </div>
      {renderChart()}
    </div>
  );
};

export default DataChart;
