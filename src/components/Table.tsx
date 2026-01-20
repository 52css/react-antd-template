import { useMemo, type FC, type ReactNode } from "react";
import { clx } from "@/utils/clx";
import Title from "./Title";
import { Table as AntdTable } from "antd";

type Row = Record<string, unknown>;
type DataWrapper = { total?: number; data?: Row[] };

export type TableProps = {
  parentKey?: string;
  parentKeys?: string[];
  className?: string;
  children?: ReactNode;
  title?: string;
  data?: DataWrapper | Row[] | null;
};

const Table: FC<TableProps> = ({ className, title, data }) => {
  const total = useMemo<number | undefined>(
    () => (Array.isArray(data) ? undefined : data?.total),
    [data]
  );
  const dataSource = useMemo<Array<Row & { key: number }>>(() => {
    const list = Array.isArray(data) ? data : data?.data;
    return (list ?? []).map((item, index) => ({
      ...(item as Row),
      key: index,
    }));
  }, [data]);
  // console.log("total", total);
  return (
    <div className={clx("p-4 bg-white rounded-xl list", className)}>
      <Title title={title} />
      <AntdTable
        dataSource={dataSource}
        columns={Object.keys(dataSource?.[0] ?? {})
          .filter((x) => !/^_/.test(x))
          .map((key) => ({
            title: key,
            dataIndex: key,
            key,
          }))}
        pagination={
          total
            ? {
                total,
              }
            : false
        }
      />
    </div>
  );
};

export default Table;
