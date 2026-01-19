import type { FC, ReactNode } from "react";
import { clx } from "@/utils/clx";
import {
  Form,
  Cascader as AntdCascader,
  type CascaderProps as AntdCascaderProps,
} from "antd";

export interface CascaderProps extends AntdCascaderProps {
  className?: string;
  children?: ReactNode;
  parentKey?: string;
  parentKeys?: string[];
  label?: string;
  required?: boolean;
}

const Cascader: FC<CascaderProps> = ({
  className,
  parentKey,
  label,
  required,
  ...props
}) => {
  return (
    <Form.Item
      label={label}
      name={parentKey}
      rules={[
        {
          required,
        },
      ]}
      className={clx("content-end", className)}
    >
      <AntdCascader {...props} className="w-full" />
    </Form.Item>
  );
};

export default Cascader;
