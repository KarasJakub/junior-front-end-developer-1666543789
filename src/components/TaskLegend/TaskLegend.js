import React from "react";
import * as S from "./TaskLegend.styled";
import blueIcon from "../../assets/icons/blue_icon.svg";
import greenIcon from "../../assets/icons/green_icon.svg";
import grayIcon from "../../assets/icons/gray_icon.svg";

export const TaskStatus = [
  {
    id: "green",
    content: "Completed",
  },
  {
    id: "blue",
    content: "Active",
  },
  {
    id: "Gray",
    content: "Blocked",
  },
];

const TaskLegend = () => {
  return (
    <S.LegendWrapper>
      <S.LegendTitle>Status Legend</S.LegendTitle>
      {TaskStatus.map((status) => (
        <S.LegendBar>
          <img
            src={
              status.id === "green"
                ? greenIcon
                : status.id === "blue"
                ? blueIcon
                : grayIcon
            }
            alt="Task status icon"
          />
          <strong>{status.content}</strong>
        </S.LegendBar>
      ))}
    </S.LegendWrapper>
  );
};

export default TaskLegend;
