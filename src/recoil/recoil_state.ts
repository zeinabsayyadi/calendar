import { atom } from "recoil";
import type { Dayjs } from "dayjs";

interface reminderProps {
  date: Dayjs;
  taskType: string;
  content: string;
}

 const reminderListState  = atom({
  key: "reminderListState",
  default: [] as reminderProps[],
});


export {
  reminderListState,
};
