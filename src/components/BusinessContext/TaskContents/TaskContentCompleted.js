import React from "react";
import * as S from "../BusinessContext.styled";

const TaskContent = () => {
  return (
    <S.MessageSection>
      <S.MessageTitle />
      <S.MessageAuthor>
        <h4>
          If're seeing this, you probably don't choose any task, or the task you
          chose doesn't exist anymore
        </h4>
      </S.MessageAuthor>
    </S.MessageSection>
  );
};

export default TaskContent;
