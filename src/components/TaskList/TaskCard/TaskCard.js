import React from "react";
import * as S from "./TaskCard.styled";

const TaskCard = (props) => {
  return (
    <S.CardWrapper>
      <S.HeadingTop>{props.title}</S.HeadingTop>
      <S.HeadingBottom>{props.description}</S.HeadingBottom>
    </S.CardWrapper>
  );
};

export default TaskCard;
