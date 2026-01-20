import type { FC, ReactNode } from "react";
import { clx } from "@/utils/clx";
import {
  Form,
  Input as AntdInput,
  type InputProps as AntdInputProps,
} from "antd";

export type InputProps = AntdInputProps & {
  className?: string;
  children?: ReactNode;
  parentKey?: string;
  parentKeys?: string[];
  label?: string;
  required?: boolean;
};

const Input: FC<InputProps> = ({
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
      <AntdInput {...props} className="w-full" />
    </Form.Item>
  );
};

export default Input;
