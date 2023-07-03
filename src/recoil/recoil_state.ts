import { atom, selector } from "recoil";
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

// const reminderListFilterState = atom({
//   key: "reminderListFilterState",
//   default: "Show All",
// });

// const filteredreminderListState = selector({
//   key: "filteredreminderListState",
//   get: ({ get }) => {
//     const filter = get(reminderListFilterState);
//     const list = get(reminderListState);

//     switch (filter) {
//       case "Show Completed":
//         return list.filter((item) => item.isComplete);
//       case "Show Uncompleted":
//         return list.filter((item) => !item.isComplete);
//       default:
//         return list;
//     }
//   },
// });

// const reminderListStatsState = selector({
//   key: "reminderListStatsState",
//   get: ({ get }) => {
//     const reminderList = get(reminderListState);

//     return {
//       totalNum,
//       totalCompletedNum,
//       totalUncompletedNum,
//       percentCompleted,
//       allText,
//     };
//   },
// });

export {
  reminderListState,
};
