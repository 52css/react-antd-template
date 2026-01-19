import {
  useEffect,
  useLayoutEffect,
  useRef,
  type FC,
  type ReactNode,
} from "react";
import * as echarts from "echarts";
import { clx } from "@/utils/clx";

export interface ChartProps {
  className?: string;
  children?: ReactNode;
  title?: string;
  xData: string[];
  yData: string[] | Record<string, string[]>;
}

const Chart: FC<ChartProps> = ({
  className,
  children,
  title,
  xData,
  yData,
}) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  // ① 只负责 init / dispose
  useLayoutEffect(() => {
    if (!chartRef.current) return;

    chartInstance.current = echarts.init(chartRef.current);

    const resize = () => chartInstance.current?.resize();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      chartInstance.current?.dispose();
      chartInstance.current = null;
    };
  }, []);

  // ② 只负责 setOption
  useEffect(() => {
    if (!chartInstance.current) return;
    const yAxis = [];
    const series = [];
    const legend = {
      data: [],
      bottom: "0%",
      left: "center",
    };

    if (Array.isArray(yData)) {
      yData = {
        a: yData,
      };
    }

    Object.keys(yData).forEach((key) => {
      const [name, groupName] = key.split(":");

      if (!yAxis.find((x) => x.name === groupName)) {
        yAxis.push({
          name: groupName,
          type: "value",
        });
      }

      legend.data.push({
        name,
      });

      if (yAxis.length > 1) {
        // 左边是bar，右边是line
        series.forEach((x) => (x.type = "bar"));
      }

      series.push({
        name,
        type: "line",
        data: yData[key],
        smooth: true,
        yAxisIndex: yAxis.length - 1,
      });
    });

    const option = {
      title: {
        text: title,
        textStyle: { fontSize: 14, color: "rgba(0,0,0,0.45)" },
      },
      legend: legend.data.length > 1 ? legend : null,
      tooltip: { trigger: "axis" },
      xAxis: { type: "category", data: xData },
      yAxis,
      series,
      toolbox: {
        right: "0%",
        top: "0%",
        itemSize: 12,
        feature: {
          dataView: { show: true, readOnly: true },
          magicType: { show: true, type: ["line", "bar"] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
    };

    chartInstance.current.setOption(option, true);
    setTimeout(() => {
      chartInstance.current.resize();
    });
  }, [title, xData, yData]);

  return (
    <div className={clx("p-4 bg-white rounded-xl", className)}>
      <div ref={chartRef} className="h-[400px]" />
    </div>
  );
};

export default Chart;
