import { Card, Col, Row, Typography } from "antd";
import { FC, useEffect } from "react";
import type { Dayjs } from "dayjs";
import { useRecoilState, useRecoilValue } from "recoil";
import { reminderListState } from "@/recoil/recoil_state";

interface reminderProps {
  date: Dayjs;
  taskType: string;
  content: string;
}
const Reminders: FC = () => {
  const [remindersList, setReminderList] = useRecoilState(reminderListState);
  //const {} = useQuery(["reminderUK"]);
  useEffect(() => {
    console.log(remindersList);
  }, []);
  return (
    <div className="flex justify-center flex-col">
      <Typography>reminder</Typography>
      <Row
        gutter={[16, 16]}
      >
        {remindersList?.map((reminder: reminderProps) => (
          <Col span={8}>
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
