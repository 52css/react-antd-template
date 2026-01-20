import type { FC, ReactNode } from "react";
import { clx } from "@/utils/clx";
import {
  Form,
  ColorPicker as AntdColorPicker,
  type ColorPickerProps as AntdColorPickerProps,
} from "antd";

export type ColorPickerProps = AntdColorPickerProps & {
  className?: string;
  children?: ReactNode;
  parentKey?: string;
  parentKeys?: string[];
  label?: string;
  required?: boolean;
};

const ColorPicker: FC<ColorPickerProps> = ({
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
      <AntdColorPicker {...props} className="w-full" />
    </Form.Item>
  );
};

export default ColorPicker;
