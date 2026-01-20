import type { FC, ReactNode } from "react";
import { clx } from "@/utils/clx";
import {
  Form,
  DatePicker as AntdDatePicker,
  type DatePickerProps as AntdDatePickerProps,
} from "antd";

export type DatePickerProps = AntdDatePickerProps & {
  className?: string;
  children?: ReactNode;
  parentKey?: string;
  parentKeys?: string[];
  label?: string;
  required?: boolean;
};

const DatePicker: FC<DatePickerProps> = ({
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
      <AntdDatePicker {...props} className="w-full" />
    </Form.Item>
  );
};

export type RangePickerProps = AntdRangePickerProps & {
  className?: string;
  children?: ReactNode;
  parentKey?: string;
  parentKeys?: string[];
  label?: string;
  required?: boolean;
};

const DatePickerRangePicker: FC<RangePickerProps> = ({
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
      <AntdDatePicker.RangePicker {...props} className="w-full" />
    </Form.Item>
  );
};

DatePicker.RangePicker = DatePickerRangePicker;

export default DatePicker;
