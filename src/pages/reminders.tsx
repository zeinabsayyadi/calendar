import { Card, Col, Row, Typography } from "antd";
import { FC } from "react";
import type { Dayjs } from "dayjs";
import { useRecoilValue } from "recoil";
import { reminderListState } from "@/recoil/recoil_state";

interface reminderProps {
  date: Dayjs;
  taskType: string;
  content: string;
}
const Reminders: FC = () => {
  const remindersList = useRecoilValue(reminderListState);
  //const {} = useQuery(["reminderUK"]);
  return (
    <>
      <Typography>reminder</Typography>
      <Row gutter={16}>
        {remindersList?.map((reminder: reminderProps) => (
          <Col span={8}>
            <Card
              title={reminder?.date.format("DD/MM/YYYY")}
              bordered={false}
            >
              <Row>
                <Col
                  span={18}
                  push={6}
                >
                  {reminder?.taskType}
                </Col>
                <Col
                  span={6}
                  pull={18}
                >
                  {reminder?.content}
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Reminders;
