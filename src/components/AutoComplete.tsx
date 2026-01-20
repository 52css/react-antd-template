import type { FC, ReactNode } from "react";
import { clx } from "@/utils/clx";
import {
  Form,
  AutoComplete as AntdAutoComplete,
  type AutoCompleteProps as AntdAutoCompleteProps,
} from "antd";

export type AutoCompleteProps = AntdAutoCompleteProps & {
  className?: string;
  children?: ReactNode;
  parentKey?: string;
  parentKeys?: string[];
  label?: string;
  required?: boolean;
};

const AutoComplete: FC<AutoCompleteProps> = ({
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
      <AntdAutoComplete {...props} className="w-full" />
    </Form.Item>
  );
};

export default AutoComplete;
