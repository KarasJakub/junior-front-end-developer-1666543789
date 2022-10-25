import React from "react";
import * as S from "./TaskCard.styled";

const TaskCard = (props) => {
  const daysBetween = new Date().getDate() - new Date("2021-12-17").getDate();

  return (
    <S.TaskCardWrapper {...props}>
      <S.TopBar>
        <S.BarText>
          {" "}
          {props.author}
          {daysBetween + " days ago"}
        </S.BarText>
        <S.Title>{props.title}</S.Title>
        <S.BarText>{props.shortText}</S.BarText>
      </S.TopBar>
    </S.TaskCardWrapper>
  );
};

export default TaskCard;
