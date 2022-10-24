import React from "react";
import * as S from "./TaskList.styled";
import TaskCard from "./TaskCard/TaskCard";

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
      {TaskContent.map((task) => (
        <TaskCard title={task.title} description={task.description} />
      ))}
    </S.TaskCardsWrapper>
  );
};

export default TaskList;
