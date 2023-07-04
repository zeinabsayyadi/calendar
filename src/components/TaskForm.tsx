import { Button, Form, Input, Select } from "antd";
import React, { FC, useEffect } from "react";
import type { Dayjs } from "dayjs";
import { useRecoilState, useSetRecoilState } from "recoil";
import { reminderListState } from "@/recoil/recoil_state";
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
interface reminderProps {
  date: Dayjs;
  taskType: string;
  content: string;
}

interface reminderPropsList {
  key: string;
  defult: Array<reminderProps>;
}
const TaskForm: FC<taskprops> = ({ taskDate, setIsModalOpen }) => {
  const [form] = Form.useForm();
  const [reminderList, setReminderList] = useRecoilState(reminderListState);
  const onFinish = (values: any) => {
    console.log(values);
    //set values and date to recoil and reset form
    setReminderList((oldReminderList) => [
      ...oldReminderList,
      {
        date: taskDate,
        taskType: values?.reminderType,
        content: values?.reminder,
      },
    ]);
    setIsModalOpen(false);
  };
  useEffect(() => {
    console.log(reminderList);
  }, [reminderList]);
  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item
        name="reminderType"
        label="reminder type"
        rules={[{ required: true }]}
      >
        <Select
          placeholder="Select type of reminder"
          allowClear
        >
          <Option value="meeting">meeting</Option>
          <Option value="event">event</Option>
          <Option value="todo">todo task</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="reminder"
        label="reminder"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button
          htmlType="submit"
          className="bg-fuchsia-500 hover:bg-fuchsia-700 text-white hover:text-white"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default TaskForm;
