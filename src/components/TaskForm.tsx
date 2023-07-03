import { Button, Form, Input, Select } from "antd";
import React, { FC } from "react";
import { Dayjs } from "dayjs";
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface taskprops {
  taskDate: Dayjs;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const TaskForm: FC<taskprops> = ({ taskDate, setIsModalOpen }) => {
  const [form] = Form.useForm();

  const onTaskTypeChange = (value: string) => {
    switch (value) {
      case "meeting":
        form.setFieldsValue({ note: "Hi, man!" });
        break;
      case "female":
        form.setFieldsValue({ note: "Hi, lady!" });
        break;
      case "other":
        form.setFieldsValue({ note: "Hi there!" });
        break;
      default:
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
    //set values and date to recoil and reset form
    setIsModalOpen(false);
  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item
        name="taskType"
        label="task type"
        rules={[{ required: true }]}
      >
        <Select
          placeholder="Select type of task"
          onChange={onTaskTypeChange}
          allowClear
        >
          <Option value="meeting">meeting</Option>
          <Option value="event">event</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      {/* <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues.gender !== currentValues.gender
        }
      >
        {({ getFieldValue }) =>
          getFieldValue("taskType") === "other" ? (
            <Form.Item
              name="customizeGender"
              label="Customize Gender"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item> */}
      <Form.Item
        name="task"
        label="task"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default TaskForm;
