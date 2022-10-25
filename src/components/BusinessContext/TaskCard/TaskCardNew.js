import React from "react";
import * as S from "./TaskCardNew.styled";

const TaskCardNew = (props) => {
  const daysBetween = new Date().getDate() - new Date("2021-12-17").getDate();
  return (
    <S.TaskCardWrapper {...props}>
      <S.TopBar>
        <S.BarText>
          <div className="new">NEW</div>
          {props.author}
          {daysBetween + " days ago"}
        </S.BarText>
        <S.Title>{props.title}</S.Title>
        <S.BarText>{props.shortText}</S.BarText>
      </S.TopBar>
    </S.TaskCardWrapper>
  );
};

export default TaskCardNew;
