import { type FC, type ReactNode, useMemo } from "react";
import { clx } from "@/utils/clx";

import Title from "@/components/Title";
import Stat from "@/components/Stat";
import Table from "@/components/Table";
import Chart from "@/components/Chart";

export interface ViewProps {
  className?: string;
  children?: ReactNode;
  parentKey?: string | number;
  parentKeys?: (string | number)[];
  data?: {
    className?: string;
    $type?: string;
    [key: string]: any;
  };
}

const View: FC<ViewProps> = ({
  className,
  children,
  parentKey,
  parentKeys = [],
  data,
}) => {
  const { $type, ...other } = data;
  const Component = useMemo(() => {
    const ComponentMap = {
      Title,
      Stat,
      Table,
      Chart,
      // Form: $Form,
      // AutoComplete: $AutoComplete,
      // Cascader: $Cascader,
      // Checkbox: $Checkbox,
      // "Checkbox.Group": $Checkbox.Group,
      // ColorPicker: $ColorPicker,
      // DatePicker: $DatePicker,
      // RangePicker: $RangePicker,
      // Input: $Input,
      // "Input.TextArea": $Input.TextArea,
      // "Input.Search": $Input.Search,
      // "Input.Password": $Input.Password,
      // "Input.OTP": $Input.OTP,
      // InputNumber: $InputNumber,
      // Mentions: $Mentions,
      // Radio: $Radio,
      // "Radio.Group": $Radio.Group,
      // Rate: $Rate,
      // Select: $Select,
      // Slider: $Slider,
      // Switch: $Switch,
      // TimePicker: $TimePicker,
      // Transfer: $Transfer,
      // TreeSelect: $TreeSelect,
      // Upload: $Upload,
      // Link: $Link,
      // TabsForm: $TabsForm,
    };
    return ComponentMap[$type];
  }, [$type]);

  if ($type) {
    if (Component) {
      return (
        <Component parentKey={parentKey} parentKeys={parentKeys} {...other} />
      );
    } else {
      console.error(`Component not found for type: ${$type}`);
      return null;
    }
  }

  if (Array.isArray(data)) {
    return (
      <div
        className={clx(
          `view-col flex flex-col`,
          parentKeys.length === 0
            ? "gap-4"
            : parentKeys.length === 1
              ? "gap-2"
              : "",
        )}
      >
        {data.map((item, index) => (
          <View
            key={index}
            data={item}
            parentKey={index}
            parentKeys={[...parentKeys, index]}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={clx(
        "view-row rounded-lg flex items-center",
        parentKeys.length === 0
          ? "gap-2"
          : parentKeys.length === 1
            ? "gap-1"
            : "",
        data.className,
      )}
    >
      {data &&
        Object.keys(data).map(
          (key) =>
            !["className"].includes(key) && (
              <View
                key={key}
                data={data[key]}
                parentKey={key}
                parentKeys={[...parentKeys, key]}
              />
            ),
        )}
    </div>
  );
};

export default View;
