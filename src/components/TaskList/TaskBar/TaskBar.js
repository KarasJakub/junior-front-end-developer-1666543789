import React from "react";
import * as S from "./TaskBar.styled";
import ActiveIcon from "../../../assets/icons/Active.svg";
import CompletedIcon from "../../../assets/icons/Completed.svg";
import BlockedIcon from "../../../assets/icons/Blocked.svg";

export const TaskContent = [
  {
    status: "Completed",
    content: "Application Setup",
  },
  {
    status: "Completed",
    content: "Static Books List",
  },
  {
    status: "Completed",
    content: "Administration Panel",
  },
  {
    status: "Active",
    content: "Connect Admin with Frontend",
  },
  {
    status: "Blocked",
    content: "Book Review Feature",
  },
];

const TaskBar = () => {
  return (
    <>
      {TaskContent.map((content) => (
        <S.TaskBar>
          <img
            src={
              content.status === "Completed"
                ? CompletedIcon
                : content.status === "Active"
                ? ActiveIcon
                : BlockedIcon
            }
            alt="Task Status Icon"
          />
          <S.TaskContent
            style={
              content.status === "Blocked"
                ? { color: "grey" }
                : content.status === "Active"
                ? { fontWeight: "600" }
                : {}
            }
          >
            {content.content}
          </S.TaskContent>
        </S.TaskBar>
      ))}
    </>
  );
};

export default TaskBar;
