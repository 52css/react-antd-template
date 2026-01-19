import { useEffect, type FC, type ReactNode } from "react";
import { clx } from "@/utils/clx";
import { Form as AntdForm, Button } from "antd";
import { toArray } from "@/utils/toArray";
import Title from "@/components/Title";
import View from "@/components/View";

export interface FormProps {
  className?: string;
  children?: ReactNode;
  parentKey?: string;
  parentKeys?: string[];
  title?: string;
  params?: any[];
}

const Form: FC<FormProps> = ({
  className,
  children,
  parentKey,
  parentKeys = [],
  title,
  params = [],
}) => {
  const [form] = AntdForm.useForm();

  // console.log("initialValues", initialValues);
  const onFinish = (values) => {
    console.log("values", values);
  };

  const handleReset = () => {
    form.resetFields();
  };

  useEffect(() => {
    const defaultVal = toArray(params).reduce((acc, param) => {
      Object.keys(param).forEach((key) => {
        acc[key] = param[key].value;
      });
      return acc;
    }, {});
    form.setFieldsValue(defaultVal);
  }, [params, form]);

  return (
    <div className={clx("form", className)}>
      <Title title={title} parentKey={parentKey} parentKeys={parentKeys} />
      <AntdForm layout="vertical" form={form} onFinish={onFinish}>
        {toArray(params).map((param, paramIndex) => (
          <section key={paramIndex} className="p-4 bg-white rounded-xl">
            <div className="grid grid-cols-4 gap-4 -mb-6 form-params">
              {Object.keys(param).map((key) => (
                <View
                  key={key}
                  data={param[key]}
                  parentKey={key}
                  parentKeys={[...parentKeys, paramIndex, key]}
                />
              ))}
              <AntdForm.Item
                className={clx("content-end", {
                  "col-span-4": Object.keys(param).length % 4 === 0,
                  "col-span-3": Object.keys(param).length % 4 === 1,
                  "col-span-2": Object.keys(param).length % 4 === 2,
                })}
              >
                <div className="flex gap-2 justify-end content-end">
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                  <Button htmlType="button" onClick={handleReset}>
                    Reset
                  </Button>
                </div>
              </AntdForm.Item>
            </div>
          </section>
        ))}
      </AntdForm>
    </div>
  );
};

export default Form;
