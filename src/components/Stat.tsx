import type { FC, ReactNode } from "react";
import { Statistic } from "antd";
import { clx } from "@/utils/clx";

export type StatProps = {
  parentKey?: string;
  parentKeys?: string[];
  title?: ReactNode | string;
  value?: number | string;
  className?: string;
};

const Stat: FC<StatProps> = ({ title, value, className }) => {
  return (
    <div className={clx("p-4 bg-white rounded-xl stat", className)}>
      <Statistic title={title} value={value} />
    </div>
  );
};

export default Stat;
