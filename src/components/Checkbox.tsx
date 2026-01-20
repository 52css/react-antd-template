import type { FC, ReactNode } from "react";
import { clx } from "@/utils/clx";
import {
  Form,
  Checkbox as AntdCheckbox,
  type CheckboxProps as AntdCheckboxProps,
} from "antd";
import { getOptions, type OptionsInput } from "@/utils/getOptions";

export type CheckboxProps = AntdCheckboxProps & {
  className?: string;
  children?: ReactNode;
  parentKey?: string;
  parentKeys?: string[];
  label?: string;
  required?: boolean;
};

const Checkbox: FC<CheckboxProps> = ({
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
      valuePropName="checked"
      className={clx("content-end", className)}
    >
      <AntdCheckbox {...props} className="w-full" />
    </Form.Item>
  );
};

export type CheckboxGroupProps = {
  className?: string;
  children?: ReactNode;
  parentKey?: string;
  parentKeys?: string[];
  label?: string;
  required?: boolean;
  options?: OptionsInput;
};

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  className,
  parentKey,
  label,
  required,
  options,
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
      <AntdCheckbox.Group
        options={getOptions(options)}
        {...props}
        className="w-full"
      />
    </Form.Item>
  );
};

Checkbox.Group = CheckboxGroup;

export default Checkbox;
