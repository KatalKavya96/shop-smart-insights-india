
import { FC, useState, useEffect } from "react";
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
import { ChartColumnBig } from "lucide-react";

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
  isLive?: boolean;
  updateInterval?: number; // in milliseconds
  maxDataPoints?: number;
};

const DataChart: FC<DataChartProps> = ({
  data: initialData,
  title,
  description,
  type = "bar",
  dataKeys,
  className,
  isLive = false,
  updateInterval = 1000, // default to 1 second
  maxDataPoints = 20, // default to showing 20 data points at a time
}) => {
  const [chartType, setChartType] = useState<ChartType>(type);
  const [data, setData] = useState<any[]>(initialData);
  const [isLiveActive, setIsLiveActive] = useState<boolean>(isLive);

  // Effect for handling live data updates
  useEffect(() => {
    if (!isLiveActive) return;

    const interval = setInterval(() => {
      // Update data with slight randomization to simulate live changes
      setData((currentData) => {
        const newData = [...currentData];

        // Update last item with slight variations
        const lastItem = { ...newData[newData.length - 1] };
        
        // Modify each numeric value with a small random change
        Object.keys(lastItem).forEach(key => {
          if (typeof lastItem[key] === 'number' && key !== dataKeys.xAxis) {
            // Apply a small random change between -5% and +5%
            const changePercent = (Math.random() * 10 - 5) / 100;
            lastItem[key] = Math.max(0, lastItem[key] * (1 + changePercent));
          }
        });
        
        // Create a new timestamp if xAxis is time-based
        if (typeof lastItem[dataKeys.xAxis] === 'string' && 
            (lastItem[dataKeys.xAxis].includes(':') || 
             ['date', 'time', 'timestamp'].some(term => dataKeys.xAxis.toLowerCase().includes(term)))) {
          const now = new Date();
          lastItem[dataKeys.xAxis] = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        } else if (typeof lastItem[dataKeys.xAxis] === 'number') {
          // If xAxis is numeric, increment it
          lastItem[dataKeys.xAxis] = lastItem[dataKeys.xAxis] + 1;
        }
        
        // Add new data point and limit the array size
        const result = [...newData, lastItem];
        return result.slice(-maxDataPoints);
      });
    }, updateInterval);

    return () => clearInterval(interval);
  }, [isLiveActive, dataKeys.xAxis, updateInterval, maxDataPoints]);

  // Reset to initial data when live mode is toggled off
  useEffect(() => {
    if (!isLiveActive) {
      setData(initialData);
    }
  }, [isLiveActive, initialData]);

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
                  isAnimationActive={!isLiveActive} // Disable animation for live updates
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
                  isAnimationActive={!isLiveActive} // Disable animation for live updates
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
          {isLive && (
            <button
              onClick={() => setIsLiveActive(!isLiveActive)}
              className={cn(
                "px-3 py-1 rounded text-sm ml-2 flex items-center gap-1",
                isLiveActive
                  ? "bg-green-600 text-white"
                  : "bg-secondary text-secondary-foreground"
              )}
            >
              <span className={cn("h-2 w-2 rounded-full", isLiveActive ? "bg-white animate-pulse" : "bg-muted-foreground")}></span>
              Live
            </button>
          )}
        </div>
      </div>
      {renderChart()}
      {isLiveActive && (
        <div className="flex justify-end mt-2">
          <span className="text-xs text-muted-foreground">
            Live updates every {updateInterval/1000}s
          </span>
        </div>
      )}
    </div>
  );
};

export default DataChart;
