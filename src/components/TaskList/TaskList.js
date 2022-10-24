import React from "react";
import * as S from "./TaskList.styled";
import TaskBar from "./TaskBar/TaskBar";

export const TaskContent = [
  {
    status: "completed",
    title: "Create database",
    description:
      "lorem ipsum dolor sit amen lorem ipsum dolor sit amen lorem ipsum dolor sit amen",
  },
  {
    status: "completed",
    title: "Create database2",
    description:
      "lorem ipsum dolor sit amen lorem ipsum dolor sit amen lorem ipsum dolor sit amen2",
  },
];

const TaskList = () => {
  return (
    <S.TaskCardsWrapper>
      <S.TitleWrapper>
        <S.Title>YOUR TASKS</S.Title>
      </S.TitleWrapper>
      <TaskBar />
    </S.TaskCardsWrapper>
  );
};

export default TaskList;
