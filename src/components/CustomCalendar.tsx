import React, { FC, useState } from "react";
import { Alert, Calendar, Modal } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import TaskForm from "./TaskForm";

const CustomCalendar: FC = () => {
  const [taskDate, setTaskDate] = useState<Dayjs>(dayjs("2010-01-01"));
  const [value, setValue] = useState(() => dayjs("2017-01-25"));
  const [selectedValue, setSelectedValue] = useState(() => dayjs("2017-01-25"));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSelect = (newValue: Dayjs) => {
    setValue(newValue);
    setSelectedValue(newValue);
    setIsModalOpen(true);
  };

  const onPanelChange = (newValue: Dayjs) => {
    setValue(newValue);
  };

  return (
    <>
    
      <Calendar
        value={value}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
      />
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        //onOk={handleOk}
        //onCancel={handleCancel}
        footer={null}
      >
        <TaskForm
          taskDate={selectedValue}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>
    </>
  );
};

export default CustomCalendar;
