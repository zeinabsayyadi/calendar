import { Card, Col, Row, Typography } from "antd";
import { FC, useEffect } from "react";
import type { Dayjs } from "dayjs";
import { useRecoilState } from "recoil";
import { reminderListState } from "@/recoil/recoil_state";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
interface reminderProps {
  date: Dayjs;
  taskType: string;
  content: string;
}
const Reminders: FC = () => {
  const [remindersList, setReminderList] = useRecoilState(reminderListState);
  const { data } = useQuery(["reminder"], async () => {
    const res = await fetch(
      "https://64a2cb25b45881cc0ae5b64d.mockapi.io/reminder",
      {
        method: "GET",
        headers: { "content-type": "application/json" },
      }
    );
    return res.json();
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      data.forEach(function (item: reminderProps) {
        setReminderList((oldReminderList) => [
          ...oldReminderList,
          {
            date: dayjs(
              item?.date
                .toString()
                .slice(0, 10)
                .concat(" ")
                .concat(item?.date.toString().slice(11, 19)),
              "YYYY-MM-DD HH:mm:ss"
            ),
            taskType: item?.taskType,
            content: item?.content,
          },
        ]);
      });
    }
  }, [data?.length]);

  return (
    <div className="flex justify-center flex-col">
      <Typography>reminder</Typography>
      <Row gutter={[16, 16]}>
        {remindersList?.map((reminder: reminderProps, index) => (
          <Col
            span={8}
            key={index}
          >
            <Card
              style={{
                width: "300px",
                height: "300px",
                margin: "2rem",
              }}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              title={
                <Row gutter={8}>
                  <Col span={12}>
                    <Typography className="text-white italic">
                      {reminder?.date.format("DD/MM/YYYY")}
                    </Typography>
                  </Col>
                  <Col span={12}>
                    <Typography className="text-white italic">
                      {reminder?.date.format("h:mm A")}
                    </Typography>
                  </Col>
                </Row>
              }
              bordered={false}
            >
              <Row gutter={[8, 8]}>
                <Col span={24}>
                  <Typography className="text-white">
                    {reminder.taskType}
                  </Typography>
                </Col>
                <Col span={24}>
                  <Typography className="text-white">
                    {reminder.content}
                  </Typography>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Reminders;
